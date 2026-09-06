# DESIGN REFERENCE — South Africa Adventures (léopard sur carte-silhouette Afrique)
Type input : IMAGE STATIQUE
Domaine observé : Voyage/tourisme safari — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero unique)
Voir aussi design_reference_oil-stain-safari.md — même thématique, à consulter ensemble (Section 19).

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'un site voyage/safari centré sur une destination sud-africaine [FAIT]
Type : landing page voyage, composition hero unique très graphique [FAIT]
Objectif supposé : donner envie de découvrir une destination précise, générer du clic vers galerie
ou planification [FAIT]
Public cible : voyageurs intéressés par le safari/la faune sauvage [HYPOTHÈSE]

## 2. Structure générale
Fond : silhouette du continent africain en aplat clair/gris, positionnée à droite du cadre, sur
un fond gris-brun texturé (branches sombres en surimpression) [FAIT]
Logo oiseau stylisé en haut-gauche, menu hamburger en haut-droite [FAIT]
Léopard photo réelle posé SUR la silhouette du continent, comme s'il se trouvait littéralement
dessus, positionné sur une branche qui déborde du cadre de la carte [FAIT]
Bloc texte à gauche : mention "DESTINATIONS" en petit, titre 2 lignes énorme ("SOUTH AFRICA
ADVENTURES"), 2 liens ("Plan your journey" / "Launch gallery") côte à côte en bas [FAIT]
Ordre de lecture : logo → titre → sujet (léopard sur carte) → CTA [FAIT]

## 3. Palette graphique
Fond global : gris-brun neutre et texturé (branches sombres en fond), sobre [FAIT]
Silhouette Afrique : gris clair/blanc cassé, aplat semi-transparent qui laisse deviner le fond
texturé derrière par endroits [FAIT]
Léopard : photo couleur réelle (tons naturels), seul élément de couleur "vive" de toute la
composition, ressort fortement sur le monochrome environnant [FAIT]
Texte : blanc/gris clair, sobre [FAIT]
Principe à retenir : environnement quasi monochrome (gris/brun neutre) qui met en valeur le SEUL
élément photographique couleur (le sujet, léopard) — technique d'isolement colorimétrique du
sujet plutôt qu'un accent de marque appliqué au graphisme.

## 4. Typographie
Titre 2 lignes : sans-serif fine à regular, très grande taille, letter-spacing généreux,
majuscules [FAIT]
Mention "DESTINATIONS" : sans-serif fine, petite taille, letter-spacing large [FAIT]
Liens CTA : sans-serif regular, majuscules, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Silhouette de continent comme élément de fond fonctionnel** — pas juste décoratif, sert de socle
visuel qui ancre géographiquement le sujet (le léopard "vit" sur cette carte) [FAIT]
**Sujet photo qui déborde du cadre de la silhouette** — la branche sur laquelle repose le léopard
sort du contour de la carte, technique de composition qui casse la rigidité du silhouette-cadre [FAIT]
**Duo de liens texte (pas de bouton plein)** — "Plan your journey" en style lien souligné/bordé,
"Launch gallery" avec icône d'expansion — 2 intentions différentes (action vs exploration visuelle) [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : SILHOUETTE CONTINENT AFRIQUE
Zone → MID-RIGHT à BOT-RIGHT
X% → ≈48% | Y% → ≈15% | W% → ≈50% | H% → ≈75% [HYPOTHÈSE]

ÉLÉMENT : LÉOPARD (sujet photo)
Zone → MID-CENTER (chevauche la silhouette, déborde à droite)
X% → ≈55% | Y% → ≈22% | W% → ≈35% | H% → ≈40% [HYPOTHÈSE]
Alignement → posé sur une branche qui sort du contour de la silhouette vers la droite du cadre

ÉLÉMENT : TITRE 2 LIGNES + CTA
Zone → MID-LEFT
X% → ≈8% | Y% → ≈35% | W% → ≈42% | H% → ≈30% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ EST. │ TAG
 4 │ Texte + logo + menu              │ Normal │ 100%         │ FAIT
 3 │ Léopard (déborde du cadre)        │ Normal │ 100%         │ FAIT
 2 │ Silhouette continent (semi-transp)│ Normal │ ≈70-85%      │ HYPOTHÈSE
 1 │ Fond texturé branches sombres     │ Normal │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. "Launch gallery" avec icône d'expansion suggère l'ouverture
d'une galerie plein écran ou modale [HYPOTHÈSE].

## 9. Effets visuels
Silhouette de continent semi-transparente qui laisse deviner la texture du fond derrière — effet
de superposition léger plutôt qu'un aplat opaque plat [FAIT]
Photo du léopard qui déborde intentionnellement du cadre de la silhouette — rupture de contour
volontaire [FAIT]
Aucun glow/blur/glassmorphism détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable.

## 11. Accessibilité
Contraste titre blanc/gris clair sur fond gris-brun sombre : correct mais pas maximal,
dépendant de la zone exacte derrière [HYPOTHÈSE]
Liens CTA en texte simple (pas de bouton plein) : cible tactile à vérifier si repris en mobile
[HYPOTHÈSE]

## 12. Technologies probables
Composition Photoshop, silhouette probablement un SVG/PNG masqué en overlay sur le fond texturé
[HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La silhouette de continent comme socle fonctionnel (pas juste décoratif) ancre géographiquement le
sujet d'une manière plus originale qu'une simple carte avec pins classique.
Le débordement volontaire du sujet photo hors du cadre de la silhouette casse la rigidité d'un
pattern qui pourrait sinon sembler très géométrique/froid.
L'isolement colorimétrique du sujet (seul élément en couleur sur un environnement monochrome) crée
un point focal immédiat et fort sans avoir besoin d'un accent de marque appliqué au graphisme.

## 14. Défauts observés
La silhouette de continent, bien que jolie, n'apporte pas d'information fonctionnelle précise
(pas de point de destination, contrairement à la carte de Oil Stain — voir Section 19) — reste
purement décorative malgré son potentiel fonctionnel [FAIT]
CTA en simple lien texte, moins immédiatement identifiable comme actionnable qu'un bouton plein
[HYPOTHÈSE]

## 15. Éléments à réutiliser
Isolement colorimétrique du sujet photo sur un environnement monochrome comme technique de point
focal fort, sans accent de marque nécessaire
Débordement volontaire d'un élément hors de son cadre géométrique pour casser la rigidité
Silhouette géographique comme socle visuel identitaire (à combiner avec de vrais points de
destination si l'usage doit être fonctionnel, voir recommandation Oil Stain)

## 16. Éléments à éviter
Utiliser une silhouette géographique purement décorative quand elle pourrait facilement porter une
vraie information fonctionnelle (points de destination) sans effort supplémentaire

## 17. Recommandations pour le projet
Le principe "sujet en couleur isolé sur environnement monochrome" est transposable à tout hero qui
veut un point focal fort sans dépendre d'un accent de marque graphique.
Si une silhouette géographique est reprise pour un projet réel (ex: carte du Bénin pour Delta
Leader's), envisager de la rendre fonctionnelle (points cliquables) plutôt que purement décorative,
comme le fait Oil Stain (Section 19).

## 18. Cahier des charges final
Stack suggérée si web : silhouette en SVG masqué avec opacité configurable en CSS, photo sujet en
position absolue qui déborde intentionnellement du viewBox du SVG pour l'effet de débordement.
Reste 100% original — nom de marque, logo et texte exact jamais repris.

## 19. Liens avec autres références
Voir design_reference_oil-stain-safari.md — même thématique safari Afrique. Oil Stain construit
une carte FONCTIONNELLE (points de destination cliquables) dans un hero par ailleurs classique ;
cette réf-ci utilise une silhouette PUREMENT ESTHÉTIQUE mais avec un débordement de sujet plus
audacieux. Aucun conflit entre les deux — deux approches valables selon si le projet a besoin
d'une vraie fonction cartographique ou d'un simple ancrage visuel.
