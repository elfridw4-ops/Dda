# DESIGN REFERENCE — Save The Date Floral (papillons + fenêtre arquée)
Type input : IMAGE STATIQUE
Domaine observé : Mariage / faire-part numérique — usage NON restreint
Niveau confiance global : ≈55% FAIT / 40% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, noms des mariés, date réelle, crédit studio ou palette figée
ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : "Save the date" de mariage à ambiance romantique pastel [FAIT]
Type : faire-part numérique, format portrait, esthétique retouche/composite poussée [FAIT]
Objectif supposé : annoncer une date de mariage avec un rendu très photogénique/glamour, probable
partage réseaux sociaux [HYPOTHÈSE]
Public cible : proches/famille invités, mais aussi visibilité réseaux sociaux (mention studio de
design en crédit bas de flyer suggère un usage vitrine/portfolio en plus du faire-part) [HYPOTHÈSE]

## 2. Structure générale
Couple debout/assis devant une fenêtre arquée lumineuse, cadrage en 3/4 [FAIT]
Fond entièrement retouché en dominante rose/violet pastel avec fleurs (photographiques, pas
dessinées) disposées en bordure gauche et droite du cadre [FAIT]
Papillons décoratifs (illustration ajoutée en post-production) disposés à plusieurs endroits
autour du couple, tailles variées, certains chevauchent les personnages [FAIT]
Mention courte en haut à gauche ("TOGETHER FOREVER" ou équivalent) [FAIT]
Badge rond en haut à droite avec initiales + année, style "tampon/sceau d'événement" [FAIT]
Noms des mariés en très grand script/serif élaboré, centrés, dans le tiers inférieur [FAIT]
Date sous les noms, plus petite [FAIT]
Crédit du studio de design tout en bas, très petit, discret [FAIT]

## 3. Palette graphique
Dominante : rose/violet/magenta pastel sur l'ensemble du fond et des fleurs [FAIT]
Vêtements du couple : blanc pour les deux (chemise + robe/haut), contraste clair sur fond coloré [FAIT]
Papillons : même famille rose/violet que le fond, légèrement plus saturés pour se détacher [FAIT]
Texte : blanc pour les noms/titre, rose vif pour le badge rond [FAIT]
Principe à retenir : une seule famille de teinte (rose/violet) qui unifie fond, fleurs ET éléments
décoratifs (papillons) — cohérence totale de palette plutôt qu'un couple de couleurs contrastées.

## 4. Typographie
Noms des mariés : script élaboré avec fioritures, très grande taille, dominent visuellement toute
la composition [FAIT]
Mention "Together Forever" : sans-serif fine, majuscules, petite taille, discrète en coin [FAIT]
Badge rond : sans-serif condensée bold pour les initiales/année [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Fenêtre arquée en arrière-plan** — élément architectural qui structure la composition et cadre
naturellement le couple [FAIT]
**Papillons décoratifs superposés** — éléments graphiques ajoutés qui chevauchent volontairement le
sujet principal (pas seulement en arrière-plan), technique de composition en profondeur [FAIT]
**Badge rond "sceau d'événement"** — initiales + année dans un cercle, façon tampon/monogramme
d'événement, réutilisable comme signature de tout événement à 2 noms [FAIT]
**Crédit studio discret** — mention de paternité du design en tout petit, bas de composition [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : MENTION "TOGETHER FOREVER"
Zone → TOP-LEFT
X% → ≈5% | Y% → ≈4% | W% → ≈30% | H% → ≈6% [HYPOTHÈSE]

ÉLÉMENT : BADGE ROND
Zone → TOP-RIGHT
X% → ≈78% | Y% → ≈8% | W% → ≈16% | H% → ≈10% [HYPOTHÈSE]

ÉLÉMENT : COUPLE (photo)
Zone → CENTER, légèrement bas
X% → ≈5% | Y% → ≈10% | W% → ≈90% | H% → ≈65% [HYPOTHÈSE]

ÉLÉMENT : NOMS DES MARIÉS (script)
Zone → BOT-CENTER
X% → ≈10% | Y% → ≈76% | W% → ≈80% | H% → ≈14% [HYPOTHÈSE]

ÉLÉMENT : DATE
Zone → BOT-CENTER (sous noms)
X% → ≈20% | Y% → ≈90% | W% → ≈60% | H% → ≈5% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                        │ MODE   │ OPACITÉ │ TAG
 5 │ Texte (mention/badge/noms/date)│ Normal │ 100%    │ FAIT
 4 │ Papillons décoratifs (devant)   │ Normal │ 100%    │ FAIT
 3 │ Couple (sujet principal)        │ Normal │ 100%    │ FAIT
 2 │ Fleurs bordure gauche/droite     │ Normal │ 100%    │ FAIT
 1 │ Fond fenêtre arquée + dégradé    │ Normal │ 100%    │ FAIT
```
Note : au moins un papillon chevauche le sujet (couple) — confirmer ce chevauchement place bien
les papillons au-dessus du calque 3, pas seulement en arrière-plan pur.

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — support statique.

## 9. Effets visuels
Retouche colorimétrique globale forte (dominante rose/violet appliquée uniformément sur toute
l'image, y compris les vêtements blancs qui restent neutres) — probablement un overlay couleur ou
un traitement LUT appliqué à toute la scène [HYPOTHÈSE]
Papillons en surimpression avec ombre légère pour les ancrer dans la scène plutôt que de flotter
platement [HYPOTHÈSE]
Halo lumineux doux autour de la fenêtre en arrière-plan [FAIT]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste noms blancs sur fond rose clair : risque de contraste insuffisant selon la zone exacte
du fond derrière, à vérifier avec un outil [HYPOTHÈSE]
Contraste badge rose vif sur fond clair : correct, bien détaché [FAIT]

## 12. Technologies probables
Composite Photoshop poussé (photo retouchée + éléments graphiques ajoutés : papillons, fleurs,
badge) — mention "designed by" en bas confirme un vrai travail de studio graphique [FAIT pour la
mention, HYPOTHÈSE pour le détail technique exact]

## 13. Ce qui rend l'interface exceptionnelle
La cohérence chromatique totale (une seule famille de teinte appliquée à TOUS les éléments : fond,
fleurs, papillons) donne un rendu très abouti et "produit fini", plus qu'un assemblage de plusieurs
couleurs différentes.
Les papillons qui chevauchent le sujet principal (pas seulement en arrière-plan) créent une
profondeur et un dynamisme que des éléments purement décoratifs en fond n'auraient pas.
Le badge rond façon "sceau d'événement" est une signature de marque personnelle forte et réutilisable.

## 14. Défauts observés
Densité décorative élevée (fleurs + papillons multiples + badge + mentions) pourrait distraire du
sujet principal (le couple) si l'équilibre n'est pas parfaitement maîtrisé [HYPOTHÈSE]
Contraste du texte principal (noms) potentiellement fragile sur les zones les plus claires du fond
pastel [HYPOTHÈSE]

## 15. Éléments à réutiliser
Cohérence chromatique totale (une seule famille de teinte sur TOUS les éléments, décor inclus) —
principe transposable à tout visuel événementiel qui veut un rendu "produit fini" homogène
Éléments décoratifs qui chevauchent le sujet principal plutôt que rester cantonnés à l'arrière-plan
Badge rond "sceau" comme signature d'événement à 2 noms — réutilisable pour tout duo (co-fondateurs,
partenariat, collab)

## 16. Éléments à éviter
Cumuler trop d'éléments décoratifs (fleurs + papillons + badge) sans vérifier que le sujet principal
reste le point focal évident
Appliquer un texte clair sur un fond pastel clair sans vérifier le contraste réel à chaque zone

## 17. Recommandations pour le projet
Le principe de cohérence chromatique totale (overlay couleur unique sur toute la scène) est un
outil puissant transposable à toute photo hero qui doit s'intégrer à une identité de marque colorée.
Vérifier le contraste du texte principal sur toutes les zones du fond avant livraison, pas
seulement sur un aperçu figé.

## 18. Cahier des charges final
Stack suggérée si décliné en web : image retouchée en amont (pas de traitement colorimétrique en
temps réel), éléments décoratifs (papillons) en PNG/SVG superposés avec ombre légère CSS.
Reste 100% original — noms des mariés, date réelle, badge et crédit studio réels jamais repris.
