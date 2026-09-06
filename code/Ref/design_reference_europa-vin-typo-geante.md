# DESIGN REFERENCE — Europa (hero produit vin, typo géante outline)
Type input : IMAGE STATIQUE
Domaine observé : E-commerce/produit premium (spiritueux/vin) — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero unique)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de produit, marque ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero produit d'une bouteille de vin de glace premium (nom non reproduit) [FAIT]
Type : landing/section produit e-commerce, hero unique typo-driven [FAIT]
Objectif supposé : vendre un produit de niche (vin de dessert) avec un positionnement graphique
fort plutôt qu'une photo produit classique [HYPOTHÈSE]
Public cible : amateurs de vin premium/cadeau [HYPOTHÈSE]

## 2. Structure générale
Cadre noir plein cadre bordé d'un liseré orange/terracotta épais (marge visible tout autour) [FAIT]
Titre produit en lettrage énorme (une seule ligne, occupe presque toute la largeur et la hauteur
du cadre) en aplat orange, sert de fond typographique géant à la composition [FAIT]
Bouteille en photo réelle, posée en diagonale, centrée, chevauche directement les lettres du
titre (passe devant certaines, derrière une pierre décorative) [FAIT]
Badge circulaire "NEW" en haut-droite, style tampon/sticker [FAIT]
Pierre/roche sombre posée en horizontale au-dessus de la bouteille, élément décoratif qui casse la
diagonale pure du produit [FAIT]
Bloc texte courtdescription + CTA pilule sous le titre, aligné à gauche [FAIT]
Début d'un second mot/ligne visible tout en bas de cadre (outline uniquement, coupé par le bord) —
suggère une 2e ligne de titre qui continue hors cadre [FAIT]
Ordre de lecture : titre géant → bouteille → badge nouveauté → description → CTA [FAIT]

## 3. Palette graphique
Fond : noir profond [FAIT]
Cadre extérieur (marge) : terracotta/orange brûlé saturé, ≈ #C1502E [HYPOTHÈSE pour HEX exact]
Titre géant : même famille orange que le cadre — cohérence cadre/typo totale [FAIT]
Bouteille : rosé/orangé translucide (couleur réelle du liquide), embout plastique gris neutre [FAIT]
Texte descriptif et CTA : orange clair/pêche sur fond noir [FAIT]
Principe à retenir : UNE seule famille chaude (orange/terracotta) répétée sur cadre + titre + CTA,
noir comme unique neutre — pas de 3e couleur introduite, cohérence par répétition stricte d'un
seul accent (voir Agents_Bibliotheque_Palettes.md familles Suie & Orange Brûlé, Lave & Braise,
jamais recopier le HEX exact).

## 4. Typographie
Titre produit : display condensé très gras, majuscules, lettres jointives voire chevauchantes,
occupe la quasi-totalité du cadre — traitement "logo géant" plutôt qu'un titre lisible à distance
de lecture normale [FAIT]
Description : sans-serif regular, petite taille, discrète face au titre [FAIT]
Badge "NEW" : sans-serif condensée bold, très petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Titre géant comme fond typographique** — le mot du produit n'est pas un simple titre au-dessus
du produit, il EST le fond de toute la composition, le produit vient se poser dessus [FAIT]
**Cadre-liseré coloré** — bordure épaisse pleine largeur qui délimite tout le visuel, différent
d'un simple padding, agit comme un cadre physique [FAIT]
**Badge sticker "NEW"** — forme dentelée/tampon, catégorisation rapide du produit [FAIT]
**CTA pilule discret** — fond transparent/contour, pas un aplat plein [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE GÉANT (fond typo)
Zone → CENTER, pleine composition
X% → 0% | Y% → 5% | W% → 100% | H% → 75% [HYPOTHÈSE]

ÉLÉMENT : BOUTEILLE (diagonale)
Zone → CENTER, chevauche le titre
X% → 25% | Y% → 20% | W% → 55% | H% → 55% [HYPOTHÈSE]
Alignement → diagonale bas-gauche vers haut-droite, chevauche plusieurs lettres du titre

ÉLÉMENT : BADGE "NEW"
Zone → TOP-RIGHT
X% → 80% | Y% → 8% | W% → 14% | H% → 12% [HYPOTHÈSE]

ÉLÉMENT : BLOC DESCRIPTION + CTA
Zone → BOT-LEFT
X% → 5% | Y% → 78% | W% → 40% | H% → 15% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                       │ MODE   │ OPACITÉ │ TAG
 5 │ Badge NEW                     │ Normal │ 100%    │ FAIT
 4 │ Description + CTA             │ Normal │ 100%    │ FAIT
 3 │ Bouteille (devant le titre)   │ Normal │ 100%    │ FAIT
 2 │ Pierre décorative (devant titre, derrière bouteille)│ Normal │ 100% │ FAIT
 1 │ Titre géant + fond noir + cadre│ Normal│ 100%    │ FAIT
```
Note : bouteille passe DEVANT certaines lettres et probablement DERRIÈRE d'autres selon la
diagonale — chevauchement partiel typo/produit à traiter en 2 sous-calques si repris exactement.

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. CTA "ORDER NOW" suggère action d'achat réelle si site vivant [HYPOTHÈSE]

## 9. Effets visuels
Aucun glow/blur/glassmorphism détecté — traitement plat, tout repose sur le contraste titre/produit
[FAIT]
Ombre légère sous la pierre décorative pour l'ancrer [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni (carré) → comportement autre ratio non observable. Un titre qui occupe déjà
100% de la largeur en desktop est un pattern à risque en mobile étroit (probable réduction de
taille ou passage 2 lignes) [HYPOTHÈSE].

## 11. Accessibilité
Contraste titre orange sur fond noir : bon [FAIT]
Contraste CTA (orange clair, contour) sur noir : correct mais moins fort qu'un aplat plein
[HYPOTHÈSE]
Lisibilité du titre en tant que texte réel (vs élément graphique) : faible dès qu'il chevauche la
bouteille — probablement voulu comme signature visuelle plutôt que titre lisible au sens SEO/a11y
[FAIT sur le chevauchement, HYPOTHÈSE sur l'intention]

## 12. Technologies probables
Composition Photoshop/Figma, photo produit détourée posée sur typo vectorielle [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le titre-fond géant qui absorbe presque toute la composition transforme un simple nom de produit
en véritable identité graphique — rare dans le e-commerce vin classique.
Cohérence stricte à une seule couleur (cadre + titre + CTA) évite toute dilution malgré une
composition dense.
Le chevauchement produit/typo (bouteille devant/derrière les lettres) crée une profondeur sans
recourir à un effet numérique — juste de la superposition intelligente.

## 14. Défauts observés
Titre géant réduit fortement la lisibilité du nom réel du produit à distance/petite taille (mobile,
vignette) — pari esthétique risqué si le nom doit être mémorisé/tapé pour recherche [HYPOTHÈSE]
2e ligne de titre coupée en bas de cadre (juste l'amorce visible) — pourrait être un défaut de
crop plutôt qu'un choix [FAIT sur la coupe, HYPOTHÈSE sur l'intention]

## 15. Éléments à réutiliser
Titre produit comme fond typographique géant plutôt qu'un simple titre au-dessus — signature forte
transposable à tout produit qui veut se démarquer d'un e-commerce plat
Cadre-liseré coloré comme élément d'identité de marque cohérent avec le reste
Une seule couleur d'accent répétée strictement (cadre+titre+CTA), aucune couleur parasite

## 16. Éléments à éviter
Titre géant qui sacrifie complètement la lisibilité du nom produit — vérifier qu'un CTA/texte
secondaire garde le nom lisible ailleurs sur la page si le SEO/mémorisation du nom compte
Couper une 2e ligne de titre en bord de cadre sans que ce soit un choix de composition assumé

## 17. Recommandations pour le projet
Le principe "titre géant = fond de composition" est transposable à tout produit qui a un nom court
et fort (1-2 mots) à mettre en scène — jamais à un nom long qui deviendrait illisible démultiplié.
Vérifier systématiquement qu'un texte secondaire garde le nom produit lisible normalement quelque
part sur la page (SEO, accessibilité), le titre géant étant traité comme élément graphique, pas
texte fonctionnel principal.

## 18. Cahier des charges final
Stack suggérée si web : titre en position absolue z-index intermédiaire (entre fond et produit),
photo produit détourée en PNG, cadre en border CSS épais avec la couleur d'accent du projet.
Palette à définir sur-mesure via Agents_Bibliotheque_Palettes.md familles chaudes/orange sombre
(Suie & Orange Brûlé, Lave & Braise), jamais recopier le HEX orange exact de cette réf.
Reste 100% original — nom de produit exact et texte "ORDER NOW"/description jamais repris tels quels.
