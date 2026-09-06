# DESIGN REFERENCE — Flyer Série "God's Leading 2" (pêcheur, cadre-filet)
Type input : IMAGE STATIQUE
Domaine observé : Église / service en ligne hebdomadaire, série récurrente — usage NON restreint
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait ~4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, orateur, réseaux sociaux ou palette figée
ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.
Voir aussi design_reference_flyer-god-leading-desert.md — même série, épisode précédent
(Section 19 pour la cohérence de signature).

---

## 1. Informations générales
Nom : 2e épisode de la même série récurrente que design_reference_flyer-god-leading-desert.md,
même organisation religieuse (nom non reproduit) [FAIT]
Type : flyer réseaux sociaux, composite photo/illustration + typographie [FAIT]
Objectif supposé : maintenir la reconnaissance de série tout en variant la mise en scène
symbolique épisode par épisode [HYPOTHÈSE]
Public cible : identique à l'épisode précédent, audience internationale (fuseaux horaires) [FAIT]

## 2. Structure générale
Sujet central mis en scène : personnage en tenue d'époque (type vêtement biblique), debout sur une
embarcation, entouré de poissons flottants — scène symbolique/allégorique plutôt qu'un portrait
littéral [FAIT]
Filet de pêche géant qui encadre TOUTE la composition en formant un tunnel/vignette ovale autour du
sujet central — élément structurant unique, absent de l'épisode précédent [FAIT]
En-tête : mentions programme (nom série, organisation, type diffusion) réparties en haut, logo
centré [FAIT]
Titre "GOD'S LEADING" + numéro d'épisode ("2" en accent couleur) sous le sujet central [FAIT]
Bloc orateur en aplat rouge, même traitement que l'épisode précédent — signature de série [FAIT]
Bas : date, rangée fuseaux horaires + heure, réseaux sociaux — structure identique à l'épisode 1 [FAIT]

## 3. Palette graphique
Fond : ciel/eau bleu, plus lumineux et froid que l'épisode désert (contraste délibéré entre les 2
épisodes malgré la même série) [FAIT]
Filet de pêche : brun corde naturel, texture réaliste, entoure tout le cadre [FAIT]
Titre : blanc, numéro d'épisode en jaune vif — même code couleur jaune que le "God's" de l'épisode
1, fil conducteur de série [FAIT]
Bloc orateur : rouge plein, identique à l'épisode 1 — signature de série confirmée sur 2 épisodes [FAIT]
Principe à retenir : la série change de décor/tonalité (désert chaud vs eau froide) mais conserve
2 constantes strictes : le bloc orateur rouge et l'accent jaune — c'est CA la vraie signature de
série, pas la couleur de fond.

## 4. Typographie
Titre "GOD'S LEADING" : display condensé blanc massif, cohérent avec l'épisode 1 (même famille) [FAIT]
Numéro d'épisode "2" : traité en accent jaune, script/cursif fin qui contraste avec le display
massif du titre — signature typographique de numérotation [FAIT]
Bloc orateur et mentions programme : sans-serif bold condensée, identique épisode 1 [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Cadre-filet englobant** — élément le plus distinctif de cet épisode : un filet de pêche référence
directement le thème biblique (pêcheurs d'hommes) tout en servant de cadre de composition/vignette
— double fonction narrative ET structurelle [FAIT]
**Numéro d'épisode en accent couleur script** — cohérent avec l'accent jaune de l'épisode 1 mais
traité comme un vrai élément numéroté plutôt qu'un mot [FAIT]
**Bloc orateur identique épisode 1** — signature de série strictement répétée, permet la
reconnaissance immédiate même si le décor change totalement [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : CADRE-FILET (englobant)
Zone → CENTER, quasi pleine composition
X% → 0% | Y% → ≈8% | W% → 100% | H% → ≈75% [HYPOTHÈSE]

ÉLÉMENT : SUJET CENTRAL (personnage sur embarcation)
Zone → CENTER (à l'intérieur du cadre-filet)
X% → ≈25% | Y% → ≈35% | W% → ≈50% | H% → ≈40% [HYPOTHÈSE]

ÉLÉMENT : TITRE + NUMÉRO ÉPISODE
Zone → BOT-CENTER (chevauche le bas du cadre-filet)
X% → ≈10% | Y% → ≈62% | W% → ≈80% | H% → ≈10% [HYPOTHÈSE]

ÉLÉMENT : BLOC ORATEUR
Zone → BOT-CENTER, sous le titre
X% → ≈30% | Y% → ≈74% | W% → ≈40% | H% → ≈5% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                              │ MODE   │ OPACITÉ │ TAG
 4 │ Texte (mentions/titre/orateur/bas)   │ Normal │ 100%    │ FAIT
 3 │ Cadre-filet (premier plan, englobant)│ Normal │ 100%    │ FAIT
 2 │ Sujet central + poissons flottants    │ Normal │ 100%    │ FAIT
 1 │ Fond ciel/eau                         │ Normal │ 100%    │ FAIT
```
Le filet joue un rôle inhabituel : à la fois calque 3 (premier plan, encadre visuellement) tout en
laissant voir le sujet à travers ses mailles — pas une simple superposition opaque.

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — support statique.

## 9. Effets visuels
Gouttes d'eau visibles sur le filet au premier plan, ajoute du réalisme/de la texture physique à
l'élément englobant [FAIT]
Poissons en suspension autour du sujet — élément quasi surréaliste qui renforce le caractère
symbolique/allégorique plutôt que photoréaliste littéral [FAIT]
Aucun glow/blur/glassmorphism [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre blanc sur zone sombre (bas de composition, eau plus foncée) : bon [FAIT]
Contraste numéro jaune : bon, bien détaché [FAIT]
Lisibilité du filet en premier plan sur le sujet : le filet reste assez fin/transparent pour ne
pas masquer le sujet central [FAIT]

## 12. Technologies probables
Composition probablement générée par IA pour le sujet central et les poissons (rendu stylisé
cohérent), filet en élément photographique/texture réelle superposé [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le cadre-filet à double fonction (narrative + structurelle) est une idée forte : l'élément
décoratif EST le message (pêcheurs d'hommes), pas un ornement à côté du message.
La cohérence de série maintenue à travers exactement 2 constantes (bloc orateur rouge + accent
jaune) malgré un décor et une mise en scène totalement différents prouve qu'une signature de série
n'a pas besoin de répéter tout le design — juste les bons éléments minimaux.
Le sujet symbolique/allégorique (plutôt qu'un portrait de prédicateur classique) élève le niveau
créatif au-dessus du flyer religieux générique.

## 14. Défauts observés
Le filet en premier plan, aussi fin soit-il, ajoute de la complexité visuelle qui pourrait réduire
la lisibilité à très petite taille (vignette réseaux sociaux) [HYPOTHÈSE]
Beaucoup d'éléments mis en scène (personnage + poissons + filet + eau + titre + bloc + bas de
flyer) — proche de la densité maximale gérable sans surcharge [HYPOTHÈSE]

## 15. Éléments à réutiliser
Cadre englobant qui porte lui-même une signification liée au sujet (pas un cadre décoratif
générique) — transposable à tout secteur ayant un symbole fort et littéral à exploiter comme cadre
Signature de série réduite à 2 constantes strictes (1 couleur de badge + 1 accent) plutôt que de
tout répéter à l'identique
Mise en scène symbolique/allégorique plutôt que portrait littéral pour illustrer un thème abstrait

## 16. Éléments à éviter
Superposer trop d'éléments mis en scène sans tester la lisibilité finale à petite taille mobile

## 17. Recommandations pour le projet
Le principe "cadre englobant porteur de sens" est transposable à tout secteur ayant un objet/motif
symbolique fort (ex: cadre en circuit imprimé pour la tech, cadre en pinceau pour l'art) — jamais
un cadre décoratif choisi au hasard.
Pour toute série multi-épisodes : définir dès le départ les 2-3 constantes strictes de signature
(comme ici bloc orateur + accent couleur) plutôt que de tout refaire à chaque épisode.

## 18. Cahier des charges final
Stack suggérée si décliné en web : SVG/masque pour le cadre englobant (mask-image avec la forme du
filet), image de sujet central en couche séparée pour permettre la réutilisation du cadre sur
plusieurs futurs épisodes de la série.
Reste 100% original — nom d'organisation, orateur réel et texte exact jamais repris.

## 19. Liens avec autres références
Voir design_reference_flyer-god-leading-desert.md (épisode 1, même série) : constantes partagées
= bloc orateur rouge plein + accent couleur jaune sur le titre + structure bas de flyer identique
(date/fuseaux/réseaux). Variables d'un épisode à l'autre = décor complet, mise en scène du sujet,
palette de fond. Aucun conflit entre les 2 références — cohérentes comme signature de série.
