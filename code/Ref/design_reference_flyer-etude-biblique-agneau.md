# DESIGN REFERENCE — Flyer Étude Biblique (agneau + onction)
Type input : IMAGE STATIQUE
Domaine observé : Église / étude biblique thématique — usage NON restreint
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, logo, références bibliques ou palette figée
ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : flyer d'annonce d'une étude biblique thématique, organisation religieuse [FAIT]
Type : flyer réseaux sociaux format portrait, illustration photoréaliste/rendu IA [FAIT]
Objectif supposé : informer sur le thème, les références bibliques associées, le lieu et l'heure
d'une session d'étude [FAIT]
Public cible : membres d'une communauté religieuse, probablement contexte étudiant/universitaire
(mention "Campus", "niveau" dans les lieux) [HYPOTHÈSE]

## 2. Structure générale
Image illustrative pleine largeur en tiers supérieur : gros plan sur un agneau, une main verse un
liquide doré (huile) sur sa tête — image symbolique forte, occupe l'espace principal [FAIT]
2 badges en haut : logo organisation à gauche, mention type de contenu ("BIBLE STUDY") en haut à
droite sur fond orange plein [FAIT]
Titre principal juste sous l'image, énorme, sur 2 lignes empilées, dégradé blanc→transparent qui
se fond dans l'image du dessus [FAIT]
Références bibliques en petit, juste sous le titre [FAIT]
Bas de flyer : 2 blocs lieu (icône pin + texte) alignés à gauche, bloc date/heure aligné à droite
en couleur vive contrastée [FAIT]
Fond général : texture parchemin/manuscrit ancien en arrière-plan du bas de la composition [FAIT]

## 3. Palette graphique
Image agneau : tons chauds naturels (crème laine, doré du liquide, vert-brun de l'arrière-plan
flouté) [FAIT]
Titre : blanc en dégradé vers transparent en haut (fusion avec l'image), lisible en blanc plein
en bas [FAIT]
Badge "BIBLE STUDY" : orange vif plein, seul aplat de couleur franc de toute la composition [FAIT]
Date/heure : orange/rouge vif également, cohérent avec le badge du haut — un seul accent chaud
répété 2 fois pour créer un fil visuel [FAIT]
Fond bas : brun parchemin sombre, texture manuscrit [FAIT]
Principe à retenir : image symbolique en tons naturels chauds + UN SEUL accent vif (orange) répété
à 2 endroits clés (badge titre + date) pour guider l'œil, sans multiplier les couleurs d'accent.

## 4. Typographie
Titre principal ("APPROVAL OF SONSHIP" ou équivalent générique) : sans-serif très condensée et
grasse, majuscules, 2 lignes, la 2e ligne nettement plus grande que la première — hiérarchie de
taille marquée [FAIT]
Références bibliques : sans-serif fine, petite taille, discrète [FAIT]
Date/heure bloc droit : sans-serif bold très grande, couleur vive — élément qui attire l'œil autant
que le titre [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Image symbolique en tiers supérieur** — pas une photo de personnes/lieu mais une scène
symbolique/allégorique qui illustre le thème abstrait de l'étude [FAIT]
**Titre à dégradé de fusion** — le texte blanc se fond progressivement dans l'image du dessus par
un dégradé alpha, technique de transition entre image et fond texturé [FAIT]
**Badge coloré coin supérieur** — étiquette de catégorisation de contenu, réutilisable pour tout
type de contenu à catégoriser (Bible Study, Live, Replay, etc.) [FAIT]
**Bloc date/heure contrasté** — traité comme un élément presque aussi important visuellement que
le titre, pas relégué en petit texte discret [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : IMAGE SYMBOLIQUE (agneau + onction)
Zone → TOP-CENTER, pleine largeur
X% → 0% | Y% → 0% | W% → 100% | H% → ≈45% [HYPOTHÈSE]

ÉLÉMENT : TITRE 2 LIGNES
Zone → MID-CENTER (chevauche bas image / haut fond texturé)
X% → 0% | Y% → ≈40% | W% → 100% | H% → ≈20% [HYPOTHÈSE]
Alignement → fusionne avec le bas de l'image par dégradé alpha

ÉLÉMENT : BLOC DATE/HEURE
Zone → BOT-RIGHT
X% → ≈55% | Y% → ≈85% | W% → ≈40% | H% → ≈12% [HYPOTHÈSE]

ÉLÉMENT : BLOCS LIEU (x2)
Zone → BOT-LEFT
X% → ≈3% | Y% → ≈85% | W% → ≈45% | H% → ≈12% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                        │ MODE   │ OPACITÉ EST. │ TAG
 4 │ Badges + date/heure + lieu     │ Normal │ 100%         │ FAIT
 3 │ Titre (dégradé alpha vers image)│ Normal│ 100%→0%      │ HYPOTHÈSE
 2 │ Image agneau+onction (tiers haut)│ Normal│ 100%        │ FAIT
 1 │ Fond texture parchemin (bas)    │ Normal │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — flyer statique. Mentions d'icônes réseaux sociaux en bas (Facebook, Instagram,
Telegram) suggèrent des liens de suivi mais non cliquables sur ce support image [FAIT pour la
présence des icônes, HYPOTHÈSE sur leur fonction]

## 9. Effets visuels
Dégradé alpha du titre qui se fond dans l'image au-dessus — transition fluide entre 2 zones de
fond différentes (image vs texture) sans coupure nette [FAIT]
Texture parchemin/manuscrit en fond bas, évoque l'ancien/le sacré [FAIT]
Flou d'arrière-plan sur l'image symbolique (profondeur de champ) qui isole le sujet (agneau/main) [FAIT]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre blanc sur zone de transition image/texture : bon en bas (fond sombre plein),
possiblement plus faible dans la zone de fusion avec l'image claire du dessus [HYPOTHÈSE]
Contraste bloc date/heure (couleur vive) : bon, volontairement très visible [FAIT]

## 12. Technologies probables
Image symbolique probablement générée par IA (rendu photoréaliste très lisse, éclairage stylisé)
ou photo stock retouchée [HYPOTHÈSE]
Composition finale Photoshop/Canva [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Utiliser une image SYMBOLIQUE/allégorique plutôt qu'une photo de personnes pour illustrer un thème
abstrait est une approche plus forte visuellement qu'un simple portrait de prédicateur — transpose
le concept en image.
Le dégradé de fusion entre l'image et le titre crée une continuité visuelle fluide plutôt qu'une
coupure nette entre 2 blocs.
Traiter la date/heure avec le même poids visuel que le titre (couleur vive, grande taille) garantit
que l'info pratique n'est jamais négligée au profit du seul aspect créatif.

## 14. Défauts observés
La hiérarchie entre titre (2 lignes très inégales en taille) pourrait déséquilibrer la lecture si
la 2e ligne est un mot très long [HYPOTHÈSE]
Beaucoup d'éléments de bas de flyer (2 blocs lieu + date/heure + réseaux sociaux) proches de la
limite de densité sur mobile [HYPOTHÈSE]

## 15. Éléments à réutiliser
Image symbolique/allégorique pour illustrer un concept abstrait plutôt qu'une photo littérale
Dégradé de fusion entre 2 zones de fond différentes (image → texture) pour éviter une coupure nette
Traiter l'info pratique (date/heure) avec un poids visuel comparable au titre créatif, pas relégué

## 16. Éléments à éviter
Cumuler trop de blocs d'info en bas de composition sans tester la densité réelle sur petit écran

## 17. Recommandations pour le projet
Le principe "image symbolique pour concept abstrait" est transposable à toute communication ayant
un thème conceptuel à illustrer (valeur d'entreprise, sujet de conférence, thème de formation) —
pas propre au religieux.
Vérifier la lisibilité du titre à la jonction image/texture sur différentes luminosités d'image.

## 18. Cahier des charges final
Stack suggérée si décliné en web : image hero + masque CSS mask-image (gradient) pour fusionner le
bas de l'image avec la section suivante, badge catégorie réutilisable en composant.
Reste 100% original — nom d'organisation, logo, références bibliques exactes et texte jamais repris.
