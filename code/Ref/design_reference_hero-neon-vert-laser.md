# DESIGN REFERENCE — Hero Marque Tech Futuriste (duotone vert néon, ligne laser)
Type input : IMAGE STATIQUE
Domaine observé : SaaS/tech futuriste, marque de service innovation — usage NON restreint
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero desktop complet)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque exact ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'un site tech/service innovant, nom de marque court fictif en majuscules espacées
(nom exact non pertinent à reproduire, seul le principe "mot unique + tagline" compte) [FAIT]
Type : landing page tech/SaaS, hero plein écran [FAIT]
Objectif supposé : positionner la marque comme innovante/futuriste dès le premier écran [HYPOTHÈSE]
Public cible : audience tech/early adopters [HYPOTHÈSE]

## 2. Structure générale
Nav horizontale transparente : logo triangle/losange à gauche, liens centrés (Home/About/
Services/Contact), CTA pilule "Start a project" à droite [FAIT]
Titre marque énorme à gauche (1 mot, majuscules très espacées), tagline courte dessous, 2 CTA
côte à côte ("Discover" en pilule outline + lien texte avec icône logo) [FAIT]
Portrait à droite : sujet cadré serré (visage/buste), main levée près du visage, halo circulaire
lumineux derrière la tête, ligne fine verticale traversant le visage façon scan/laser [FAIT]
Icônes réseaux sociaux en bas-gauche, icône souris (indicateur scroll) centrée en bas [FAIT]
Ordre de lecture : nav → titre marque → tagline → CTA → portrait (halo + ligne scan) → scroll [FAIT]

## 3. Palette graphique
Ensemble de l'image en duotone vert/noir — fond, portrait et halo partagent la même teinte
dominante, aucune zone n'échappe au traitement colorimétrique [FAIT]
Accent unique : rouge vif, réservé exclusivement à la ligne fine sur le visage — seul point chaud
de toute la composition [FAIT]
Texte : blanc pur, se détache nettement du duotone vert sombre [FAIT]
Principe à retenir : duotone appliqué à TOUTE l'image (pas juste le fond) + un seul accent chaud
isolé sur un détail précis du sujet — cohérence totale par traitement colorimétrique plutôt que
par palette à plusieurs teintes (voir Agents_Bibliotheque_Palettes.md famille Mousse Électrique
pour un registre vert sombre proche, jamais recopier tel quel — attention à garder le vert mat,
jamais saturé au max, sinon bascule dans le look "Dark & Acid" proscrit).

## 4. Typographie
Titre marque : display géométrique, lettres espacées (letter-spacing très large), majuscules,
grande taille — traitement typographique "corporate futuriste" [FAIT]
Tagline : sans-serif fine, taille modeste, contraste de graisse avec le titre [FAIT]
Nav et CTA : sans-serif regular, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Halo circulaire lumineux derrière le portrait** — structure le fond autour du sujet, renforce
le caractère "énergie/technologie" sans texte explicite [FAIT]
**Ligne scan/laser sur le visage** — élément narratif fort (biométrie, IA, scan) qui justifie le
positionnement tech mieux qu'un simple portrait neutre [FAIT]
**Duo CTA pilule + lien icône** — 1 action principale (Discover) + 1 action secondaire discrète
(Connect), hiérarchie claire [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE MARQUE + TAGLINE + CTA
Zone → MID-LEFT
X% → ≈6% | Y% → ≈32% | W% → ≈42% | H% → ≈35% [HYPOTHÈSE]

ÉLÉMENT : PORTRAIT + HALO
Zone → MID-RIGHT, déborde du cadre
X% → ≈45% | Y% → ≈10% | W% → ≈55% | H% → ≈85% [HYPOTHÈSE]

ÉLÉMENT : LIGNE SCAN/LASER
Zone → MID-RIGHT (sur le visage)
X% → ≈62% | Y% → ≈20% | W% → ≈2% | H% → ≈45% [HYPOTHÈSE]
Alignement → traverse verticalement le visage du sujet, du front au menton
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ EST. │ TAG
 4 │ Nav + titre + CTA + icônes bas   │ Normal │ 100%         │ FAIT
 3 │ Ligne scan/laser rouge           │ Screen │ ≈80-100%     │ HYPOTHÈSE
 2 │ Halo circulaire vert lumineux    │ Screen │ ≈50-70%      │ HYPOTHÈSE
 1 │ Portrait + fond (duotone vert)   │ Normal │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Icône souris suggère un indicateur de scroll classique [HYPOTHÈSE].

## 9. Effets visuels
Duotone vert appliqué uniformément à toute l'image (pas juste le fond) — traitement colorimétrique
global plutôt qu'un simple filtre local [FAIT]
Halo lumineux façon glow (probablement mix-blend-mode screen) derrière le portrait [HYPOTHÈSE]
Ligne fine rouge nette sur le visage, contraste chromatique volontaire avec le reste monochrome [FAIT]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre blanc sur fond vert sombre : bon [FAIT]
Contraste tagline (plus fine) sur zones de halo plus claires : à vérifier, zone à risque [HYPOTHÈSE]
CTA pilule outline (pas de fond plein) : cible tactile à vérifier si repris en mobile [HYPOTHÈSE]

## 12. Technologies probables
Retouche photo probable (duotone + halo glow) via Photoshop, ligne scan ajoutée en post-production
[HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le duotone appliqué à TOUTE l'image (portrait inclus, pas seulement le fond) crée une cohérence
visuelle totale rare — la plupart des heros se contentent d'un overlay sur le fond seul.
La ligne scan/laser sur le visage raconte une histoire (biométrie, IA, technologie de pointe) sans
texte explicite — le sujet EST le message.
Un seul accent chaud (rouge) isolé sur un détail précis crée un point focal fort sans diluer le
monochrome dominant.

## 14. Défauts observés
Le duotone vert appliqué partout peut fatiguer si utilisé sur plusieurs sections consécutives sans
rupture de rythme [HYPOTHÈSE]
CTA en pilule outline (pas plein) moins immédiatement identifiable comme actionnable [HYPOTHÈSE]

## 15. Éléments à réutiliser
Duotone appliqué à TOUTE l'image (sujet + fond) plutôt qu'au fond seul, pour une cohérence totale
Un accent chaud unique isolé sur un détail précis du sujet comme point focal
Halo lumineux derrière un portrait pour évoquer énergie/technologie sans texte

## 16. Éléments à éviter
Répéter le même traitement duotone intense sur plusieurs sections sans rupture de rythme visuel
Saturer le vert au maximum — risque de tomber dans le look générique "Dark & Acid" IA

## 17. Recommandations pour le projet
Le principe "duotone total + accent chaud isolé sur un détail du sujet" est transposable à toute
marque tech/deeptech qui veut un impact visuel fort et cohérent. Garder le vert mat, jamais
saturé au maximum (vérifier contre Agents_Direction_Artistique.md Section 3).

## 18. Cahier des charges final
Stack suggérée : image hero + filtre CSS `hue-rotate`/`saturate` pour le duotone, halo en
`radial-gradient` + `mix-blend-mode: screen`, ligne scan en overlay SVG/CSS positionnée en
pourcentage sur le visage (jamais codée en dur en pixels).
Reste 100% original — nom de marque exact et texte exact jamais repris tels quels.
