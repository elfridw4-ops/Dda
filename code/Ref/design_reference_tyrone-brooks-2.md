# DESIGN REFERENCE — Tyrone Brooks (portfolio UX/UI Designer)
Type input : IMAGE STATIQUE (3 écrans/sections empilés sur une même capture)
Domaine observé : Portfolio personnel UX/UI — usage NON restreint à ce domaine
Niveau confiance global : ≈ 55% FAIT / 40% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (3 blocs visibles : hero, compétences, étude de cas)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, langue, marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : Tyrone Brooks — UX/UI Designer [FAIT]
Source : capture fournie par l'utilisateur, portfolio personnel [FAIT]
Type : Portfolio [FAIT]
Objectif supposé : présentation personnelle + recherche d'opportunités ("Open to work") [FAIT]
Public cible : recruteurs / clients freelance en UX/UI [HYPOTHÈSE]
Durée vidéo : non applicable (image statique)

## 2. Structure générale
**Bloc 1 (hero)** : badge "Open to work" en haut à gauche, bouton "Download CV" en haut à droite, nom "Tyrone Brooks" en très grand au centre-gauche, ligne de contact (email/LinkedIn/téléphone/localisation) sous le nom, nav en pilule flottante en bas (Home/Summary/Experience/Skills/Links), portrait en silhouette à droite avec halo orange [FAIT]
**Bloc 2 (compétences)** : grille d'icônes d'outils (Framer, Figma, Photoshop, Illustrator, Sketch, Midjourney, Spline, Blender), barres de progression de langues (English, Spanish, French), liste Éducation & Certificats [FAIT]
**Bloc 3 (étude de cas)** : carte projet "Flowstate" avec mockup téléphone, description projet, statistique mise en avant ("20%") [FAIT]
Layout en cartes arrondies flottantes sur fond sombre uni, pas de grille pleine largeur classique [FAIT]
Ordre de lecture : identité → contact → nav → (scroll) compétences → projet [HYPOTHÈSE, ordre déduit de l'empilement des captures]

## 3. Palette graphique
Fond dominant noir/anthracite très sombre, ≈ #141414 [HYPOTHÈSE]
Accent orange chaud (halo du portrait, souligné du logo, liens), ≈ #E8862E [HYPOTHÈSE]
Accent jaune/or pour les données (barres de langues, icônes compétences, stat "20%"), ≈ #E0B84A [HYPOTHÈSE]
Texte principal blanc, texte secondaire gris moyen [FAIT]
Cartes légèrement plus claires que le fond général (contraste de plan) [FAIT]

## 4. Typographie
Nom "Tyrone Brooks" : sans-serif bold, grande taille, blanc [FAIT]
Libellés de section ("Languages", "Education & Certificates") : sans-serif medium, couleur orange/jaune en accent [FAIT]
Corps de texte (contact, description projet) : sans-serif regular, gris clair [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Nav pilule flottante** — fond sombre semi-opaque, coins totalement arrondis, icône + libellé par item, item actif ("Home") en blanc plein [FAIT], hover/clic non observable
**Badge de statut** ("Open to work") — pastille verte + texte, coin arrondi, taille compacte [FAIT]
**Bouton CTA** ("Download CV") — fond jaune plein, texte sombre, coins arrondis [FAIT]
**Icônes compétences** — grille régulière, icônes colorées sur fond carte sombre, légende sous chaque icône [FAIT]
**Barres de progression langue** — ligne fine horizontale + curseur rond, style "slider" plutôt que barre remplie classique [FAIT]
**Carte projet** — image mockup + titre + texte, superposition de 2 cartes en profondeur (effet de pile) [FAIT]
États hover/clic/disabled : non observables sur image statique

## 5bis. Grille de positionnement — verrouillage adapté

```
ÉLÉMENT : NOM (hero)
Zone      → MID-LEFT
X%        → ≈6% [HYPOTHÈSE]
Y%        → ≈35% [HYPOTHÈSE]
W%        → ≈45% [HYPOTHÈSE]
H%        → ≈15% [HYPOTHÈSE]

ÉLÉMENT : NAV PILULE FLOTTANTE
Zone      → BOT-CENTER
X%        → ≈15% [HYPOTHÈSE]
Y%        → ≈88% [HYPOTHÈSE]
W%        → ≈70% [HYPOTHÈSE]
H%        → ≈7% [HYPOTHÈSE]
Alignement → centrée horizontalement, ne chevauche aucun autre élément

ÉLÉMENT : PORTRAIT SILHOUETTE + HALO
Zone      → MID-RIGHT
X%        → ≈55% [HYPOTHÈSE]
Y%        → ≈10% [HYPOTHÈSE]
W%        → ≈45% [HYPOTHÈSE]
H%        → ≈75% [HYPOTHÈSE]

ÉLÉMENT : CARTE PROJET "FLOWSTATE" (2e carte, second plan)
Zone      → BOT-RIGHT, décalée derrière la carte principale
X%        → ≈45% (décalage ≈8% par rapport à la carte de devant) [HYPOTHÈSE]
Y%        → ≈62% [HYPOTHÈSE]
W%        → ≈50% [HYPOTHÈSE]
H%        → ≈30% [HYPOTHÈSE]
Alignement → chevauche partiellement la carte de premier plan (voir pile de calques)
```

## 5ter. Pile de calques — verrouillage adapté

```
PILE DE CALQUES — Halo portrait (bloc 1)
N° │ NOM DU CALQUE          │ MODE APPARENT       │ OPACITÉ EST. │ TAG
───┼─────────────────────────┼─────────────────────┼──────────────┼──────
 3 │ Silhouette portrait     │ Normal              │ 100%         │ FAIT
 2 │ Halo lumineux orange    │ Screen (apparent)   │ ≈50-70%      │ HYPOTHÈSE
 1 │ Fond sombre uni         │ Normal              │ 100%         │ FAIT

PILE DE CALQUES — Cartes projet empilées (bloc 3)
N° │ NOM DU CALQUE          │ MODE APPARENT       │ OPACITÉ EST. │ TAG
───┼─────────────────────────┼─────────────────────┼──────────────┼──────
 2 │ Carte premier plan      │ Normal              │ 100%         │ FAIT
 1 │ Carte second plan       │ Normal (assombrie)  │ ≈80-90%      │ HYPOTHÈSE
```
Principe clé : effet de profondeur par simple décalage + légère différence d'opacité/luminosité
entre les 2 cartes, pas un vrai flou ou blur détecté.

## 6. Animations
NON APPLICABLE — input image statique, aucune animation observable.

## 7. Chronologie
NON APPLICABLE — input image statique, aucune animation observable.

## 8. Interactions
Hover/clic/focus clavier : non observables
Nav pilule suggère une navigation par onglets/ancres (Home/Summary/Experience/Skills/Links) [HYPOTHÈSE]
Cartes superposées ("Flowstate") suggèrent une navigation de type modal/panel au clic [HYPOTHÈSE]

## 9. Effets visuels
Halo lumineux orange derrière le portrait en silhouette — effet glow marqué [FAIT]
Cartes flottantes avec ombre portée douce sur fond sombre (séparation de plans) [FAIT]
Aucun glassmorphism/blur détecté avec certitude [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni (mobile/portrait probable vu le ratio des cartes) → comportement desktop non confirmé [HYPOTHÈSE]

## 11. Accessibilité
Contraste texte blanc/gris clair sur fond très sombre : globalement bon pour les titres, à vérifier pour le gris clair sur les descriptions [HYPOTHÈSE]
Taille des icônes de compétences et légendes : petites, lisibilité à valider sur petit écran réel [HYPOTHÈSE]
Navigation clavier / focus visible : non observable

## 12. Technologies probables
Framework : probablement React ou Framer (nom "Flowstate" + esthétique moderne), non confirmé [HYPOTHÈSE]
Icônes : set d'icônes d'outils (Figma, Photoshop...) probablement SVG dédiées [HYPOTHÈSE]
Effets : halo/glow probablement CSS box-shadow ou gradient radial [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Nav en pilule flottante avec icônes = alternative distinctive à la navbar classique en haut de page.
Halo orange derrière le portrait crée un point focal fort sans surcharger le reste de la palette.
Présentation des langues en "slider" plutôt qu'en simple barre remplie = détail soigné, moins générique.

## 14. Défauts observés
Beaucoup d'informations denses dans le bloc 2 (outils + langues + éducation) sans séparation visuelle forte entre les 3 sous-blocs — risque de surcharge cognitive [FAIT]
Contraste entre le gris du texte descriptif et le fond très sombre semble limite par endroits (à confirmer avec un outil de mesure) [HYPOTHÈSE]

## 15. Éléments à réutiliser
Nav pilule flottante avec icône + libellé, item actif en évidence
Halo lumineux ciblé sur le sujet principal comme signature visuelle
Présentation de données (langues) en slider plutôt qu'en barre plate

## 16. Éléments à éviter
Empiler 3 catégories d'information denses (outils/langues/éducation) dans un même bloc sans respiration visuelle claire

## 17. Recommandations pour le projet
Reprendre le concept de nav pilule flottante si le projet est un portfolio one-page à ancres.
Séparer les blocs de données (compétences/langues/éducation) avec plus d'espace ou des cards distinctes plutôt qu'un bloc compact.
Le halo lumineux fonctionne bien comme signature — à adapter en couleur cohérente avec la palette du nouveau projet, pas recopier l'orange tel quel.

## 18. Cahier des charges final
Stack suggérée : React + Tailwind, halo en radial-gradient CSS derrière l'image portrait (pas une image pré-rendue si possible, pour rester flexible).
Nav pilule en position fixed/sticky, accessible clavier (roving tabindex entre les items).
Reste 100% original — le halo orange et la nav pilule sont des principes structurels à réinterpréter, pas des couleurs/formes à reproduire à l'identique.
