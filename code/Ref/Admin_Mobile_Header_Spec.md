# ADMIN MOBILE HEADER SPEC
# Composant "header profil/entité" — recréation mobile, paramétrable par métier

> CE fichier-ci n'est PAS une analyse — c'est le spec de construction dérivé de cette analyse.
> Objectif : donner à un dev ou un agent IA de quoi recréer une interface quasi identique
---

## 1. OBJECTIF DU DOCUMENT

Composant réutilisable : header d'entité (personne, boutique, agent, structure) pour app/PWA
admin mobile. Contient : bandeau identité + toolbar flottante + stats clés + tags méta + CTA +
tabs + sections d'info éditables. Un seul header, plusieurs contextes d'usage possibles
(profil personnel, fiche boutique, fiche agent, dashboard structure).

Ce fichier ne définit PAS la palette/typo (→ Agents_Bibliotheque_Palettes.md /
Agents_Direction_Artistique.md) ni les règles d'interface générales (→
Agents_Standards_Interface_Web.md). Il définit uniquement l'anatomie et le comportement de
CE composant précis.

---

## 2. ANATOMIE — ORDRE VERTICAL EXACT (top → bottom)

```
01. Barre app globale (hors composant — contexte, pas à reconstruire ici)
02. Bandeau cover (pleine largeur)
     └─ 02a. Toolbar flottante superposée : ☰ (gauche) · crayon/loupe/plus (droite)
     └─ 02b. Contenu du bandeau : nom entité + tagline courte + 2-3 points clés)
03. Bloc identité texte
     └─ 04a. Nom entité (gras, grande taille) + bouton switcher (chevron + badge notif)
     └─ 04b. Ligne stats — 3 chiffres clés séparés par points médians
     └─ 04c. Ligne catégorie/type d'entité
     └─ 04d. Description courte (2 lignes max)
     └─ 04e. Ligne tags méta (icône+libellé répétés, inline, séparés par points médians)
     └─ 04f. Ligne lien externe/réseau (optionnel)
     └─ 04g. Bloc social/relationnel (optionnel — "en commun avec X")
04. CTA principaux — 2 boutons côte à côte (1 primaire plein, 1 secondaire neutre)
05. Tabs de navigation contenu — 1 actif (fond pilule) + autres en texte + dernier "Plus" avec
    badge notif + chevron
06. Sections d'info éditables (répétées en liste) :
     └─ Titre section (gras) + icône crayon alignée à droite
     └─ Items de la section : icône + texte (+ description optionnelle 2e ligne)
```

Chaque bloc = composant isolable. Aucun bloc n'est obligatoire à 100% (ex: bloc 04f/04g
optionnels selon métier).

---

## 3. POSITIONNEMENT VERROUILLÉ (reprend Section 20.2 de la source, condensé ici pour build direct)

| Élément | Zone | Position | Note |
|---|---|---|---|
| Toolbar flottante ☰ | TOP-LEFT sur cover | Y ≈ 5-6% du haut de la cover | superposée, pas de fond de barre plein |
| Toolbar flottante (crayon/loupe/plus) | TOP-RIGHT sur cover | même Y | icônes espacées régulièrement |
| Avatar/logo | MID-LEFT, à cheval cover/contenu | X ≈ 3%, chevauche la limite cover/contenu à ≈ 50/50 | cercle, ≈ 20-22% largeur écran |
| Bloc identité texte | sous l'avatar, pleine largeur | empilé vertical sur mobile (jamais côte à côte avatar/nom en mobile étroit) | |
| CTA principaux | sous le bloc identité | W 90% total, split 50/50 | |
| Tabs | sous CTA | pleine largeur, scroll horizontal si trop d'onglets | |
| Sections éditables | sous tabs | pleine largeur, empilées | |

---

## 4. SLOTS PARAMÉTRABLES PAR MÉTIER (table à remplir avant build)

| Slot générique | Exemple observé (Facebook, réf) | Exemple Delta Leader's (boutique) | Exemple agent exam/edu (si réutilisé) |
|---|---|---|---|
| Nom entité | Nom personne | Nom boutique | Nom élève/classe |
| Tagline cover | Accroche perso/marque | Slogan boutique ou zone couverte | — (peut être vide) |
| 3 points clés cover | Offres de service | Spécialités boutique (ex: Canal+, Mobile Money) | — |
| Stat 1 | Followers | Boutiques actives du réseau (si vue globale) OU N/A (si vue boutique unique) | Score moyen |
| Stat 2 | Suivis | Commandes en cours | Exercices complétés |
| Stat 3 | Publications | Commissions du mois | Progression % |
| Catégorie/type | Domaine (Technologie) | Statut revendeur (Boutique agréée / Sous-agent) | Niveau (Terminale/BEPC) |
| Description courte | Bio perso | Adresse + horaires | — |
| Tag méta 1 | Secteur | Zone géographique | Établissement |
| Tag méta 2 | Localisation | Date d'affiliation | Classe |
| Tag méta 3 | Entreprise/affiliation | Agent référent | — |
| CTA primaire | Tableau de bord | Tableau de bord boutique | Voir progression |
| CTA secondaire | Ajouter à la story | Nouvelle commande | Réviser maintenant |
| Tabs contenu | Tout / Reels / Photos / Plus | Vue d'ensemble / Commandes / Historique / Documents | Cours / Quiz / Résultats |
| Sections éditables | Infos perso / Liens / Expériences | Infos boutique / Coordonnées / Documents légaux | Infos élève / Contact parent |

---

## 5. VARIANTES PAR RÔLE — MATRICE OBLIGATOIRE (pas de décision figée)

```
Le rôle de l'utilisateur détermine QUELLE variante du header il voit — pas un seul choix
global pour tout le monde. À remplir par projet AVANT build (colonnes = exemple Delta Leader's,
à adapter réellement à chaque projet, jamais laissé tel quel) :
```

| Rôle | Vue (single-entité / globale) | Stats 1-2-3 visibles | CTA primaire | CTA secondaire | Sections éditables | Peut éditer ? |
|---|---|---|---|---|---|---|
| Super-admin Delta Leader's | Globale (réseau entier) | Nb boutiques actives / CA réseau du mois / commissions totales | Voir le réseau | Ajouter une boutique | Toutes | Oui, tout |
| Gérant boutique | Single (sa boutique) | Solde / commandes en cours / commissions du mois | Tableau de bord boutique | Nouvelle commande | Infos boutique, Coordonnées | Oui, sa fiche uniquement |
| Sous-agent | Single (limité) | Ventes du jour / commission du jour / stock restant | Enregistrer une vente | — | Aucune (lecture seule) | Non |
| [autre rôle projet] | ? | ? | ? | ? | ? | ? |

```
□ Cette matrice DOIT être remplie avec les vrais rôles du projet réel avant d'écrire le
  composant — jamais "on verra selon le rôle" en cours de code, sinon le composant explose
  en conditions imbriquées non maintenables.
□ Si le nombre de rôles dépasse 4-5 : envisager un système de permissions granulaires
  (liste de capabilities par rôle) plutôt qu'une matrice ligne par ligne qui devient illisible.
□ Le switcher (bouton chevron+badge, Section 2 bloc 04a) n'a de sens QUE pour les rôles ayant
  accès à plusieurs entités (ex: super-admin, agent multi-boutiques) — ne pas l'afficher pour
  un rôle single-entité pur (bruit visuel inutile, illusion de choix qui n'existe pas).
```

## 5bis. AUTRES DÉCISIONS À TRANCHER AVANT BUILD (indépendantes du rôle)

```
□ Qui peut éditer quoi ? (crayon présent partout dans la réf — à restreindre par rôle/permission
  dans un contexte admin, contrairement à un profil perso où le propriétaire édite tout —
  voir matrice ci-dessus, dernière colonne)
□ Le bandeau cover est-il éditable par l'utilisateur final, ou fixe/généré (logo entreprise) ?
□ Nombre de tags méta réellement utiles (3 dans la réf — ni plus ni moins sans raison, sinon
  la ligne devient illisible sur mobile étroit)
```

---

## 6. COMPORTEMENTS / INTERACTIONS

```
✅ ☰ → ouvre le menu principal (drawer ou remplacement plein écran, à trancher — voir
   design_reference_facebook-settings-panel.md Section 8 pour les 2 options et leurs implications)
✅ Icône caméra/édition (cover + avatar) → ouvre directement le picker image, pas un sous-menu
✅ Icône crayon de section → édition INLINE de préférence (pas navigation vers un autre écran,
   sauf si la section est trop complexe pour un inline — juger au cas par cas)
✅ Bouton switcher (chevron+badge) → si vue single-entité avec plusieurs entités possibles,
   ouvre un sélecteur (bottom sheet mobile-friendly, pas un dropdown desktop-style)
✅ Tabs → chaque tab garde son état dans l'URL/state si navigation profonde possible derrière
   (cohérent avec Agents_Standards_Interface_Web.md Section 1 — "URL comme état")
✅ CTA primaire = action la plus fréquente pour CE rôle utilisateur, pas générique "Tableau
   de bord" par défaut si l'action réelle la plus fréquente est différente
```

---

## 7. RESPONSIVE MOBILE — CONTRAINTES RÉELLES

```
□ Cover : hauteur fixe en vh (pas en % du contenu) pour éviter un bandeau écrasé sur petit écran
□ Avatar qui chevauche cover/contenu : vérifier qu'il ne chevauche pas la toolbar flottante sur
  les écrans très étroits (< 360px) — tester ce cas précis, c'est le point de rupture le plus probable
□ Ligne de tags méta (3 items) : prévoir le wrap ou le scroll horizontal si le texte dépasse sur
  un petit écran — ne jamais laisser couper au milieu d'un tag
□ Tabs : scroll horizontal si > 4 tabs, jamais de compression illisible du libellé
□ Safe area (notch/encoche) : toolbar flottante en haut doit respecter env(safe-area-inset-top)
```

---