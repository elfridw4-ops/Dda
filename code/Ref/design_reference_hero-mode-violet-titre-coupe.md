# DESIGN REFERENCE — Hero E-commerce Mode (univers violet, titre coupé par portrait)
Type input : IMAGE STATIQUE
Domaine observé : E-commerce mode/streetwear — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero + fragments de sections suivantes visibles en flou)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque exact ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'un site e-commerce mode/streetwear, marque fictive nom court (non pertinent à
reproduire) [FAIT]
Type : landing e-commerce, hero + aperçu flouté des sections suivantes en arrière-plan (effet de
présentation type mockup portfolio) [FAIT]
Objectif supposé : vendre une collection/un positionnement de marque streetwear premium [HYPOTHÈSE]
Public cible : jeunes adultes intéressés par la mode urbaine [HYPOTHÈSE]

## 2. Structure générale
Nav : liens à gauche (Shop/New In/Collections/About/Contact), logo marque centré, recherche +
avatar compte + panier ("1 item") à droite [FAIT]
Titre en 2 blocs qui encadrent un portrait central : "Define Your STYLE" à gauche (mot accent en
plus gros/gras), "Own Your WORLD" à droite (mot accent en énorme) — le portrait chevauche
littéralement la limite entre les 2 blocs de titre [FAIT]
Bloc violet plein sous le titre : mention collection + accroche + description courte + CTA
"Explore Now", 3 badges USP alignés à droite (qualité/durable/édition limitée), carte produit
flottante "Featured Look" (photo + nom produit + prix + bouton panier) en bord droit [FAIT]
Bloc réassurance sociale en bas-gauche : avatars empilés + mention "aimé par 20k+ personnes" +
icône cœur [FAIT]
Sections suivantes visibles en arrière-plan flouté (effet de profondeur/aperçu scroll) [FAIT]
Ordre de lecture : nav → titre à 2 blocs → portrait → bloc collection/CTA → produit flottant →
réassurance sociale [FAIT]

## 3. Palette graphique
Univers violet/lavande à intensités variées — fond blanc dominant, blocs pleins violet moyen,
logo produit accent violet vif — une seule famille de teinte du clair au saturé, jamais une
couleur étrangère introduite [FAIT]
Texte : noir sur fond blanc, blanc sur bloc violet plein — inversion de contraste cohérente [FAIT]
CTA "Explore Now" : noir plein, rupture volontaire avec l'univers violet pour un point d'action
qui ressort [FAIT]
Principe à retenir : une seule famille de teinte (violet) déclinée en plusieurs intensités plutôt
qu'un duo de couleurs contrastées — cohérence par nuance, CTA principal en noir comme seule
rupture volontaire (voir Agents_Bibliotheque_Palettes.md famille Nacre & Prune pour un registre
violet clair proche, jamais recopier tel quel).

## 4. Typographie
Titre à 2 blocs : sans-serif, avec rupture de graisse marquée — mots d'accent ("STYLE"/"WORLD")
en bold très large, mots de liaison ("Define Your"/"Own Your") en poids plus léger — hiérarchie
en 2 temps sur un même titre éclaté [FAIT]
Bloc collection : sans-serif bold pour le titre de section, regular pour la description [FAIT]
Badges USP et prix : sans-serif medium, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Titre à 2 blocs séparés par le sujet photo** — technique de composition où le portrait ne se
pose pas à côté du titre mais EN SON MILIEU, cassant visuellement la lecture en 2 temps (cf.
design_reference_bazil-portfolio.md pour le même principe en noir/blanc plein/outline) [FAIT]
**Carte produit flottante "Featured Look"** — mini-fiche produit (photo+nom+prix+CTA) directement
dans le hero, raccourci de conversion sans quitter l'écran [FAIT]
**Badges USP inline avec icônes** — 3 arguments de vente courts alignés horizontalement, pas une
liste verticale [FAIT]
**Bloc réassurance sociale (avatars + mention "aimé par")** — preuve sociale visuelle dès le hero [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE À 2 BLOCS (encadre le portrait)
Zone → TOP-CENTER à MID-CENTER
X% → ≈4% | Y% → ≈18% | W% → ≈92% | H% → ≈22% [HYPOTHÈSE]

ÉLÉMENT : PORTRAIT (chevauche la limite des 2 blocs de titre)
Zone → MID-CENTER
X% → ≈32% | Y% → ≈18% | W% → ≈36% | H% → ≈55% [HYPOTHÈSE]

ÉLÉMENT : BLOC VIOLET PLEIN (collection + CTA + badges)
Zone → MID-CENTER à BOT-CENTER
X% → 0% | Y% → ≈48% | W% → 100% | H% → ≈30% [HYPOTHÈSE]

ÉLÉMENT : CARTE PRODUIT FLOTTANTE
Zone → MID-RIGHT
X% → ≈78% | Y% → ≈52% | W% → ≈20% | H% → ≈24% [HYPOTHÈSE]

ÉLÉMENT : RÉASSURANCE SOCIALE (avatars)
Zone → BOT-LEFT
X% → ≈4% | Y% → ≈80% | W% → ≈22% | H% → ≈8% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                              │ MODE   │ OPACITÉ │ TAG
 5 │ Carte produit flottante              │ Normal │ 100%    │ FAIT
 4 │ Texte titre (2 blocs) + nav + réseaux│ Normal │ 100%    │ FAIT
 3 │ Portrait (devant, coupe le titre)     │ Normal │ 100%    │ FAIT
 2 │ Bloc violet plein (collection/CTA)    │ Normal │ 100%    │ FAIT
 1 │ Fond blanc + sections suivantes flou  │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Carte produit + panier suggèrent un vrai parcours d'achat
cliquable [HYPOTHÈSE].

## 9. Effets visuels
Portrait détouré posé devant le titre, coupe visuellement le mot central — même principe que la
réf Bazil (plein/outline) mais ici en couleur/photo plutôt qu'en typo [FAIT]
Sections suivantes visibles floutées en arrière-plan — effet de profondeur/aperçu scroll [HYPOTHÈSE]
Aucun glow/glassmorphism détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable. Le titre à 2 blocs séparés par
le portrait est un pattern à risque en mobile étroit (empilement probable à revoir) [HYPOTHÈSE].

## 11. Accessibilité
Contraste noir sur blanc (titre) : excellent [FAIT]
Contraste blanc sur bloc violet moyen : bon [FAIT]
Badges USP en petite taille : cible tactile/lisibilité à vérifier sur mobile [HYPOTHÈSE]

## 12. Technologies probables
Site probablement React/Next.js ou Shopify custom, portrait détouré et intégré en calque séparé
[HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le titre à 2 blocs séparés par le portrait crée une composition dynamique et mémorable, plus
originale qu'un titre centré classique au-dessus d'une photo produit.
La carte produit flottante directement dans le hero raccourcit le chemin vers l'achat sans
attendre le scroll vers le catalogue.
Cohérence chromatique totale (une seule famille violette) qui unifie logo, blocs, CTA secondaires
— seul le CTA principal (noir) rompt volontairement ce système.

## 14. Défauts observés
Titre à 2 blocs séparés par le portrait est un pattern fragile en mobile étroit — aucun indice
sur la réorganisation prévue [HYPOTHÈSE]
Beaucoup d'éléments cohabitent dans un seul hero (titre + portrait + bloc CTA + badges + carte
produit + réassurance sociale) — proche de la densité maximale gérable [HYPOTHÈSE]

## 15. Éléments à réutiliser
Titre coupé en 2 blocs par le sujet photo central — technique de composition dynamique
transposable à tout hero avec un sujet fort à mettre en scène
Carte produit flottante directement dans le hero pour un raccourci de conversion
Cohérence chromatique totale (une seule famille de teinte) + un CTA principal qui rompt
volontairement le système pour ressortir

## 16. Éléments à éviter
Cumuler titre éclaté + carte produit + badges + réassurance sociale dans un seul hero sans tester
la densité réelle sur mobile étroit avant livraison

## 17. Recommandations pour le projet
Le principe "titre coupé en 2 blocs par le sujet central" est transposable à tout hero avec un
sujet fort (personne, produit) à mettre en scène — pas propre à la mode. Prévoir explicitement la
réorganisation mobile du titre à 2 blocs avant de le valider (retour à un titre empilé classique
probable en dessous d'un breakpoint).

## 18. Cahier des charges final
Stack suggérée : titre en 2 `<span>` positionnés de part et d'autre du portrait (position relative
+ z-index intermédiaire), carte produit flottante en composant réutilisable (props: image, nom,
prix), badges USP en flex row avec wrap prévu sous un breakpoint donné.
Reste 100% original — nom de marque exact, prix et texte exact jamais repris tels quels.
