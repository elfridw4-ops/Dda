# Audit de sécurité applicative (AppSec)

## Règle d'usage — quel prompt utiliser

- **Petit projet ou premier passage** → utiliser uniquement le prompt **Global**. Il couvre déjà front + back.
- **Gros projet, ou audit approfondi après un premier passage global** → utiliser **Frontend** et **Backend** séparément, jamais en même temps que le Global sur le même périmètre (sinon doublons).
- **Si un même problème est remonté par le prompt Frontend ET le prompt Backend** (ex : un secret exposé visible des deux côtés) : le finding est attribué au périmètre où se trouve la cause racine. Le second prompt le signale comme "déjà couvert dans l'audit [périmètre] — ID [AUDIT-...]", sans créer de second finding dupliqué.
- Ne jamais lancer les trois prompts sur le même code dans la même session sans avoir tranché à l'avance laquelle des deux règles ci-dessus s'applique.

---

## Niveaux d'application — obligatoire / recommandé / optionnel

Tout n'a pas le même poids.

**Obligatoire, jamais sauté :**
- Traçage de flux avant de confirmer un finding
- Preuve fichier + ligne pour chaque finding
- Justification de la gravité selon la grille
- Règle anti-fuite des secrets
- Statut par finding (Confirmé / Probable / Non vérifiable)
- Rapport final en fichier `.md` persistant

**Recommandé par défaut, désactivable si le projet est petit ou si demandé explicitement :**
- Score /100 détaillé
- Fichier PoC séparé
- Code corrigé complet pour chaque finding (une explication du correctif seule peut suffire sur un tout petit projet)
- Boucle de vérification post-correctif formalisée

**Optionnel, uniquement si le stack détecté le justifie :**
- Toute catégorie conditionnée par une techno précise (GraphQL, WebSocket, OAuth/OIDC, Redis, Kubernetes, HTTP Request Smuggling, pipeline documentaire, intégration LLM/IA générative) — déjà marquées "si applicable/si détecté" dans les listes ci-dessous.
---

## Étape 0 — commune aux trois prompts (à exécuter avant toute analyse)

1. Confirmer l'accès réel au code (déjà acquis dans ce contexte — le préciser dans le rapport). **Si l'accès est partiel** (ex : frontend fourni, backend absent) : analyser uniquement la partie accessible sans inférer ce qui n'est pas visible ; lister en en-tête du rapport les parties non couvertes ; tout finding qui dépend d'un comportement backend inconnu se classe "à vérifier côté backend — non confirmé dans ce périmètre" ; ne pas produire de score global sur un périmètre partiel, produire un score périmètre-limité avec la mention explicite du manque.
2. Identifier le stack réel (langages, frameworks, ORM, base de données, gestion d'auth).
3. Ne vérifier que les catégories de vulnérabilités pertinentes pour ce stack. Si une catégorie de la liste ne s'applique pas (ex : pas de LDAP), l'indiquer en une ligne "N/A — non applicable, pas de [technologie] détectée dans le projet", ne pas produire de section vide développée juste pour cocher la case.
4. Vérifier les dépendances : lister les paquets avec version, signaler ceux ayant des CVE connues à la date de l'audit, en précisant la version corrigée disponible si connue. **Vérifier aussi la Dependency Confusion** si des paquets internes/privés sont utilisés : la config du gestionnaire de paquets (scoped packages npm, index-url pip, etc.) force-t-elle bien l'usage du registre privé, ou un paquet public portant le même nom pourrait-il être résolu à la place ?
5. **Compromission de paquet sans CVE (supply-chain zero-day)** — distinct du point précédent : une CVE n'existe que pour une faille déjà documentée. Une compromission de compte mainteneur qui republie un paquet légitime avec du code malveillant n'a AUCUNE CVE au moment de l'attaque — c'est le vecteur dominant des attaques supply-chain npm en 2026 (axios, keyv/cacheable, vers type Shai-Hulud), invisible à `npm audit`. Vérifier en plus : scripts `preinstall`/`postinstall` présents dans les dépendances (vecteur d'exécution principal de ces attaques), `package-lock.json` committé et cohérent avec `package.json`, usage de `npm ci` (pas `npm install`) en CI/CD. Sans scanner comportemental (Socket, Snyk, Aikido), signaler cette catégorie comme "non couverte — CVE seule insuffisante", jamais comme vérifiée.
6. **Tracer le flux avant de confirmer un finding.** Un pattern qui ressemble à une faille (ex : concaténation de string dans une requête) n'est un finding confirmé que si la donnée utilisateur est effectivement non filtrée/non échappée jusqu'au point d'exécution réel. Suivre la donnée de sa source (entrée utilisateur) à son usage (requête DB, commande système, rendu HTML) avant de la classer comme vulnérabilité. Si le doute persiste, classer en "à surveiller" selon deux sous-catégories distinctes, jamais en finding confirmé :
   - **"À surveiller — protection possible ailleurs"** : le pattern est présent, mais une couche de protection (middleware global, sanitization en amont) pourrait exister hors du fichier analysé. Indiquer où chercher pour trancher.
   - **"À surveiller — contexte de déploiement déterminant"** : la faille est réelle dans le code, mais son exploitabilité dépend d'une config de déploiement (réseau interne, reverse proxy, variable d'env). Indiquer quelle config vérifier en environnement réel.
7. **Ne jamais présenter une configuration infra invisible dans le code comme un fait confirmé.** Le code seul ne dit pas si un bucket S3 est public, si un WAF filtre le trafic, si un CDN/Cloudflare modifie les en-têtes, si une CSP est injectée par nginx en amont, ou quelles sont les policies IAM réelles. Pour tout finding qui dépend de ce type de config externe non visible dans le repo, formuler explicitement "configuration potentiellement vulnérable — non confirmable depuis le code seul, à vérifier dans la console cloud/l'infra" plutôt que d'affirmer le problème comme acquis.
8. Se référer à l'**OWASP Top 10:2025** (finalisé janvier 2026, pas la version 2021) pour les références de finding : SSRF est désormais fusionné dans Broken Access Control (A01), nouvelles catégories Software Supply Chain Failures (A03) et Mishandling of Exceptional Conditions (A10).

---

## Grille de gravité (à appliquer uniformément dans les 3 prompts)

| Gravité | Critère |
|---|---|
| **Critique** | Exploitable à distance, sans authentification, avec impact direct (accès données sensibles, exécution de code, prise de contrôle de compte). |
| **Haute** | Exploitable avec authentification faible ou conditions simples à réunir, impact significatif (accès à des données d'autres utilisateurs, contournement d'autorisation). |
| **Moyenne** | Exploitable dans des conditions spécifiques (config particulière, interaction utilisateur requise), impact limité ou partiel. |
| **Faible** | Difficilement exploitable, impact mineur, ou nécessite un accès déjà privilégié. |

Aucune gravité ne doit être attribuée sans que ce tableau soit appliqué explicitement — indiquer dans le finding pourquoi ce niveau a été choisi.

---

## Priorité de correction (distincte de la gravité)

La gravité mesure le risque théorique. La priorité mesure l'ordre réel de traitement, qui dépend aussi de l'exposition et du contexte d'usage. Les deux ne se confondent pas.

Exemple : un XSS stocké dans une page interne jamais visitée est Gravité Haute mais Priorité P2 — peu exposé. Une IDOR sur l'endpoint des factures, activement utilisé, est Gravité Haute et Priorité P0 — traitement immédiat.

| Priorité | Sens |
|---|---|
| **P0** | À corriger avant tout déploiement, quelle que soit la charge de travail — exposition active, exploitation triviale. |
| **P1** | À corriger dans le cycle en cours, avant la prochaine mise en production planifiée. |
| **P2** | À planifier, pas urgent — faible exposition ou conditions d'exploitation peu probables en pratique. |
| **P3** | Acceptable en dette technique documentée, à revoir si le contexte change (ex : la page devient publique). |

Chaque finding doit indiquer la priorité avec une justification d'une ligne si elle diverge de ce que la gravité seule suggérerait.

---

## Méthode de calcul du score /100

**Problème corrigé en v6** : la méthode linéaire précédente (-15/-8/-3/-1 par occurrence, sans limite) écrase toute nuance dès qu'un projet a beaucoup de findings Critique — 6 Critique ou 20 Critique donnaient tous les deux un score de 0, ce qui ne veut rien dire pour comparer deux projets réellement différents.

Partir de 100, puis déduire par catégorie de gravité avec un poids **dégressif** (chaque occurrence supplémentaire pèse moins que la précédente, pour garder du signal même sur un projet très touché) :

| Gravité | 1ère occurrence | 2e | 3e | Au-delà (chacune) |
|---|---|---|---|---|
| Critique | -15 | -10 | -7 | -3 |
| Haute | -8 | -5 | -3 | -2 |
| Moyenne | -3 | -3 | -2 | -1 |
| Faible | -1 | -1 | -1 | -1 (max -10 cumulé pour cette catégorie) |

Plancher à 0 (pas de score négatif). Indiquer le détail complet du calcul dans le rapport (occurrences par gravité, poids appliqué à chacune, total), pas juste le chiffre final — sinon deux audits restent incomparables.

**Cas des findings regroupés (v7)** : la règle de regroupement (voir plus bas) compte une même faille racine touchant plusieurs endpoints comme **un seul finding** — mais un seul finding sur 10 endpoints n'a pas le même risque réel qu'un seul finding sur 1 endpoint. Pour le calcul du score, un finding regroupé compte comme `min(nombre d'emplacements, 3)` occurrences de sa gravité dans le tableau ci-dessus (jamais plus de 3, même si 20 endpoints sont touchés). Exemple : une injection SQL Critique regroupée sur 10 routes compte comme 3 occurrences Critique (-15 -10 -7 = -32), pas comme 1 occurrence (-15) ni comme 10 (-102 avant plancher).

---

## Règle anti-fuite (obligatoire, tous prompts)

Si un secret (clé API, token, mot de passe, chaîne de connexion) est trouvé exposé dans le code :
- Signaler le fichier et la ligne.
- Indiquer le type de secret et sa nature (ex : "clé API tierce", "identifiants de base de données").
- **Ne jamais reproduire la valeur du secret dans le rapport**, même partiellement (pas de "commence par sk-...").
- Recommander la rotation immédiate du secret concerné, pas seulement son retrait du code.

---

## Principe du moindre privilège (exigence transversale, obligatoire)

Ce principe s'applique à deux niveaux distincts — les deux doivent être couverts.

**1. Comme catégorie d'audit à part entière.** Rechercher spécifiquement :
- Comptes de base de données utilisés par l'application avec des droits plus larges que nécessaire (ex : un compte applicatif avec droits `DROP`/`ALTER` alors qu'il ne fait que du `SELECT`/`INSERT`).
- Clés API tierces (paiement, email, stockage, IA) avec des scopes plus larges que ce que l'application utilise réellement.
- Rôles/permissions applicatifs qui donnent un accès admin par défaut, ou l'absence de séparation claire entre rôles utilisateur/admin.
- Tokens de service ou comptes techniques (CI/CD, cron, scripts internes) avec des permissions non limitées dans le temps ou dans le périmètre.
- Permissions de fichiers/dossiers trop permissives sur le serveur (ex : fichiers de config en 777).
- Absence de séparation entre environnement de développement et production dans les accès (ex : même clé API utilisée en dev et en prod).
- Middleware ou logique d'autorisation qui fonctionne en "default-allow" (tout est accessible sauf ce qui est explicitement bloqué) au lieu de "default-deny" (rien n'est accessible sauf ce qui est explicitement autorisé).

**2. Comme règle de conception pour tout correctif proposé.** Chaque "Code corrigé" fourni dans un finding doit, par défaut :
- Donner le droit minimal nécessaire pour que la fonctionnalité marche, jamais plus.
- Préférer une logique default-deny à une logique default-allow.
- Signaler explicitement si le correctif proposé nécessite de recréer un compte/rôle avec des permissions plus restreintes (ex : "ce correctif suppose un compte DB en lecture seule — à créer séparément si le compte actuel a des droits d'écriture").

---

## Conformité protection des données (exigence transversale, à vérifier si applicable au projet)

Pertinent pour tout projet traitant des données personnelles dans un contexte béninois (APDP, loi n°2017-20) ou plus largement des données sensibles clients.

- Les données personnelles (identité, contrats, IFU, RCCM, coordonnées de paiement) sont-elles chiffrées au repos, pas seulement en transit ?
- Existe-t-il une politique de rétention/suppression réelle et appliquée dans le code, ou les données s'accumulent-elles indéfiniment sans mécanisme de purge ?
- La collecte de données est-elle limitée à ce qui est réellement nécessaire à la fonctionnalité (principe de minimisation), ou des champs sont-ils collectés "au cas où" ?
- Les tiers qui reçoivent des données (services de paiement, stockage, IA) sont-ils listés quelque part, avec la nature des données transmises ?

Ce n'est pas un audit juridique complet — signaler les écarts techniques observables dans le code, pas se substituer à un avis juridique sur la conformité globale.

---

## Outils complémentaires recommandés (pour fiabiliser certaines catégories)

Certaines catégories de ce document ne peuvent pas être auditées de façon fiable par simple lecture de code — elles nécessitent un outil externe dont le résultat doit être fourni en contexte à l'assistant :

- **Dépendances avec CVE connues** → exécuter `npm audit --json` (ou l'équivalent du gestionnaire de paquets utilisé) et fournir le résultat. Sans ça, cette section du rapport reste indicative, basée sur la connaissance générale de l'assistant, pas sur une base CVE à jour.
- **Secrets présents dans l'historique Git** → utiliser un outil dédié (ex : trufflehog, gitleaks) et fournir le résultat. La lecture du code actuel ne permet pas de voir un secret supprimé mais toujours présent dans un ancien commit.
- **Compromission de paquet sans CVE (supply-chain zero-day)** → `npm audit` ne détecte rien ici par nature (pas de CVE au moment de l'attaque, voir Étape 0 point 5). Utiliser un scanner comportemental (ex : Socket, Snyk, Aikido) si disponible ; sinon signaler explicitement cette catégorie comme non couverte, pas comme vérifiée.

Ces trois catégories restent dans les prompts ci-dessous, mais leur fiabilité dépend de cet outillage — le rapport doit le préciser explicitement si l'outil n'a pas été exécuté.

**Catégories avec forte probabilité de faux négatifs par lecture de code seule** (à signaler dans le rapport comme "couverture partielle — outillage externe requis pour fiabiliser", pas à passer sous silence) :
- Timing attacks : nécessitent des mesures en conditions réelles, pas déductibles du code seul.
- Race conditions complexes : dépendent de l'ordonnancement réel des threads/requêtes, nécessitent des tests de charge concurrents (ex : Burp Suite Turbo Intruder, requêtes parallèles).
- Dépendances transitives non listées directement dans `package.json`/équivalent : `npm audit` les couvre, la lecture manuelle du code non.

---

## Limites réelles de l'assistant IA (dépend de l'environnement d'exécution)

Ce document demande des choses qui ne sont pas garanties partout : enregistrer un fichier persistant, le rendre téléchargeable, garder des ID stables entre deux audits séparés dans le temps, connaître les CVE publiées après la date de coupure de connaissances sans recherche externe, comparer avec un audit antérieur.

Règle : ces actions sont réalisées **si et seulement si l'environnement d'exécution le permet** (accès fichier, outil de recherche web, mémoire de conversation précédente). Si un de ces moyens manque :
- Produire le contenu intégral directement dans la réponse plutôt que d'échouer silencieusement ou de prétendre l'avoir fait.
- Le signaler explicitement en tête du rapport ("fichier non enregistrable dans cet environnement — contenu fourni ci-dessous").
- Pour la comparaison avec un audit antérieur : ne comparer que si l'audit précédent est réellement fourni en contexte (fichier joint, collé dans la conversation) — ne jamais supposer son contenu de mémoire.

---

## Catégories complémentaires (ajoutées en v3/v4, pertinentes selon stack)

- **SSTI (Server-Side Template Injection)** — si l'app utilise un moteur de template (Jinja2, Handlebars, EJS, Twig, docxtemplater ou équivalent) : vérifier si des données utilisateur sont injectées dans un template sans échappement, pouvant mener à de l'exécution de code côté serveur. Différent du XSS.
- **Prototype Pollution** — spécifique JS/Node : vérifier les fonctions de merge/extend/parsing JSON qui manipulent des objets à partir d'entrées utilisateur sans validation de clés (`__proto__`, `constructor`, `prototype`).
- **Mass Assignment** — distinct de l'IDOR : vérifier si un endpoint accepte un objet entier du client sans filtrer les champs autorisés (ex : un update qui laisse passer un champ `isAdmin` ou `role` non prévu pour être modifiable par l'utilisateur).
- **Défaillances cryptographiques** (à isoler de "authentification faible") : hachage de mot de passe faible (MD5/SHA1 au lieu de bcrypt/argon2/scrypt), génération de tokens avec un générateur aléatoire non cryptographique (`Math.random()` pour un token de reset password), clés/IV codés en dur dans le code.
- **Anti-automatisation absente** (distinct du rate limiting) : absence de CAPTCHA, de délai progressif, ou de verrouillage de compte après échecs répétés sur login, inscription, reset password — permet le brute-force et le credential stuffing.
- **Journalisation et monitoring défaillants** : deux angles à vérifier — absence de logs sur les événements sensibles (échecs de connexion, changements de permissions, accès à des données sensibles) ET présence de données sensibles (mots de passe, tokens) en clair dans les logs existants.
- **Logique métier — cas concrets à chercher activement** (ne pas se limiter à une mention vague) : contournement d'étape dans un processus multi-étapes (ex : paiement), quantités ou prix négatifs acceptés, réutilisation d'un coupon/code à usage unique, race condition sur une action censée s'exécuter une seule fois (double soumission rapide d'une même requête). **Flux financiers en particulier** : le montant envoyé au service de paiement est-il calculé exclusivement côté serveur à partir du catalogue produit, ou repris tel quel depuis la requête frontend (montant manipulable côté client) ? Le prix d'un article peut-il changer entre la création d'une session de paiement et sa confirmation (ex : coupon appliqué après coup via une seconde requête non revérifiée) ?
- **Politique de mots de passe** (distincte du hachage déjà couvert dans Défaillances cryptographiques — le hachage peut être bcrypt correct avec un mot de passe faible quand même) : longueur minimale appliquée côté serveur et pas seulement côté client, absence de liste noire des mots de passe communs/compromis (ex : vérification type Have I Been Pwned), absence de troncature silencieuse au-delà de 72 caractères qui rendrait bcrypt moins efficace sans que personne ne le sache.
- **CORS — cas concrets à vérifier** (pas une simple mention générique) : `Access-Control-Allow-Origin: *` sur un endpoint qui requiert authentification ; réflexion de l'Origin header sans validation (l'app renvoie telle quelle l'Origin reçue, acceptant n'importe quelle origine) ; combinaison `Access-Control-Allow-Credentials: true` avec une origin permissive ou réfléchie ; existence et application réelle d'une liste blanche d'origins côté serveur.
- **Secrets et fichiers exposés au niveau du dépôt** (pas seulement dans le code applicatif en cours) : présence d'un `.env` committé, dossier `.git/` accessible publiquement si déployé par erreur, secrets présents dans l'historique Git même si supprimés du code actuel.
- **Vérification de signature des webhooks de paiement** — si l'app reçoit des webhooks (FedaPay, Kkiapay, Mobile Money ou équivalent) : vérifier que la signature cryptographique du webhook est validée avant de traiter l'événement (ex : marquer une commande payée). Sans cette vérification, un webhook forgé peut déclencher une confirmation de paiement fictive.
- **Zip Slip / decompression bomb sur fichiers DOCX/ZIP** — si l'app accepte des fichiers DOCX/ZIP en entrée (templates uploadés, imports) : vérifier que les chemins internes à l'archive sont validés avant extraction (pas de `../` menant hors du dossier prévu) et qu'une limite de taille/ratio de décompression est appliquée (protection contre une bombe zip).
- **Isolation multi-tenant** — si l'app sert plusieurs clients/organisations distincts sur la même base : vérifier que chaque requête filtre bien par identifiant de tenant/organisation, pas seulement par identifiant d'objet — une requête qui oublie ce filtre peut mélanger les données de deux clients différents.
- **Broken Function Level Authorization (BFLA)** — distinct de l'IDOR/BOLA : vérifier qu'un utilisateur standard ne peut pas accéder à une fonction réservée à l'admin en appelant directement l'endpoint API, même si l'interface la cache.
- **Unrestricted Resource Consumption** — absence de limite sur la taille de fichier accepté, la pagination, ou le nombre de générations de documents par requête/utilisateur, pouvant mener à un déni de service par épuisement de ressources.
- **Security Misconfiguration** — mode debug actif en production, méthodes HTTP inutiles activées (TRACE, PUT non nécessaires), en-têtes de sécurité manquants (HSTS, X-Content-Type-Options, X-Frame-Options).
- **Improper Inventory Management** — anciennes versions d'API encore actives et accessibles, endpoints non documentés oubliés en production ("shadow API").
- **Unsafe Consumption of APIs** — l'application fait-elle confiance sans validation à une réponse d'API tierce (ex : réponse d'un service de paiement) avant de l'utiliser pour une décision sensible ?
- **ReDoS (Regular Expression Denial of Service)** — expressions régulières appliquées à des entrées utilisateur, mal construites, pouvant bloquer le serveur sur une entrée spécifiquement conçue pour ça.
- **Insecure Direct Object Reference — cas concret à vérifier en priorité** : identifiant séquentiel/auto-increment devinable dans une URL ou un endpoint (ex : `/invoice/1002` → `/invoice/1003` accessible sans check) vs identifiant non séquentiel (UUID) plus difficile à deviner mais pas suffisant seul sans contrôle d'accès réel.
- **Énumération d'utilisateurs / timing attack** — messages d'erreur ou temps de réponse différents entre "email inconnu" et "mauvais mot de passe" au login, permettant de deviner quels comptes existent.
- **Config déploiement** (Dockerfile, docker-compose, CI/CD type GitHub Actions) : secrets en clair dans un fichier de workflow, conteneur qui tourne en root au lieu d'un utilisateur dédié, actions/dépendances tierces avec permissions plus larges que nécessaire, ports exposés inutilement dans la config.
- **Stockage cloud** (S3, Supabase Storage, GCS ou équivalent) : bucket configuré en accès public par erreur, URL de fichier généré (ex : DOCX/PDF exporté) prévisible ou non expirante, accès à un fichier stocké sans vérification d'autorisation côté serveur.
- **HTTP Request Smuggling / header injection** (optionnel, pertinent seulement si chaîne reverse proxy → service interne, ex : Gotenberg) : incohérence de parsing d'en-têtes entre deux composants de la chaîne, pouvant permettre de contourner des contrôles en amont.
- **Headers de sécurité modernes** (complète Security Misconfiguration) : `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`, `Cross-Origin-Resource-Policy` — vérifier présence et pertinence, pas juste HSTS/CSP/X-Frame-Options.
- **GraphQL** (si l'app expose une API GraphQL) : introspection activée en production (expose le schéma complet à un attaquant), absence de limite de profondeur de requête (depth limit — DoS par requête imbriquée profonde, équivalent ReDoS pour GraphQL), absence de limite de complexité, batching attack (grouper des requêtes/mutations pour contourner un rate limiting naïf), Mass Assignment via mutation (distinct du Mass Assignment REST — une mutation qui accepte un input entier sans liste blanche de champs modifiables), autorisation vérifiée au niveau de chaque resolver et pas seulement au niveau du endpoint global.
- **WebSocket** (si l'app utilise des WebSocket) : vérification de l'origine sur l'handshake (`Origin` header, pas seulement au moment de la connexion HTTP initiale), authentification maintenue et revérifiée sur le canal (pas juste au moment de la connexion — un token qui expire doit couper le canal), contrôle d'autorisation par message/canal, validation des messages reçus côté serveur (une injection via message WebSocket est l'équivalent d'un XSS Stored mais par ce canal), rate limiting sur les messages, fermeture propre de session à la déconnexion/expiration.
- **OAuth / OIDC** (distinct de la simple vérification JWT déjà couverte) : usage de PKCE pour les flows publics, vérification du paramètre `state` (anti-CSRF sur le flow), vérification du `nonce`, validation stricte du `redirect_uri` (pas de wildcard trop permissif), scopes demandés proportionnés à l'usage réel.
- **Sécurité fichiers avancée** (complète Zip Slip et upload dangereux déjà couverts) : détection de MIME réel vs extension déclarée (MIME sniffing), fichiers à double extension (`facture.pdf.exe`), fichiers polyglots (valides dans deux formats à la fois), scan antivirus si applicable au contexte, renommage aléatoire du fichier stocké (pas de nom original conservé tel quel), stockage hors du webroot public.
- **Cache** : données sensibles mises en cache par erreur (page authentifiée cachée par un CDN/proxy), en-têtes `Cache-Control`/`Pragma` absents ou incorrects sur les pages sensibles, `ETag` qui divulgue des informations internes, cache partagé entre utilisateurs différents sans clé de partitionnement correcte.
- **Concurrence — cas concrets** (complète la logique métier déjà couverte) : TOCTOU (time-of-check to time-of-use — l'état vérifié change avant d'être utilisé), absence de verrouillage/transaction sur une opération critique, double paiement par soumission simultanée, double génération de document/facture par clic répété rapide.
- **Redis** (si détecté dans le stack) : `AUTH` configuré ou instance ouverte sans mot de passe, TLS activé ou trafic en clair, bind sur `localhost` uniquement vs exposé publiquement, persistance (RDB/AOF) et ce qu'elle contient, clés sensibles (sessions, tokens) sans expiration.
- **Kubernetes** (si détecté, complète Docker/config déploiement déjà couvert) : pods en mode `privileged`, usage de `hostPath` non justifié, permissions du service account (trop larges par défaut), présence/absence de `NetworkPolicy` limitant le trafic inter-pods, secrets Kubernetes stockés en clair vs chiffrés (encryption at rest).

### Cas spécifique — pipeline de génération documentaire (si applicable au projet, ex : docxtemplater / Gotenberg ou équivalent)

- **SSTI via moteur de template documentaire** : si des données utilisateur sont injectées dans un template DOCX/PDF sans échappement, vérifier le risque d'injection de commande de template.
- **SSRF via service de conversion** : si un service de conversion (ex : Gotenberg) accepte une URL fournie par l'utilisateur pour aller chercher une ressource, vérifier que cette URL est validée contre une liste blanche — sinon le service peut être utilisé pour atteindre des ressources internes non censées être accessibles depuis l'extérieur.

### Cas spécifique — intégration LLM/IA générative (si applicable au projet, ex : appel backend à une API OpenAI/Anthropic/autre)

Référence : OWASP GenAI/LLM Top 10 (édition 2025/2026, construite sur ~10 000 incidents réels documentés — Prompt Injection reste la catégorie n°1 trois éditions de suite).

- **Prompt Injection** : donnée utilisateur ou contenu externe (document uploadé, page web récupérée, résultat d'outil) injecté dans le prompt système/contexte sans isolation claire entre instruction et donnée — vérifier si l'app distingue structurellement "instruction développeur" et "contenu utilisateur/tiers", pas juste une concaténation de strings.
- **Sensitive Information Disclosure** : données personnelles/secrets envoyés à l'API LLM tierce sans minimisation (rejoint Conformité protection des données ci-dessus) ; system prompt ou clé API qui fuit dans la réponse du modèle.
- **Excessive Agency** : si l'app donne au modèle/agent un accès à des outils (envoi d'email, écriture DB, appel API externe) — vérifier que les permissions accordées correspondent strictement à la tâche réelle de l'agent, jamais un accès large "au cas où" (rejoint directement le Principe du moindre privilège, section dédiée ci-dessus).
- **Unsafe output handling** : sortie du modèle réinjectée telle quelle dans du HTML (XSS), une requête SQL, une commande système ou un template documentaire sans validation — même logique que XSS/SQLi/SSTI déjà couverts, juste une source de donnée non fiable supplémentaire (le modèle) à tracer jusqu'à son usage réel.
- **Clé API du fournisseur LLM** : mêmes règles que tout secret (voir Règle anti-fuite ci-dessus) — jamais côté client, rotation en cas de doute.

## Application des correctifs — règle séquentielle obligatoire

Les correctifs proposés dans le rapport ne doivent jamais être appliqués tous en même temps ni en surface. Règle à suivre lors de l'implémentation :

1. **Un correctif à la fois.** Ne jamais grouper plusieurs findings dans une seule modification, même s'ils touchent le même fichier — chaque correctif doit pouvoir être validé et testé isolément avant de passer au suivant.
2. **Ordre de traitement fixe : Critique → Haute → Moyenne → Faible.** À gravité égale, traiter dans l'ordre d'apparition dans le rapport.
3. **Validation avant passage au suivant.** Après chaque correctif appliqué, confirmer qu'il fonctionne comme prévu (test manuel ou automatisé) et qu'il n'a rien cassé ailleurs, avant de passer au finding suivant. Ne pas enchaîner les correctifs sans ce point de contrôle.
4. **Correction en profondeur, pas en surface.** Le correctif doit traiter la cause racine du problème, pas seulement faire disparaître le symptôme signalé. Exemples :
   - Pour une injection SQL : ne pas se contenter d'échapper la valeur incriminée trouvée par l'audit — vérifier et corriger tous les autres points d'entrée similaires dans le même fichier/module qui suivent le même pattern non sécurisé.
   - Pour une violation du moindre privilège : ne pas juste retirer un droit isolé — revoir la logique d'attribution des droits à l'origine du problème.
5. **Rollback prévu avant chaque application.** Cohérent avec la méthode de travail habituelle (sauvegarde avant modification) : garder la possibilité de revenir en arrière si un correctif casse quelque chose, avant de passer au correctif suivant.
6. **Cas particulier — cause racine dans une dépendance tierce (CVE).** La règle "correction en profondeur" ne s'applique pas telle quelle : on ne corrige jamais le code source d'une dépendance.
   - Si une version corrigée existe : le correctif est la mise à jour vers cette version, avec vérification de compatibilité (breaking changes éventuels avant de l'appliquer).
   - Si aucune version corrigée n'existe : documenter un workaround applicatif si possible (éviter la fonction vulnérable, valider l'entrée en amont), ou déclarer explicitement "risque résiduel accepté temporairement — à réévaluer au [date]".
   - Ne jamais proposer de patcher directement le code de la dépendance (non maintenable dès la prochaine mise à jour du paquet).

Cette règle s'applique à l'implémentation des correctifs, pas à la rédaction du rapport lui-même — le rapport, lui, liste tous les findings d'un coup ; c'est leur mise en œuvre qui doit être séquentielle.

---

## Livrable obligatoire — rapport en fichier persistant

L'audit ne doit jamais rester uniquement une réponse dans la conversation. À la fin de chaque exécution (Global, Frontend ou Backend), l'assistant doit :

1. Compiler l'intégralité des findings (avec code corrigé inclus pour chacun) dans un seul document.
2. Enregistrer ce document comme fichier `.md`, nommé selon le format : `audit-securite-[global|frontend|backend]-[AAAA-MM-JJ].md`.
3. Placer en en-tête du fichier : date de l'audit, périmètre couvert (global/frontend/backend), stack détecté, score final avec détail du calcul.
4. Rendre le fichier accessible en téléchargement, pas seulement affiché dans le chat — pour qu'il reste consultable après la conversation, et comparable à un audit futur sur le même projet.

---

## Livrable complémentaire — fichier de preuve de concept (PoC)

En plus du rapport d'audit, produire un second fichier séparé contenant, pour **chaque vulnérabilité confirmée**, une méthode de reproduction concrète — comme le ferait un attaquant expérimenté sur le code réel analysé, pas un exemple générique de manuel.

**Ce fichier dépend du rapport, il n'est pas autonome.** Le rapport reste le livrable principal. Le fichier PoC référence chaque finding par son ID (`AUDIT-[AAAA-MM-JJ]-[périmètre]-[numéro]`) — ces mêmes ID servent de clé de jointure entre les deux fichiers. Ne jamais produire un fichier PoC sans le rapport correspondant, et ne jamais désynchroniser les IDs entre les deux documents.

**Nom du fichier** : `poc-exploitation-[global|frontend|backend]-[AAAA-MM-JJ].md`

**Format obligatoire par vulnérabilité dans ce fichier :**

```
### [Titre — identique à celui du rapport d'audit]

- Référence au finding : voir rapport d'audit, section [X]
- Prérequis pour tester (compte utilisateur, outil, accès réseau nécessaire)
- Étapes de reproduction exactes (requêtes HTTP réelles, payloads adaptés au endpoint/champ réel trouvé dans le code, commandes à exécuter)
- Résultat attendu SI la faille est bien présente (ce qu'il faut observer pour confirmer)
- Résultat attendu APRÈS correctif (ce qu'il faut observer pour confirmer que c'est corrigé — ex : code 403 au lieu de 200, message d'erreur générique au lieu de la stack trace)
- Limite de vérification manuelle si applicable (voir avertissement ci-dessous)
```

**Avertissement obligatoire à inclure en en-tête de ce fichier** : ce document contient des méthodes d'exploitation réelles contre l'application. Ne jamais le committer dans un dépôt public, ne jamais le partager en dehors de l'équipe technique. À traiter avec la même sensibilité qu'un secret.

**Limite honnête à signaler, pas à cacher** : toutes les catégories de vulnérabilités ne se reproduisent pas par un simple test manuel (clic, requête curl). Certaines demandent un outillage spécifique :
- Les CVE de dépendances : la vérification, c'est la mise à jour du paquet, pas une reproduction d'exploit.
- Le SSRF vers une ressource interne : nécessite parfois un service d'écoute externe (ex : requestbin) pour confirmer que la requête sortante a bien été émise.
- La Prototype Pollution : nécessite parfois un payload spécifique difficile à construire sans outil dédié.

**Écart environnement à signaler également** : ce fichier PoC est construit à partir du code lu, pas de l'environnement réellement déployé. Un test qui échoue à reproduire un finding annoncé n'est pas automatiquement un faux positif du rapport — vérifier d'abord si la configuration serveur, les variables d'environnement, ou un reverse proxy en environnement de test/staging expliquent l'écart, avant de conclure que le finding était incorrect.

Pour ces cas, le fichier PoC doit le dire clairement au lieu de proposer une manipulation simplifiée qui ne prouverait rien.

---

## Boucle de vérification post-correctif — workflow humain, pas une instruction pour l'IA

Les 6 étapes suivantes s'adressent au développeur/à l'équipe qui teste et implémente — pas à l'assistant. L'assistant intervient uniquement à l'**étape 4** (traiter le résultat de retest transmis par l'humain) et à l'**étape 6** (mettre à jour le rapport final). Le reste (tester, appliquer, retester) est fait par la personne, hors de la conversation avec l'IA.

Workflow à suivre une fois le rapport et le fichier PoC produits :

1. **Test initial** : reproduire chaque vulnérabilité listée dans le fichier PoC, dans l'ordre du rapport (Critique → Haute → Moyenne → Faible), et noter pour chacune si la reproduction confirme bien la faille.
2. **Application du correctif** : un correctif à la fois, selon la règle définie plus haut (application séquentielle, en profondeur, avec rollback prévu).
3. **Retest immédiat** : après chaque correctif appliqué, retenter exactement la même méthode de reproduction que celle du fichier PoC pour ce finding précis.
4. **Rapport de résultat à l'assistant** : transmettre le résultat du retest — texte, capture d'écran, réponse HTTP obtenue. Préciser si le correctif a fonctionné entièrement, partiellement, ou pas du tout.
5. **Traitement selon le résultat** :
   - Corrigé confirmé → passer au finding suivant.
   - Partiellement corrigé → identifier ce qui reste exploitable à partir des éléments transmis, proposer un correctif complémentaire ciblé (pas une réécriture complète), qui suit la même boucle.
   - Non corrigé → revoir le correctif initial, probablement mal ciblé ou incomplet par rapport à la cause racine réelle.
6. **Mise à jour du rapport final** : une fois tous les findings traités, mettre à jour le fichier d'audit initial avec le statut réel de chaque vulnérabilité (Corrigé / Partiellement corrigé / Non corrigé / Accepté comme risque résiduel), daté.

---

## Règle de regroupement des findings

Si la même faille racine touche plusieurs endpoints/fichiers (ex : Mass Assignment sur 10 routes différentes qui utilisent le même pattern non sécurisé), la traiter comme **un seul finding** avec la liste de tous les emplacements concernés — pas 10 findings dupliqués. Un rapport gonflé artificiellement est moins lisible. Ne séparer en plusieurs findings que si le correctif ou l'exploitation diffère réellement d'un endroit à l'autre. Pour le calcul du score, voir la règle de coefficient de surface dans la section "Méthode de calcul du score /100" ci-dessus — le regroupement ne doit pas faire disparaître le risque du score, ni le gonfler artificiellement.

---

## Format obligatoire par finding (les 3 prompts)

**Note de rendu Markdown** : dans le gabarit ci-dessous, seul le sous-champ "Code corrigé" utilise des triples backticks. Un finding réel, une fois rédigé dans le rapport, ne doit **jamais** encapsuler l'intégralité du finding dans un bloc de code — utiliser des tirets de liste et un en-tête H3, comme dans un document Markdown normal. Le triple-backtick ci-dessous sert uniquement à délimiter le gabarit dans ce document de référence.

```
### [Titre de la vulnérabilité]

- ID : `AUDIT-[AAAA-MM-JJ]-[périmètre]-[numéro séquentiel, ex 001]`. Si ce finding réapparaît dans un audit ultérieur sur le même projet, l'ID conserve sa date d'origine (ne jamais le renommer). Les nouveaux findings d'un audit ultérieur portent la date de cet audit-là. Un même rapport peut donc légitimement contenir `AUDIT-2026-01-15-backend-003` (ancien finding non corrigé) à côté de `AUDIT-2026-07-10-backend-001` (nouveau finding) — c'est normal.
- Statut : [Confirmé / Probable — à valider / Non vérifiable depuis le code seul] — voir règle preuve vs hypothèse (Étape 0)
- Fichier et ligne : `chemin/du/fichier.ext:42`
- Gravité : [Critique/Haute/Moyenne/Faible] — justification selon la grille ci-dessus
- Priorité : [P0/P1/P2/P3] — justification si elle diverge de la gravité seule
- Référence : OWASP [ex : A01 Broken Access Control] / API [ex : API1 BOLA] / CWE [ex : CWE-639]
- Explication : [description technique du problème]
- Cause racine : [ce qui, structurellement, a permis cette faille — ex : absence de middleware d'autorisation, validation faite uniquement côté frontend]
- Scénario d'exploitation : [étapes concrètes, basées sur le code réel, pas un exemple générique]
- Impact technique : [conséquence technique réelle si exploité]
- Impact métier : [conséquence business — perte financière, fuite de contrats, fraude, indisponibilité, atteinte réputation]
- Effort de correction estimé : [XS <30min / S <2h / M <1j / L >1j / XL >3j]
- Correctif recommandé : [explication du correctif — si la cause racine est une dépendance tierce (CVE), voir règle spécifique dans "Application des correctifs"]
- Code corrigé (proposition à valider avant application, pas à appliquer automatiquement) :
```[langage]
[code]
```
```

---

## Prompt Global — Analyse Globale

⚠️ Ce prompt n'est pas autonome — il présuppose la lecture du document complet (grille de gravité, règle anti-fuite, format de finding, règles de preuve). Ne pas l'utiliser isolé de tout le reste.

Tu es un ingénieur AppSec senior spécialisé en sécurité des applications web. Tu as accès au code complet de l'application.

Analyse l'intégralité de cette application comme si elle allait être déployée en production. Applique l'Étape 0 avant de commencer.

Recherche, uniquement pour les catégories pertinentes au stack détecté :

- Injection SQL
- NoSQL Injection
- Command Injection
- XSS (Reflected, Stored, DOM)
- CSRF
- SSRF
- Path Traversal
- LFI / RFI
- XXE
- Open Redirect
- Insecure Direct Object Reference (IDOR)
- Broken Access Control
- Authentification faible
- Gestion des sessions
- Exposition de secrets (voir règle anti-fuite)
- Mauvaise configuration CORS (voir cas concrets CORS dans Catégories complémentaires)
- Fuite d'informations
- Mauvaise validation des entrées
- Désérialisation non sécurisée
- Upload de fichiers dangereux
- Vulnérabilités liées aux API
- Erreurs de logique métier (cas concrets : contournement d'étape, quantités/prix négatifs, réutilisation de coupon, race condition)
- Dépendances avec CVE connues
- SSTI (Server-Side Template Injection)
- Prototype Pollution (si stack JS/Node)
- Mass Assignment
- Défaillances cryptographiques (hachage, génération de tokens, clés en dur)
- Anti-automatisation absente (brute-force, credential stuffing)
- Journalisation et monitoring défaillants
- Secrets et fichiers exposés au niveau du dépôt (.env committé, .git exposé, historique Git)
- Violation du principe du moindre privilège (voir section dédiée ci-dessus)
- Si pipeline de génération documentaire présent : SSTI template documentaire et SSRF via service de conversion (voir section dédiée)
- Vérification de signature des webhooks de paiement (si applicable)
- Zip Slip / decompression bomb sur fichiers DOCX/ZIP (si upload de fichiers de ce type)
- Isolation multi-tenant (si l'app sert plusieurs clients/organisations)
- Conformité protection des données (voir section dédiée ci-dessus)
- Broken Function Level Authorization (BFLA)
- Unrestricted Resource Consumption
- Security Misconfiguration
- Improper Inventory Management (endpoints/API obsolètes ou non documentés)
- Unsafe Consumption of APIs tierces
- ReDoS
- Énumération d'utilisateurs / timing attack
- Config déploiement (Dockerfile, docker-compose, CI/CD) si présents dans le repo
- Stockage cloud (bucket public, URL de fichier généré devinable/non expirante)
- HTTP Request Smuggling / header injection (si chaîne reverse proxy → service interne)
- Headers de sécurité modernes (Referrer-Policy, Permissions-Policy, COOP/COEP/CORP)
- Sécurité GraphQL (si API GraphQL détectée)
- Sécurité WebSocket (si détecté)
- Sécurité OAuth/OIDC (si flow OAuth détecté, distinct de la vérification JWT)
- Sécurité fichiers avancée (MIME sniffing, double extension, polyglot, stockage hors webroot)
- Sécurité du cache (données sensibles cachées, Cache-Control, ETag)
- Concurrence (TOCTOU, double paiement, double génération — si applicable)
- Sécurité Redis (si détecté)
- Sécurité Kubernetes (si détecté, complète Docker)
- Sécurité LLM/IA générative (si l'app appelle une API LLM en backend — voir Cas spécifique dédié)

Pour chaque problème trouvé, utiliser le format obligatoire défini ci-dessus.

À la fin, calculer le score de sécurité global selon la méthode définie ci-dessus, avec le détail du calcul.

---

## Prompt Frontend — Analyse Frontend uniquement

⚠️ Ce prompt n'est pas autonome — il présuppose la lecture du document complet.

Tu es un ingénieur AppSec senior spécialisé sécurité frontend. Applique l'Étape 0 avant de commencer.

Analyse uniquement le code frontend. Ne pas remonter de findings backend même si le code y fait référence — les signaler simplement comme "à vérifier côté backend" sans les détailler ici.

Recherche :

- XSS (Reflected, Stored, DOM)
- HTML Injection
- Mauvaise gestion des tokens (stockage, expiration, transmission)
- Stockage dangereux dans localStorage/sessionStorage (données sensibles en clair)
- Cookies non sécurisés (absence de flags Secure, HttpOnly, SameSite)
- Exposition de clés API dans le code client
- Mauvaise gestion CORS côté appels frontend (voir cas concrets CORS dans Catégories complémentaires)
- CSP absente ou trop permissive
- Clickjacking (absence de protection X-Frame-Options / frame-ancestors)
- Fuite de données dans le code client (logs, comments, source maps exposées en prod)
- Mauvaise validation des formulaires (validation client seule, sans validation serveur derrière)
- Téléversement de fichiers dangereux côté client (absence de vérification de type/taille avant envoi)
- Prototype Pollution côté client (si manipulation d'objets JS à partir de données externes)
- Journalisation défaillante côté client (données sensibles envoyées à un outil d'analytics/monitoring tiers)
- Violation du principe du moindre privilège côté client (ex : token stocké avec un scope plus large que nécessaire pour les actions réellement faites depuis le frontend)
- Security Misconfiguration côté client (en-têtes de sécurité manquants observables depuis le frontend : CSP, X-Frame-Options)
- ReDoS côté client (regex de validation de formulaire mal construites)
- Config déploiement côté build/CI si build frontend séparé (secrets exposés dans workflow de build)
- Headers de sécurité modernes observables côté client (Referrer-Policy, Permissions-Policy, COOP/COEP/CORP)
- Sécurité WebSocket côté client (si utilisé : gestion de session, origine, reconnexion)
- Sécurité OAuth/OIDC côté client (PKCE, validation du redirect_uri, gestion de state/nonce)

Pour chaque problème trouvé, utiliser le format obligatoire défini ci-dessus.

À la fin, produire une checklist avec statut ✅/❌/N/A pour chaque point, basée explicitement sur **OWASP ASVS 5.0 niveau 2, chapitres V1 (Encoding and Sanitization), V3 (Web Frontend Security) et V7 (Session Management)** — il n'existe pas de "checklist OWASP Frontend" officielle sous ce nom ; se référer à ASVS évite qu'une checklist différente sorte à chaque exécution. (ASVS 5.0 a réorganisé les 14 chapitres de l'ancienne v4.0.3 en 17 — ne pas reprendre l'ancienne numérotation où V3 = Session Management et V5 = Validation/Sanitization/Encoding, ces contenus ont changé de numéro.)

---

## Prompt Backend — Analyse Backend uniquement

⚠️ Ce prompt n'est pas autonome — il présuppose la lecture du document complet.

Tu es un ingénieur AppSec senior spécialisé sécurité backend. Applique l'Étape 0 avant de commencer.

Analyse uniquement le code backend. Ne pas remonter de findings frontend.

Recherche, uniquement pour les catégories pertinentes au stack détecté (ex : pas de section LDAP/XPath si le projet n'utilise ni annuaire LDAP ni traitement XML) :

- SQL Injection
- NoSQL Injection
- Injection de commandes
- Injection LDAP (si applicable)
- Injection XPath (si applicable)
- SSRF
- CSRF (endpoints qui devraient être protégés et ne le sont pas)
- IDOR
- Broken Authentication
- Broken Authorization
- Rate Limiting absent sur les endpoints sensibles
- Validation insuffisante des entrées
- Fuite d'informations (messages d'erreur trop verbeux, stack traces exposées)
- Endpoints sensibles non protégés ou mal documentés
- Secrets exposés (voir règle anti-fuite)
- JWT mal configuré (algorithme faible, absence d'expiration, secret faible)
- Mauvaise gestion des permissions/rôles
- Dépendances backend avec CVE connues
- SSTI (Server-Side Template Injection)
- Prototype Pollution (si stack Node.js)
- Mass Assignment sur les endpoints d'update
- Défaillances cryptographiques (hachage de mot de passe, génération de tokens, secrets/IV en dur)
- Anti-automatisation absente sur login/inscription/reset password
- Journalisation défaillante (absence de logs sensibles, ou secrets présents en clair dans les logs)
- Secrets et fichiers exposés au niveau du dépôt (.env committé, historique Git)
- Violation du principe du moindre privilège : comptes DB avec droits excessifs, clés API tierces sur-scopées, logique d'autorisation en default-allow au lieu de default-deny
- Si pipeline de génération documentaire présent (docxtemplater, Gotenberg ou équivalent) : SSTI via template et SSRF via service de conversion
- Vérification de signature des webhooks de paiement (si applicable)
- Zip Slip / decompression bomb sur fichiers DOCX/ZIP (si upload/traitement de ce type)
- Isolation multi-tenant (filtrage par tenant/organisation sur chaque requête, si applicable)
- Conformité protection des données (voir section dédiée ci-dessus)
- Broken Function Level Authorization (BFLA)
- Unrestricted Resource Consumption (taille de fichier, pagination, quota de génération)
- Security Misconfiguration (mode debug en prod, méthodes HTTP inutiles, en-têtes manquants)
- Improper Inventory Management (anciennes versions d'API, endpoints non documentés)
- Unsafe Consumption of APIs tierces
- ReDoS
- Énumération d'utilisateurs / timing attack au login
- Config déploiement (Dockerfile, docker-compose, CI/CD) si présents dans le repo
- Stockage cloud (bucket public, URL de fichier généré devinable/non expirante, accès sans check auth)
- HTTP Request Smuggling / header injection (si chaîne reverse proxy → service interne type Gotenberg)
- Headers de sécurité modernes (Referrer-Policy, Permissions-Policy, COOP/COEP/CORP)
- Sécurité GraphQL (si API GraphQL détectée)
- Sécurité WebSocket (si détecté)
- Sécurité OAuth/OIDC (si flow OAuth détecté)
- Sécurité fichiers avancée (MIME sniffing, double extension, polyglot, AV si applicable, stockage hors webroot)
- Sécurité du cache (données sensibles cachées, Cache-Control, ETag, cache partagé)
- Concurrence (TOCTOU, verrouillage/transactions, double paiement, double génération)
- Sécurité Redis (si détecté : AUTH, TLS, bind, persistance, clés sensibles)
- Sécurité Kubernetes (si détecté : pods privileged, hostPath, service account, NetworkPolicy, secrets)
- Sécurité LLM/IA générative (si appel backend à une API LLM — voir Cas spécifique dédié : Prompt Injection, Excessive Agency, fuite de clé API)

Pour chaque vulnérabilité, utiliser le format obligatoire défini ci-dessus.

---