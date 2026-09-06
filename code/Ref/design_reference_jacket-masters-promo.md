# DESIGN REFERENCE — Jacket Masters (vidéo promo e-commerce, mockup site)
Type input : VIDÉO
Domaine observé : Vidéo promotionnelle / démo template e-commerce (mode produit) — usage NON restreint à ce domaine
Niveau confiance global : ≈ 65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (43 frames échantillonnées à 5 im/s + 10 images clés pleine résolution sur 8.68s)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, palette figée ou logo listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : Jacket Masters — mockup de hero section e-commerce (vêtements d'hiver) [FAIT]
Source : fichier vidéo fourni par l'utilisateur, nom de fichier suggère un asset promo Elementor
(marketplace de templates) — non confirmé, probablement mots-clés SEO du vendeur [HYPOTHÈSE]
Type : Vidéo boucle / démo produit (pas un enregistrement d'interaction réelle utilisateur) [FAIT]
Format : carré 720×720, 60 fps, durée 8.68s — format typique post Instagram/réseaux sociaux [FAIT]
Objectif supposé : vendre un template de site (ou vendre le produit lui-même) en mettant en avant
le changement de coloris du produit comme argument marketing [HYPOTHÈSE]
Public cible : soit acheteurs de vêtements d'hiver, soit clients cherchant un template e-commerce
à acheter (double lecture possible vu le style "asset marketplace") [HYPOTHÈSE]
Durée vidéo : 8.68 secondes, boucle probable (format court + mot "wallpaper" dans le nom de fichier
suggère un usage en fond animé/boucle plutôt qu'une narration à sens unique) [HYPOTHÈSE]

## 2. Structure générale
Carte "navigateur"/UI flottante, coins très arrondis, ombre portée large, centrée sur un fond
plein cadre en dégradé orange radial (constant, ne change jamais pendant toute la vidéo) [FAIT]
Dans la carte : logo + nom de marque en haut à gauche, nav en pilule centrée (item actif en
fond blanc plein), icônes panier/wishlist en haut à droite [FAIT]
Bloc titre 2 lignes en gras à gauche, paragraphe descriptif dessous, CTA en pilule sous le texte [FAIT]
Flèches de navigation carousel juste au-dessus du titre, à gauche [FAIT]
Colonne prix à droite (prix barré + prix actuel) + sélecteur de taille (3 tailles, option active
en cercle plein blanc) [FAIT]
Image produit (vêtement) centrée dans la carte, légende centrée sous l'image [FAIT]
Icônes réseaux sociaux en bas à gauche de la carte, vignette produit miniature flottante en bas
à droite avec sa propre ombre portée [FAIT]
Largeur de la carte ≈ 92% du cadre vidéo, hauteur ≈ 55% [HYPOTHÈSE]

## 3. Palette graphique
Fond extérieur (hors carte) : dégradé radial orange constant, ≈ #E86A17 au centre vers
≈ #F5A623 en périphérie — ne varie jamais sur les 8.68s [FAIT pour la constance, HYPOTHÈSE pour les HEX exacts]
Intérieur de carte : subit un morphing de couleur continu tout au long de la vidéo, cycle observé
approximatif : orange chaud → anthracite/noir → blanc/gris clair → rouge → puis retour vers
blanc/gris/anthracite/orange (Section 7) — chaque teinte affecte À LA FOIS le fond interne de la
carte ET le rendu du produit (le vêtement change de couleur en même temps que le fond) [FAIT]
Texte : blanc sur les teintes sombres, bascule probablement vers un texte plus sombre sur les
teintes très claires (non confirmé avec certitude sur les frames blanches) [HYPOTHÈSE]
Accent CTA/prix : blanc plein sur fond sombre, cohérent sur tout le cycle [FAIT]
Principe retenu (jamais les HEX exacts, voir Agents_Bibliotheque_Palettes.md) : une seule surface
(la carte) qui traverse tout un spectre chaud→neutre→froid→chaud en boucle, pendant qu'un cadre
extérieur reste fixe comme ancrage visuel stable.

## 4. Typographie
Titre 2 lignes : sans-serif bold, grande taille, blanc, interligne serré [FAIT]
Paragraphe descriptif : sans-serif regular, plus petit, gris clair/blanc cassé [FAIT]
Libellés nav/prix : sans-serif medium, majuscules pour la nav [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Nav pilule** — fond sombre semi-opaque, item actif en pastille blanche pleine, un sous-item
("CONTACT" observé) passe à la ligne sous les autres — indice de contrainte responsive mal gérée
à cette largeur précise [FAIT]
**Sélecteur de taille** — 3 cercles, option active = fond blanc plein + texte sombre, options
inactives = fond sombre + texte clair [FAIT]
**CTA pilule** — fond clair, texte sombre, icône flèche à droite du libellé [FAIT]
**Carousel arrows** — 2 flèches rondes fines au-dessus du bloc titre, pas de fond plein [FAIT]
**Vignette produit flottante** — coin bas-droit, décalée hors de la carte principale, ombre
portée propre, superposée au bord de la carte (voir pile de calques 5ter) [FAIT]
États hover/clic/disabled : non observables, vidéo = démo automatique sans curseur/interaction visible [NON OBSERVÉ]

## 5bis. Grille de positionnement — verrouillage adapté

```
ÉLÉMENT : CARTE PRINCIPALE (UI complète)
Zone      → CENTER (légèrement décalée vers le bas)
X%        → ≈4% [HYPOTHÈSE]
Y%        → ≈22% [HYPOTHÈSE]
W%        → ≈92% [HYPOTHÈSE]
H%        → ≈55% [HYPOTHÈSE]

ÉLÉMENT : BLOC TITRE + CTA
Zone      → MID-LEFT (dans la carte)
X%        → ≈5% (relatif à la carte) [HYPOTHÈSE]
Y%        → ≈35% (relatif à la carte) [HYPOTHÈSE]
W%        → ≈30% [HYPOTHÈSE]
H%        → ≈40% [HYPOTHÈSE]

ÉLÉMENT : IMAGE PRODUIT
Zone      → CENTER (dans la carte)
X%        → ≈35% [HYPOTHÈSE]
Y%        → ≈15% [HYPOTHÈSE]
W%        → ≈30% [HYPOTHÈSE]
H%        → ≈65% [HYPOTHÈSE]

ÉLÉMENT : VIGNETTE PRODUIT FLOTTANTE
Zone      → BOT-RIGHT, déborde du cadre de la carte principale
X%        → ≈88% [HYPOTHÈSE]
Y%        → ≈78% [HYPOTHÈSE]
W%        → ≈10% [HYPOTHÈSE]
H%        → ≈15% [HYPOTHÈSE]
Alignement → chevauche le coin bas-droit de la carte principale (voir 5ter)
```

## 5ter. Pile de calques — verrouillage adapté

```
PILE DE CALQUES — Composition globale
N° │ NOM DU CALQUE              │ MODE APPARENT │ OPACITÉ EST. │ TAG
───┼─────────────────────────────┼───────────────┼──────────────┼──────
 5 │ Vignette produit flottante  │ Normal        │ 100%         │ FAIT
 4 │ Texte + nav + prix + CTA    │ Normal        │ 100%         │ FAIT
 3 │ Image produit (vêtement)    │ Normal        │ 100%         │ FAIT
 2 │ Carte UI (fond morphant)    │ Normal        │ 100%         │ FAIT
 1 │ Fond extérieur dégradé fixe │ Normal        │ 100%         │ FAIT
```
Principe clé : deux "horloges" de couleur distinctes — le calque 1 (fond extérieur) est figé,
seuls les calques 2+3 (carte + produit) morphent ensemble en synchronisation.

## 6. Animations
**Morphing colorimétrique produit+carte** : transition continue et fluide (pas de coupure nette
visible) entre plusieurs teintes, sans mouvement de caméra ni translation d'éléments — seule la
couleur change. Éléments texte/nav/CTA restent parfaitement fixes en position pendant tout le cycle [FAIT]
Aucun autre mouvement détecté (pas de parallaxe, pas de zoom caméra, pas d'entrée/sortie d'éléments) [FAIT]
Ombres portées (carte + vignette) : fixes, ne réagissent pas au changement de couleur [FAIT]

## 7. Chronologie
Timeline approximative reconstituée à partir d'un échantillonnage à 5 images/seconde (43 frames) :
```
0.0s – 1.6s   → teinte orange chaude (carte + produit)              [FAIT — observé sur plusieurs frames]
1.6s – 2.6s   → transition vers anthracite/noir                     [HYPOTHÈSE — zone de fondu, pas de coupe nette mesurée]
2.6s – 3.0s   → passage rapide par un gris clair                    [HYPOTHÈSE]
3.0s – 4.2s   → blanc, puis dérive vers un rose/rouge clair          [HYPOTHÈSE]
4.2s – 4.8s   → rouge saturé (tenue la plus stable observée)         [FAIT]
4.8s – 5.6s   → retour au blanc                                     [HYPOTHÈSE]
5.6s – 6.6s   → anthracite/noir                                     [HYPOTHÈSE]
6.6s – 7.8s   → retour à l'orange chaud                             [FAIT]
7.8s – 8.68s  → dérive vers anthracite puis gris clair (point de boucle probable vers 0.0s) [HYPOTHÈSE]
```
Durées exactes non mesurables sans détection de coupure image par image logicielle — fourchettes
données par prudence, pas de fausse précision décimale.

## 8. Interactions
Aucune interaction utilisateur observable — vidéo de démonstration automatique, pas de curseur
visible, pas de clic simulé [NON OBSERVÉ]
Le sélecteur de taille et la nav suggèrent une interface interactive RÉELLE derrière ce mockup,
mais aucune interaction n'est montrée dans cette vidéo précise [HYPOTHÈSE]

## 9. Effets visuels
Ombre portée large et douce sous la carte principale (détache la carte du fond) [FAIT]
Ombre portée secondaire sous la vignette flottante [FAIT]
Dégradé radial du fond extérieur, doux, sans texture ni bruit visible [FAIT]
Aucun glassmorphism, blur ou glow détecté sur la carte elle-même [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni (carré 720×720) → comportement à d'autres ratios non observable.
Indice utile malgré tout : le sous-item de nav qui passe à la ligne (Section 5) suggère que ce
format carré compresse une nav pensée pour un format plus large — signal d'un défaut à corriger
si le format carré est repris tel quel (voir Section 14).

## 11. Accessibilité
Contraste texte blanc sur fond sombre : bon [HYPOTHÈSE]
Contraste texte sur les teintes très claires (blanc/gris clair) : risque de contraste insuffisant,
non confirmé avec certitude faute de voir clairement cette phase en détail [HYPOTHÈSE]
Navigation clavier / focus : non applicable, vidéo non interactive [NON OBSERVÉ]
Le morphing de couleur continu et rapide pourrait être inconfortable pour des utilisateurs
sensibles aux changements visuels fréquents — à signaler si ce pattern est repris tel quel [HYPOTHÈSE]

## 12. Technologies probables
Probablement une composition After Effects ou Figma+plugin motion, pas une vraie page web capturée
(la fluidité du morphing colorimétrique du produit dépasse ce qu'un simple changement de classe CSS
ferait sur une vraie photo produit) [HYPOTHÈSE]
Si recréé en interface réelle : le "morphing" serait plus probablement simulé par un fondu-enchaîné
(crossfade) entre plusieurs variantes du produit préparées à l'avance, pas un vrai recolorage en direct [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le changement de coloris synchronisé produit+fond de carte, sans aucune autre animation parasite,
crée un effet hypnotique simple et très lisible — argument produit (choix de coloris) transformé
en signature visuelle à lui seul.
Le fond extérieur fixe qui contraste avec la carte qui morphe crée un ancrage : l'œil ne se perd
jamais malgré le changement de couleur constant.
Composition dense mais lisible (nav + prix + CTA + sélecteur taille + réseaux sociaux) sans donner
d'impression de surcharge, grâce à une hiérarchie de tailles de police claire.

## 14. Défauts observés
Item de nav qui passe à la ligne ("CONTACT" isolé sous les 3 autres) — signe d'un espace nav
insuffisant à cette largeur, probablement un défaut du mockup source, pas un choix voulu [FAIT]
Aucune variation de rythme dans le morphing colorimétrique — le cycle est constant du début à la
fin, ce qui peut devenir monotone sur un visionnage répété en boucle [HYPOTHÈSE]
Contraste du texte pendant les phases très claires (blanc/gris) potentiellement fragile, à vérifier
si repris [HYPOTHÈSE]

## 15. Éléments à réutiliser
Synchronisation couleur produit + fond de carte comme signature visuelle simple et forte
Fond extérieur fixe contrastant avec un élément central qui change, comme ancrage visuel
Vignette produit flottante en second plan, décalée du cadre principal, pour suggérer une variante/option

## 16. Éléments à éviter
Nav qui casse sur 2 lignes de façon non maîtrisée à un format donné (toujours tester le format cible)
Cycle de changement sans variation de rythme ni pause — risque de lassitude si utilisé en boucle longue

## 17. Recommandations pour le projet
Si le principe de morphing colorimétrique est repris : le réserver à un produit qui a un vrai sens
commercial à changer de couleur (vêtement, objet personnalisable), pas l'appliquer par défaut.
Prévoir une vraie nav responsive testée sur le format cible avant livraison (éviter le défaut Section 14).
Le fond extérieur fixe + élément central changeant est un principe réutilisable pour TOUT type de
contenu qui a une variante à mettre en avant (couleur, taille, modèle) — pas propre à la mode.

## 18. Cahier des charges final
Stack suggérée pour une version interactive réelle : React + Tailwind, changement de coloris
piloté par state (sélection utilisateur réelle plutôt qu'un cycle automatique), transition en
crossfade CSS (opacity) entre variantes d'image produit précalculées plutôt qu'un vrai recolorage
dynamique coûteux.
Fond extérieur en CSS radial-gradient statique, carte UI en overflow visible pour permettre à la
vignette flottante de déborder proprement (attention au z-index, voir pile de calques 5ter).
Reste 100% original — la marque, le texte exact et les HEX précis de cette réf ne doivent jamais
être recopiés, seul le principe de synchronisation fond/produit et l'ancrage fixe/mobile sont à retenir.
