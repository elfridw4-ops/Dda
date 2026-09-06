# DESIGN REFERENCE — Flyer Série "God's Leading" (pieds marchant, désert)
Type input : IMAGE STATIQUE
Domaine observé : Église / service en ligne hebdomadaire, série récurrente — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait ~4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, orateur, réseaux sociaux ou palette figée
ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.
Voir aussi design_reference_flyer-god-leading-pecheur.md — même série, épisode suivant, à
consulter ensemble pour la cohérence de signature (Section 19).

---

## 1. Informations générales
Nom : flyer d'un épisode d'une série récurrente de service en ligne hebdomadaire, organisation
religieuse (nom non reproduit) [FAIT]
Type : flyer réseaux sociaux, photo composite + typographie texturée [FAIT]
Objectif supposé : annoncer l'épisode de la semaine avec diffusion multi-fuseaux horaires pour une
audience internationale [FAIT]
Public cible : communauté en ligne internationale (fuseaux horaires multiples affichés) [FAIT]

## 2. Structure générale
Photo plein cadre : gros plan sur les pieds/bas de jambes de 2 personnes marchant sur un sol
sablonneux/désertique, cadrage serré et dynamique [FAIT]
Titre énorme superposé directement sur la photo, 2 mots empilés ("God's" en script jaune fin +
"LEADING" en display blanc massif condensé), occupe la quasi-totalité de la largeur [FAIT]
Bloc orateur : nom sur fond rouge plein, très contrasté, juste sous le titre [FAIT]
Ligne d'infos temporelles : jour/date, format spécial de programme, type de diffusion — 3 blocs
courts alignés horizontalement [FAIT]
Bas de flyer : rangée d'icônes drapeaux (fuseaux horaires) + heure locale principale en évidence,
logo organisation + plateforme de diffusion + réseaux sociaux [FAIT]

## 3. Palette graphique
Photo : tons chauds terreux (brun sable, ocre), désaturés/grunge [FAIT]
Titre "LEADING" : blanc pur avec texture granuleuse (pas un aplat lisse), très grande taille [FAIT]
Mot "God's" : jaune vif, script fin, seul accent couleur du titre [FAIT]
Bloc orateur : fond rouge saturé plein, texte blanc — rupture nette avec le reste plus neutre [FAIT]
Principe à retenir : photo desaturée chaude comme fond + un seul accent jaune (titre) + un seul
accent rouge (bloc info) — 2 accents seulement, jamais plus, pour ne pas diluer l'attention.

## 4. Typographie
Titre "LEADING" : display condensé très gras, majuscules, texture granuleuse/grunge sur les
contours plutôt qu'un aplat parfait [FAIT]
"God's" : script fin cursif, casse mixte, contraste de style fort avec LEADING juste en dessous [FAIT]
Bloc orateur et infos : sans-serif bold condensée, très lisible à distance [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Titre à texture grunge** — le blanc du titre principal n'est pas un aplat mais une texture
irrégulière qui rappelle le fond sableux de la photo — cohérence texture titre/fond plutôt qu'une
typo plate posée dessus [FAIT]
**Bloc orateur en aplat rouge** — carré/rectangle plein contrastant, fonctionne comme un badge de
catégorisation (qui parle) réutilisable pour toute série avec orateur variable [FAIT]
**Rangée de drapeaux multi-fuseaux** — composant rare et concret, résout un vrai problème pratique
(audience internationale) plutôt qu'une simple mention d'heure unique [FAIT]
États hover/clic : non observable, support statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE 2 MOTS ("God's" + "LEADING")
Zone → MID-CENTER, chevauche la photo
X% → ≈2% | Y% → ≈28% | W% → ≈96% | H% → ≈28% [HYPOTHÈSE]

ÉLÉMENT : BLOC ORATEUR (fond rouge)
Zone → MID-CENTER, sous le titre
X% → ≈25% | Y% → ≈58% | W% → ≈50% | H% → ≈6% [HYPOTHÈSE]

ÉLÉMENT : RANGÉE DRAPEAUX + HEURE
Zone → BOT-CENTER
X% → ≈5% | Y% → ≈85% | W% → ≈90% | H% → ≈8% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 3 │ Texte titre + bloc orateur + bas │ Normal │ 100%    │ FAIT
 2 │ Texture grunge sur le titre      │ Normal │ 100%    │ FAIT (texture intégrée au texte, pas un calque séparé au sens strict — HYPOTHÈSE sur la méthode exacte)
 1 │ Photo pieds marchant (désaturée) │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — flyer statique, bien que destiné à annoncer un contenu diffusé en direct
(Facebook Live mentionné) [FAIT pour la mention, NON OBSERVÉ pour l'interaction elle-même]

## 9. Effets visuels
Texture grunge/grain appliquée au titre et probablement à toute la composition (halftone léger
visible sur la photo) — cohérence de traitement texte/image plutôt que 2 registres séparés [FAIT]
Aucun glow/blur/glassmorphism [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre blanc texturé sur photo desaturée : bon, la photo est assez sombre/uniforme pour
porter le blanc [FAIT]
Contraste bloc orateur (blanc sur rouge) : bon [FAIT]
Rangée de drapeaux + texte : petite taille, potentiellement difficile à lire sur mobile à distance
normale de scroll [HYPOTHÈSE]

## 12. Technologies probables
Photoshop avec texture/halftone overlay + photo stock ou séance réelle désaturée [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La cohérence texture titre/photo (grain identique sur les deux) unifie composition typo et image
plutôt que de les traiter comme deux éléments séparés superposés.
La rangée de fuseaux horaires est une réponse concrète à un vrai besoin (audience internationale),
pas un ornement — rare dans ce type de flyer.
Le duo accent jaune (titre)/rouge (orateur) reste limité à 2 couleurs, évite la dilution visuelle
malgré une composition dense.

## 14. Défauts observés
Beaucoup d'informations tassées en bas (jour/programme/diffusion + drapeaux + heure + logo +
réseaux) — proche de la surcharge sur petit écran [HYPOTHÈSE]
Le mot "God's" en script fin pourrait manquer de lisibilité à très petite taille (vignette) face
au poids visuel du mot LEADING juste en dessous [HYPOTHÈSE]

## 15. Éléments à réutiliser
Cohérence de texture entre le titre et la photo de fond (grain identique) plutôt que 2 traitements
séparés
Bloc orateur en aplat de couleur contrastée, réutilisable comme composant pour toute série à
intervenant variable
Rangée de fuseaux horaires pour toute diffusion à audience internationale réelle

## 16. Éléments à éviter
Tasser trop d'informations pratiques différentes (programme + diffusion + fuseaux + réseaux) sans
hiérarchie de taille suffisante entre elles

## 17. Recommandations pour le projet
Le principe "texture cohérente titre+photo" est transposable à toute communication qui veut éviter
l'effet "texte plaqué sur image" trop numérique.
Le bloc orateur en aplat coloré comme badge réutilisable convient à toute série avec intervenant
variable (podcast, webinaire, conférence).

## 18. Cahier des charges final
Stack suggérée si décliné en web : composant "badge orateur" réutilisable (couleur + nom en props),
liste de fuseaux horaires calculée dynamiquement depuis une heure de référence plutôt que codée en
dur pour chaque fuseau.
Reste 100% original — nom d'organisation, orateur réel et texte exact jamais repris.
