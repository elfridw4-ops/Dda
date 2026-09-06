# DESIGN REFERENCE — Flyer "God Chaser" (canopée forêt, titre géant)
Type input : IMAGE STATIQUE
Domaine observé : Église / service en ligne hebdomadaire — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait ~4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, orateur, réseaux sociaux ou palette figée
ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.
Voir aussi design_reference_flyer-god-leading-desert.md et -pecheur.md — même organisation,
série différente (Section 19).

---

## 1. Informations générales
Nom : flyer d'un service hebdomadaire, même organisation religieuse que la série "God's Leading"
mais titre/thème différent (nom non reproduit) [FAIT]
Type : flyer réseaux sociaux, photo plein cadre + typographie géante superposée [FAIT]
Objectif supposé : annoncer le service hebdomadaire régulier, format répétitif [HYPOTHÈSE]
Public cible : identique aux autres flyers de l'organisation, audience internationale (fuseaux
horaires affichés) [FAIT]

## 2. Structure générale
Photo plein cadre : vue en contre-plongée à travers une canopée d'arbres, lumière filtrant entre
les branches, un personnage silhouetté en bas lève le bras vers le ciel [FAIT]
Titre sur 2 lignes, lettrage énorme occupant presque toute la largeur et une bonne partie de la
hauteur du cadre, chevauche directement les branches de la photo [FAIT]
En-tête minimal : logo + nom organisation à gauche, mention "cette semaine" à droite [FAIT]
Bas de flyer : date + heure en 2 blocs coin bas-gauche/droite, bloc orateur en aplat coloré,
rangée de fuseaux horaires, réseaux sociaux — structure proche des flyers "God's Leading" de la
même organisation [FAIT]

## 3. Palette graphique
Photo : vert forêt naturel, lumière dorée filtrant à travers les feuilles, grain/texture visible
sur toute l'image [FAIT]
Titre : blanc cassé/crème, aplat texturé (grain) plutôt que blanc pur lisse [FAIT]
Bloc orateur : rouge plein — même code couleur que la série "God's Leading" de l'organisation,
signature transversale au-delà d'une seule série [FAIT]
Accent heure : jaune vif, cohérent avec les autres flyers de l'organisation (même famille jaune
que les accents "God's Leading") [FAIT]
Principe à retenir : cette organisation maintient 2 constantes de marque à travers PLUSIEURS
séries différentes (pas juste au sein d'une série) — bloc rouge + accent jaune — signature
d'identité de marque globale plutôt que ponctuelle (voir Section 19).

## 4. Typographie
Titre 2 lignes : display condensé très gras, majuscules, texture grain visible sur les contours,
occupe presque tout le cadre horizontalement — le plus massif des flyers de ce lot [FAIT]
Mentions en-tête et bas : sans-serif bold condensée, cohérente avec les autres flyers de
l'organisation [FAIT]
Police exacte non identifiable, mais famille cohérente avec design_reference_flyer-god-leading-
desert.md et -pecheur.md [HYPOTHÈSE]

## 5. Composants UI
**Titre géant chevauchant la photo** — le texte n'est pas posé à côté ou sur une zone dégagée mais
directement PAR-DESSUS le sujet photo (les branches), technique qui prend plus de risque de
lisibilité mais crée un impact visuel fort [FAIT]
**Silhouette humaine minimale** — personnage réduit à une silhouette au geste clair (bras levé),
sert d'ancrage émotionnel sans détourner l'attention du titre massif [FAIT]
**Bloc orateur + accent jaune** — signature de marque de l'organisation, cohérente sur plusieurs
flyers différents (voir Section 19) [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE 2 LIGNES (géant)
Zone → TOP-CENTER à MID-CENTER
X% → 0% | Y% → ≈10% | W% → 100% | H% → ≈40% [HYPOTHÈSE]
Alignement → chevauche directement la photo de canopée, pas de zone dégagée dédiée

ÉLÉMENT : SILHOUETTE PERSONNAGE
Zone → BOT-CENTER
X% → ≈35% | Y% → ≈55% | W% → ≈30% | H% → ≈35% [HYPOTHÈSE]

ÉLÉMENT : BLOC ORATEUR + DATE/HEURE
Zone → BOT-CENTER, bas de cadre
X% → ≈5% | Y% → ≈85% | W% → ≈90% | H% → ≈12% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 3 │ Texte (en-tête/titre/bas)        │ Normal │ 100%    │ FAIT
 2 │ Silhouette personnage             │ Normal │ 100%    │ FAIT (fait partie de la photo, pas un calque ajouté séparé — HYPOTHÈSE sur la méthode)
 1 │ Photo canopée forêt (grain/texture)│ Normal│ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — support statique, bien que "Facebook Live" soit mentionné comme mode de diffusion
réel [FAIT pour la mention, NON OBSERVÉ pour l'interaction].

## 9. Effets visuels
Grain/texture photographique appliqué à l'ensemble (photo + titre), cohérent avec les autres
flyers de la même organisation — signature de traitement transversale [FAIT]
Lumière naturelle filtrant à travers les feuilles, effet de profondeur atmosphérique réel plutôt
que simulé [FAIT]
Aucun glow/blur/glassmorphism artificiel [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre crème/texturé sur photo de forêt : variable selon la zone — bon sur les parties
sombres du feuillage, plus faible sur les trouées de lumière dorée [HYPOTHÈSE]
Contraste bloc orateur (rouge) et accent heure (jaune) : bons, aplats francs [FAIT]
Le chevauchement direct titre/branches (au lieu d'une zone dégagée) est un vrai risque de lisibilité
locale à surveiller si repris [HYPOTHÈSE]

## 12. Technologies probables
Photo réelle (pas de rendu 3D/IA apparent ici, contrairement à d'autres flyers du lot), traitement
grain/texture en post-production Photoshop [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le titre qui chevauche directement le sujet photo (plutôt que d'être cantonné à une zone dégagée)
crée un impact immédiat et une impression de grande échelle — technique risquée mais efficace ici
grâce à la texture cohérente qui unifie texte et image.
La cohérence de marque (bloc rouge + accent jaune) maintenue à travers différentes séries de
contenu de la même organisation est une vraie discipline de branding, rare à ce niveau de
constance dans ce type de flyer.

## 14. Défauts observés
Le contraste du titre sur les zones les plus claires du feuillage (trouées de lumière) est
probablement le point faible du visuel — à vérifier avant réutilisation du principe [HYPOTHÈSE]
Le personnage silhouetté, très petit dans la composition finale, pourrait passer inaperçu au
premier regard tant le titre domine [HYPOTHÈSE]

## 15. Éléments à réutiliser
Titre géant qui chevauche directement le sujet photo plutôt qu'une zone dégagée dédiée — technique
d'impact fort si la texture/le grain unifie texte et image
Silhouette humaine minimale au geste clair comme ancrage émotionnel discret sans concurrencer le
titre
Signature de marque à 2 constantes (couleur badge + accent) maintenue across plusieurs séries de
contenu différentes, pas juste au sein d'une série

## 16. Éléments à éviter
Superposer un titre directement sur une photo à fort contraste local (trouées de lumière) sans
vérifier la lisibilité sur CHAQUE zone du fond, pas juste un aperçu global

## 17. Recommandations pour le projet
Le principe "titre géant chevauchant directement le sujet" est transposable à toute communication
qui veut un impact fort, mais exige un test de contraste rigoureux zone par zone (pas un contrôle
visuel rapide) avant livraison.
La discipline de signature de marque à 2 constantes maintenue sur plusieurs contenus différents
est une bonne pratique générale à copier, indépendamment du secteur.

## 18. Cahier des charges final
Stack suggérée si décliné en web : image hero avec overlay de contraste local (mask-image dégradé
ciblé uniquement sur la zone du titre) pour garantir la lisibilité sans assombrir toute la photo,
composant "bloc orateur" réutilisable partagé avec les autres flyers de la même organisation
(voir Section 19).
Reste 100% original — nom d'organisation, orateur réel et texte exact jamais repris.

## 19. Liens avec autres références
Voir design_reference_flyer-god-leading-desert.md et design_reference_flyer-god-leading-pecheur.md
— même organisation religieuse (nom non reproduit), constantes de marque partagées à travers CES
3 flyers bien qu'ils appartiennent à des séries de contenu différentes : bloc orateur en aplat
rouge plein + accent jaune + texture grain/grunge cohérente. C'est une signature d'IDENTITÉ DE
MARQUE globale de l'organisation, pas seulement une signature de série ponctuelle — point notable
si un projet doit répliquer ce niveau de cohérence transversale.
