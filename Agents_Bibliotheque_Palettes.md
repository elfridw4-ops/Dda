---
## ⚙️ AGENT PROTOCOL — LIRE EN PREMIER, AVANT TOUT

Tu es directeur artistique senior chargé de la gestion des palettes couleur de l'atelier. Ce fichier est ta seule source de vérité pour le choix de palette sur tout projet.

RÈGLES ABSOLUES :
1. Lis ce document EN ENTIER avant de choisir une palette pour un projet.
2. Vérifie TOUJOURS l'historique (Section 6) avant de proposer — jamais réutiliser une palette déjà consommée par un autre projet, sauf demande explicite de cohérence de marque (Section 2).
3. Une palette de cette bibliothèque = point de départ à adapter, jamais des HEX à copier-coller tels quels sans les confronter au sujet réel du brief.
4. Si aucune palette de la bibliothèque ne convient au sujet réel → générer une palette sur-mesure (Section 5), jamais forcer une palette existante qui ne correspond pas.
5. Après livraison d'un projet, ajouter une ligne à l'historique (Section 6) — non négociable, sinon la bibliothèque perd son utilité anti-répétition.
6. Croiser systématiquement le choix avec Agents_Direction_Artistique.md Section 3 (3 looks génériques IA) — une palette d'ici ne doit jamais reconstituer un des 3 looks proscrits.

CONFIRMATION OBLIGATOIRE avant de commencer :
"PROTOCOLE ACTIF — BIBLIOTHÈQUE PALETTES. Prêt. Balance le sujet du projet."

---

# AGENTS_BIBLIOTHEQUE_PALETTES.md
# Bibliothèque centrale de palettes couleur — anti-répétition inter-projets

> **RÈGLE N°1 — ABSOLUE :**
> Deux projets différents ne partagent JAMAIS la même palette par défaut. Chaque palette consommée
> est journalisée (Section 6). Avant tout nouveau projet, vérifier ce qui a déjà été utilisé.

---

## 1. RÔLE ET OBJECTIF

Ce fichier n'est PAS un dossier de références structurelles (voir Agents_Design_Reference.md pour ça).
Il est le stock de couleurs de l'atelier : une bibliothèque de palettes nommées, prêtes à être
adaptées, organisées par tonalité plutôt que par type de projet (même logique anti-silo que
Agents_Design_Reference.md Section 4quinquies — une palette "chaude & terreuse" convient aussi
bien à un SaaS qu'à un portfolio, selon le sujet réel).

Fichier central, unique, PAS dupliqué par projet. Il vit et grossit avec le temps.

## 2. RÈGLE ANTI-RÉPÉTITION

```
AVANT de proposer une palette pour un nouveau projet :
1. Consulter l'historique (Section 6) — repérer les palettes déjà consommées récemment
2. Exclure ces palettes des candidates, même si elles semblaient adaptées au sujet
3. Choisir parmi les palettes restantes, ou en générer une sur-mesure (Section 5)

EXCEPTION — cohérence de marque volontaire :
Si plusieurs projets appartiennent au MÊME client/à la MÊME marque (ex: site vitrine + dashboard
interne de la même entreprise) → la répétition est un choix assumé, pas un défaut. Le signaler
explicitement dans l'historique ("répétition volontaire — cohérence marque X").

Si le client ne précise rien → toujours partir du principe qu'il s'agit d'un projet distinct,
donc palette distincte.
```

## 3. FORMAT D'UNE ENTRÉE

```
### [Nom évocateur — 2 mots max, français]
Fond      : #HEX — [nom de la teinte]
Texte     : #HEX — [nom de la teinte]
Accent 1  : #HEX — [nom de la teinte]
Accent 2  : #HEX — [nom de la teinte] (optionnel)
Support   : #HEX — [nom de la teinte] (surfaces/cartes, optionnel)
Tonalité  : [1 ligne — ce que la palette évoque]
Éviter avec : [mise en garde si pertinente — ex: ne pas combiner avec tel autre choix]
```

---

## 4. BIBLIOTHÈQUE DE PALETTES

Organisée par tonalité (pas par type de projet — voir Section 1). Extensible : ajouter de nouvelles
entrées au fil des projets, jamais réécrire les existantes sauf correction.

### 4.1 SOMBRES & FEUTRÉES

#### Ardoise & Cuivre
Fond : #1B1E24 — anthracite bleuté
Texte : #EDEAE4 — blanc cassé chaud
Accent 1 : #B5652D — cuivre oxydé
Accent 2 : #5C6B73 — gris-bleu mat
Tonalité : sérieux, feutré, légèrement industriel — convient à un sujet technique qui doit rester chaleureux.

#### Encre & Safran
Fond : #14151A — noir encre
Texte : #E8E6E0 — ivoire pâle
Accent 1 : #D8A03B — safran doux
Support : #23252C — carte sur fond noir
Tonalité : premium discret, contraste doux — évite l'effet "dark mode générique" grâce à l'accent chaud.

#### Basalte & Menthe
Fond : #17191C — basalte
Texte : #E4E7E5 — blanc verdâtre pâle
Accent 1 : #4E9A82 — vert menthe éteint
Accent 2 : #8A8F8C — gris pierre
Tonalité : calme, presque clinique mais adouci par le vert — bon pour un sujet qui doit inspirer confiance sans froideur.

#### Nuit & Grenat
Fond : #1A1418 — brun-noir profond
Texte : #F1E9E9 — blanc rosé
Accent 1 : #7A2E36 — grenat sourd
Support : #2A2226 — carte
Tonalité : dramatique et feutré, sans tomber dans le rouge vif générique — pour un sujet qui doit intriguer.

#### Graphite & Laiton
Fond : #1C1C1E — graphite
Texte : #EAE7DD — blanc cassé
Accent 1 : #A9862F — laiton mat
Accent 2 : #3A3A3D — gris moyen
Tonalité : sobre et haut de gamme, plus retenu que l'or — pour un sujet institutionnel qui veut rester discret.

### 4.2 CLAIRES & AÉRÉES

#### Craie & Cobalt
Fond : #F6F5F1 — blanc craie
Texte : #23262B — encre presque noire
Accent 1 : #2857A6 — bleu cobalt
Accent 2 : #C7C2B8 — beige gris clair
Tonalité : net, confiant, professionnel sans être froid — bon point de départ pour un sujet qui doit rassurer vite.

#### Lin & Rouille
Fond : #F1ECE2 — lin naturel
Texte : #2E2A24 — brun très sombre
Accent 1 : #A85A32 — rouille — ⚠️ rester à distance du terracotta générique (#D97757), teinte plus brune/sombre ici
Support : #E4DCCB — carte lin foncé
Tonalité : artisanal, tactile — attention à ne pas glisser vers le look "Cream & Terracotta" proscrit (Direction Artistique Section 3) : garder ce brun-rouille plus sourd, jamais l'orange corail vif.

#### Ivoire & Pin
Fond : #F7F5EF — ivoire
Texte : #262A24 — vert-noir
Accent 1 : #3F5B44 — vert pin profond
Accent 2 : #B8AE95 — beige doux
Tonalité : naturel, apaisant, sérieux sans être austère — bon pour un sujet lié à la santé, l'éducation, le durable.

#### Nacre & Prune
Fond : #F5F2F5 — blanc nacré
Texte : #2A2430 — aubergine presque noire
Accent 1 : #6B3F63 — prune
Accent 2 : #D8D2D8 — gris lavande clair
Tonalité : doux mais affirmé, féminin sans être un stéréotype rose — utile pour un sujet créatif ou lifestyle.

#### Coquille & Pétrole
Fond : #F3F0EA — coquille d'œuf
Texte : #1E2A2C — noir bleuté
Accent 1 : #1F5C63 — bleu pétrole
Support : #E1DCCF — carte
Tonalité : frais et posé, plus original qu'un bleu marine classique — bon pour la finance/tech qui veut éviter le bleu corporate générique.

### 4.3 CHAUDES & TERREUSES

#### Argile & Moutarde
Fond : #2B211B — brun argile sombre
Texte : #F2E9DA — crème chaud
Accent 1 : #C08A2E — moutarde
Accent 2 : #7A5B45 — brun cuir
Tonalité : chaleureux et affirmé, texture "matière" — pour un sujet artisanal, food, ou culturel.

#### Brique & Sauge
Fond : #F4EDE4 — beige clair
Texte : #2C2620 — brun très sombre
Accent 1 : #A34E3A — brique
Accent 2 : #7C8A6E — sauge
Tonalité : équilibre chaud/froid, terrien mais pas triste — bon pour hospitalité, artisanat, agriculture.

#### Terracotta Sourd & Encre
Fond : #221D1A — brun-noir
Texte : #ECE4D8 — blanc chaud
Accent 1 : #8C4A34 — terracotta sourd — ⚠️ plus sombre/désaturé que le #D97757 générique, à vérifier à l'œil qu'on s'en distingue clairement
Support : #33291F — carte
Tonalité : chaud et enveloppant sans être le corail Claude — utile si le client aime le terracotta mais qu'il faut s'en distinguer visuellement.

#### Sable & Indigo
Fond : #EFE7D8 — sable
Texte : #23222E — indigo presque noir
Accent 1 : #33366B — indigo profond
Accent 2 : #B8A77E — beige doré
Tonalité : contraste chaud/froid marqué, élégant — pour un sujet qui mélange tradition et modernité.

#### Ocre & Charbon
Fond : #1D1B18 — charbon chaud
Texte : #F0E6D2 — crème
Accent 1 : #C97D2E — ocre
Accent 2 : #4A463D — brun-gris
Tonalité : robuste, presque minéral — pour un sujet artisanat, BTP, industrie assumée.

### 4.4 FROIDES & TECHNIQUES

#### Abysse & Corail Froid
Fond : #10161C — bleu-noir profond
Texte : #E4EBEF — blanc bleuté
Accent 1 : #3E8FA6 — cyan éteint
Accent 2 : #E0625A — corail froid (désaturé, pas le corail chaud générique)
Tonalité : technique mais vivant, contraste froid/chaud maîtrisé — bon pour tech/data qui veut éviter le bleu corporate plat.

#### Acier & Citron Vert
Fond : #14181B — acier sombre
Texte : #E7EBE8 — blanc froid
Accent 1 : #8FBF3F — vert citron mat (pas fluo)
Support : #202529 — carte
Tonalité : énergique mais discipliné — pour un sujet fintech/productivité qui veut un accent vif sans tomber dans le "Dark & Acid" générique proscrit (rester mat, jamais saturé au max).

#### Glacier & Ambre
Fond : #EDF1F2 — blanc glacier
Texte : #1B2226 — bleu-noir
Accent 1 : #2E6E7A — bleu glacier profond
Accent 2 : #C9862F — ambre
Tonalité : clinique mais réchauffé par l'ambre — pour santé/assurance qui veut éviter le bleu-blanc trop froid.

#### Nuit Polaire & Cuivre
Fond : #12181D — bleu-nuit très sombre
Texte : #E6ECEF — blanc froid
Accent 1 : #B5652D — cuivre (même famille qu'Ardoise & Cuivre mais fond plus froid — NE PAS utiliser les deux sur des projets proches)
Accent 2 : #3A4A54 — gris-bleu
Tonalité : premium et froid, réchauffé par un seul accent — pour un sujet luxe/tech haut de gamme.

#### Silex & Émeraude
Fond : #16181A — silex sombre
Texte : #E8ECE9 — blanc vert pâle
Accent 1 : #1F7A5C — émeraude profonde
Accent 2 : #4A4E4C — gris pierre
Tonalité : précieux et posé, plus original que le vert menthe ou le vert néon — pour finance/santé qui veut se démarquer du bleu par défaut.

### 4.5 VIVES & CONTRASTÉES

#### Craie & Vermillon
Fond : #F5F3EE — blanc craie
Texte : #201C18 — brun-noir
Accent 1 : #C23B2E — vermillon
Accent 2 : #262421 — quasi-noir
Tonalité : franc, direct, un peu brut — pour un sujet qui veut de l'énergie sans passer par le néon.

#### Béton & Jaune Taxi
Fond : #E9E7E2 — béton clair
Texte : #1D1C1A — noir chaud
Accent 1 : #E0A527 — jaune taxi désaturé (pas jaune pur)
Support : #D6D2C8 — carte
Tonalité : urbain, brut, signalétique — pour un sujet logistique, mobilité, industriel assumé.

#### Nuit & Magenta Sourd
Fond : #17141A — noir violacé
Texte : #ECE6EC — blanc lilas
Accent 1 : #A5386F — magenta sourd (pas fluo)
Accent 2 : #4A3F4A — gris violacé
Tonalité : créatif et affirmé sans être criard — pour un sujet culturel, événementiel, musique.

#### Papier & Bleu Roi
Fond : #F2F0E9 — papier
Texte : #1A1C24 — bleu-noir
Accent 1 : #1E3A8F — bleu roi
Accent 2 : #C0392B — rouge brique en second accent (rare, réservé aux alertes/CTA critiques)
Tonalité : institutionnel mais vivant grâce au contraste franc — pour un sujet officiel qui ne veut pas être terne.

#### Suie & Orange Brûlé
Fond : #181614 — suie
Texte : #F0EAE0 — blanc chaud
Accent 1 : #D9642E — orange brûlé (plus saturé/rouge que le terracotta générique #D97757, à garder bien distinct)
Accent 2 : #35302A — brun sombre
Tonalité : intense, chaleureux, presque combustible — pour un sujet food/énergie qui veut un accent fort et assumé.

### 4.6 NEUTRES & MINIMALES

#### Brume & Noir
Fond : #EDEDEC — gris brume
Texte : #17181A — noir
Accent 1 : #17181A — noir (même teinte que le texte, utilisé en aplat pour CTA)
Support : #DEDEDB — carte
Tonalité : minimal extrême, laisse toute la place à la typo — pour un sujet où le contenu doit primer sur la couleur.

#### Lin & Anthracite
Fond : #F0EEE9 — lin très clair
Texte : #26262A — anthracite
Accent 1 : #5A5A60 — gris moyen (seul accent, pas de couleur vive)
Tonalité : neutre absolu, sobre — pour un sujet B2B sérieux qui ne veut aucune couleur qui distraie.

#### Perle & Bronze Discret
Fond : #F4F2EE — perle
Texte : #201F1C — noir chaud
Accent 1 : #8C7355 — bronze très désaturé
Support : #E6E2D9 — carte
Tonalité : feutré et élégant, un seul accent à peine perceptible — pour un sujet luxe discret, pas tape-à-l'œil.

#### Galet & Encre Bleue
Fond : #EDECEA — gris galet
Texte : #1D2024 — bleu-noir
Accent 1 : #2A3A52 — bleu encre profond (utilisé avec parcimonie)
Tonalité : quasi monochrome, un seul accent froid discret — pour un sujet institutionnel/juridique.

#### Craie & Terre d'Ombre
Fond : #F1EFE9 — craie
Texte : #201C17 — terre d'ombre brûlée
Accent 1 : #6B5C4A — brun taupe
Tonalité : minimal chaud, presque sans couleur — pour un sujet qui veut une neutralité qui reste habitée.

---

## 5. GÉNÉRATION D'UNE PALETTE SUR-MESURE (si la bibliothèque ne convient pas)

```
Si le sujet réel du projet (Agents_Direction_Artistique.md Section 2) a un vocabulaire matériel
propre — matériaux, lumières, artefacts caractéristiques de CE monde précis — en tirer une palette
originale plutôt que de forcer une entrée existante.

Méthode :
1. Nommer 3-5 éléments concrets du monde réel du sujet (pas génériques)
2. En extraire les teintes dominantes et les nommer (jamais "couleur 1")
3. Vérifier contre Agents_Direction_Artistique.md Section 3 (3 looks génériques) — écarter
   toute combinaison qui reconstitue un des 3 looks proscrits
4. Vérifier contre l'historique (Section 6) — pas de doublon avec une palette déjà utilisée
5. Ajouter la nouvelle palette à la bibliothèque (Section 4) une fois validée — la bibliothèque
   grossit à chaque projet qui en génère une nouvelle
```

---

## 6. HISTORIQUE D'UTILISATION (tenir à jour — non négociable)

```
| Date       | Projet                          | Palette utilisée        | Note                          |
|------------|----------------------------------|--------------------------|--------------------------------|
| —          | —                                | —                        | Aucune palette consommée encore |
```

À chaque projet livré : ajouter une ligne. Format : date (AAAA-MM), nom du projet, nom exact de
la palette (ou "sur-mesure — [nom donné]" si générée via Section 5), note si répétition volontaire
(Section 2, exception cohérence de marque).

---

## 7. LIEN AVEC LES AUTRES FICHIERS

```
Agents_Direction_Artistique.md Section 5, Passe 1 (COULEUR) → piocher ici en premier,
sinon générer sur-mesure (Section 5 de ce fichier)

Agents_Design_Reference.md Section 3 (palette d'une réf analysée) → une réf donne un PRINCIPE
de palette (ratio, température), jamais les HEX exacts à copier — cette bibliothèque-ci, elle,
donne des HEX réels et validés, prêts à l'emploi, mais toujours à confronter au sujet réel avant usage
```

---

## 8. CHECKLIST AVANT D'ASSIGNER UNE PALETTE À UN PROJET

```
□ Historique (Section 6) consulté — palette candidate pas déjà utilisée récemment
□ Si répétition : exception cohérence de marque explicitement validée par le client
□ Palette confrontée au sujet réel du brief — pas choisie au hasard dans la liste
□ Vérifiée contre les 3 looks génériques IA (Direction Artistique Section 3) — aucune coïncidence
□ Si aucune entrée ne convient : palette sur-mesure générée (Section 5) plutôt que forcée
□ Ligne ajoutée à l'historique (Section 6) après validation finale du projet
```
