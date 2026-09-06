# DESIGN REFERENCE — Flyer Picnic Communautaire (composition radiale nourriture)
Type input : IMAGE STATIQUE
Domaine observé : Événement communautaire/paroissial — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format carré ~1:1)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, logo, adresse ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : flyer d'invitation à un pique-nique organisé par un groupe/commission au sein d'une
organisation [FAIT]
Type : flyer réseaux sociaux format carré [FAIT]
Objectif supposé : informer sur date/heure/lieu et donner envie via une liste d'activités et une
présentation gourmande de la nourriture [FAIT]
Public cible : membres d'une communauté/organisation locale [HYPOTHÈSE]

## 2. Structure générale
Fond texture gazon vert plein cadre, feuilles décoratives en surimpression dans les coins hauts [FAIT]
En-tête : 2 logos côte à côte, nom de l'organisation en 2 lignes centrées sous les logos [FAIT]
Titre principal ("PICNIC") énorme, texture craie/spray, centré sous l'en-tête [FAIT]
Sous ce titre : panier en osier avec nourriture, posé exactement au centre, sert de point de
pivot à une disposition RADIALE de 8-9 assiettes de plats différents tout autour, en cercle [FAIT]
Colonne "Featuring" (liste à puces d'activités) plaquée à gauche, dans l'espace libre entre le
titre et le cercle de plats [FAIT]
Bas de flyer : 2 bandeaux type "ticket déchiré" (Date / Venue / Time), tissu vichy rouge/blanc
drapé dans les 2 coins inférieurs, débordant du cadre [FAIT]

## 3. Palette graphique
Fond : vert gazon texturé (même famille que la réf "picnic immobilier" mais grain plus marqué,
aspect terrain synthétique) [FAIT]
Titre "PICNIC" : blanc craie/texture spray sur fond vert — même famille de traitement que
"WORLD PICNIC DAY" mais technique légèrement différente (spray vs déchiqueté) [FAIT]
Bandeaux info bas : orange/blanc alterné en dégradé horizontal, forte visibilité [FAIT]
Liste "Featuring" : jaune sur fond vert pour le titre de bloc, blanc pour les items — 2 niveaux de
contraste dans la même liste [FAIT]
Tissu vichy : rouge et blanc, motif quadrillé classique nappe de pique-nique [FAIT]
Principe à retenir : vert dominant + un seul accent chaud (orange) réservé aux blocs d'info
pratique, le jaune servant uniquement à hiérarchiser un sous-titre — pas une palette à copier
telle quelle, RATIO à retenir (voir Agents_Bibliotheque_Palettes.md familles chaudes/vives).

## 4. Typographie
Titre "PICNIC" : display très épais, texture irrégulière façon craie/pochoir spray, majuscules [FAIT]
Nom organisation (en-tête) : sans-serif bold classique, majuscules, 2 lignes [FAIT]
Liste "Featuring" : sans-serif medium, casse mixte, alignée à gauche [FAIT]
Bandeaux Date/Time/Venue : sans-serif bold condensée, très lisible à distance [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Composition radiale de plats** — panier central + assiettes en cercle autour, chaque assiette a
sa propre couleur de vaisselle (jaune, bleu, vert, rose) qui crée un motif kaléidoscopique [FAIT]
**Bandeaux "ticket déchiré"** — forme de ruban avec bord irrégulier façon papier arraché, très
utilisé pour Date/Time/Venue [FAIT]
**Tissu vichy drapé** — élément décoratif dans les 2 coins bas, déborde du cadre principal pour un
effet de profondeur [FAIT]
**Liste à puces "Featuring"** — pas de puces graphiques classiques, juste un retour à la ligne par
item, hiérarchie par la seule position [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE "PICNIC"
Zone → TOP-CENTER
X% → ≈8% | Y% → ≈12% | W% → ≈84% | H% → ≈14% [HYPOTHÈSE]

ÉLÉMENT : COMPOSITION RADIALE DE PLATS
Zone → CENTER
X% → ≈15% | Y% → ≈28% | W% → ≈70% | H% → ≈42% [HYPOTHÈSE]
Alignement → panier au centre exact, assiettes réparties en cercle autour à distance égale

ÉLÉMENT : LISTE "FEATURING"
Zone → MID-LEFT
X% → ≈3% | Y% → ≈32% | W% → ≈22% | H% → ≈25% [HYPOTHÈSE]

ÉLÉMENT : BANDEAUX DATE/VENUE/TIME
Zone → BOT-CENTER
X% → ≈0% | Y% → ≈80% | W% → 100% | H% → ≈18% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 5 │ Tissu vichy coins (déborde)     │ Normal │ 100%    │ FAIT
 4 │ Bandeaux ticket + texte         │ Normal │ 100%    │ FAIT
 3 │ Titre + liste Featuring         │ Normal │ 100%    │ FAIT
 2 │ Composition radiale plats+panier│ Normal │ 100%    │ FAIT
 1 │ Fond gazon + feuilles décor     │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — flyer statique.

## 9. Effets visuels
Texture craie/spray sur le titre principal, casse l'aplat numérique lisse [FAIT]
Bords "papier déchiré" sur les bandeaux d'info — effet artisanal/fait-main volontaire [FAIT]
Ombres portées légères sous le tissu vichy et le panier pour un ancrage réaliste [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni (carré) → comportement autre ratio non observable.

## 11. Accessibilité
Contraste blanc/texture craie sur vert : bon dans l'ensemble [FAIT]
Liste "Featuring" en blanc sur vert : correct mais moins contrastée que les bandeaux orange/blanc
du bas [HYPOTHÈSE]
Densité d'info (titre + liste + cercle de plats + 3 bandeaux) proche de la surcharge visuelle,
à surveiller si repris [HYPOTHÈSE]

## 12. Technologies probables
Composition Photoshop/Canva, photos de plats détourées assemblées manuellement en cercle [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La disposition RADIALE des plats autour du panier central est une idée forte et rare — beaucoup
plus dynamique qu'une simple grille de photos alignées, et cohérente avec le sujet (partage,
abondance, cercle convivial).
Les bords "papier déchiré" et le tissu vichy drapé donnent une texture artisanale/festive cohérente
avec l'esprit pique-nique, plutôt qu'un flyer plat numérique générique.

## 14. Défauts observés
Beaucoup d'éléments différents cohabitent (titre spray, liste, cercle de plats, 3 bandeaux, tissu
drapé, 2 logos) — risque de surcharge si la hiérarchie n'est pas parfaitement maîtrisée à petite
taille (vignette réseaux sociaux) [HYPOTHÈSE]
Liste "Featuring" un peu écrasée contre le bord gauche, peu d'air autour [FAIT]

## 15. Éléments à réutiliser
Composition radiale d'éléments produit autour d'un point central — applicable à tout sujet
"abondance/collection" (produits, portraits d'équipe, icônes de service)
Bandeaux "ticket déchiré" pour les infos pratiques — plus vivant qu'un encadré rectangulaire plat
Élément décoratif qui déborde du cadre (tissu, ici) pour casser la rigidité du rectangle

## 16. Éléments à éviter
Cumuler trop de traitements texturés différents (spray + déchiré + vichy) sans un fil conducteur
clair — vérifier la cohérence d'ensemble avant de multiplier les effets
Écraser une liste d'info contre un bord sans marge suffisante

## 17. Recommandations pour le projet
Le principe de composition radiale est transposable à un sujet non alimentaire — ex. une grille de
témoignages clients disposés en cercle autour d'un logo, ou des icônes de fonctionnalités SaaS
autour d'un visuel central.
Limiter les effets de texture à 1-2 par composition pour garder une cohérence stylistique.

## 18. Cahier des charges final
Stack suggérée si web : SVG/CSS pour positionner des éléments en cercle (transform: rotate +
translate par item), texture craie via filtre SVG feTurbulence sur le texte, bords déchirés via
clip-path polygon irrégulier.
Reste 100% original — nom d'organisation, adresse, logos et texte exact jamais repris.
