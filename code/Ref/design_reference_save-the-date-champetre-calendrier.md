# DESIGN REFERENCE — Save The Date Champêtre (calendrier + photo forêt)
Type input : IMAGE STATIQUE
Domaine observé : Mariage / faire-part numérique — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, noms des mariés, date réelle ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : "Save the date" de mariage avec calendrier intégré [FAIT]
Type : faire-part numérique/imprimable, format portrait [FAIT]
Objectif supposé : annoncer une date de mariage à l'avance, avant l'invitation détaillée [FAIT]
Public cible : proches/famille invités au mariage [HYPOTHÈSE]

## 2. Structure générale
Photo plein cadre du couple en extérieur (sous les arbres) comme fond principal [FAIT]
Bandeau fin doré/orange qui encadre tout le visuel en bordure (cadre décoratif fin) [FAIT]
En-tête centré : titre "Save the Date" en 2 styles (mot 1 et 3 en script, mot "THE" en serif droit
inséré entre les deux) [FAIT]
Sous le titre : date complète + noms des mariés en petit, centrés [FAIT]
Bloc calendrier complet du mois concerné, en grille classique jours de la semaine, la date de
l'événement mise en évidence par une icône cœur à la place du chiffre [FAIT]
Photo du couple occupe le bas de la composition, assis en extérieur avec éléments de pique-nique
(fruits, panier) au premier plan [FAIT]

## 3. Palette graphique
Photo : tons chauds naturels (bois, feuillage automnal, vêtement orange/moutarde porté par la
mariée) [FAIT]
Texte/calendrier : blanc pour le titre, orange/doré pour les jours actifs du mois et les
séparateurs décoratifs, gris clair pour les jours neutres [FAIT]
Accent cœur : orange/doré plein, seul élément qui casse la grille neutre du calendrier [FAIT]
Principe à retenir : la photo elle-même fournit la palette (tons chauds naturels), le graphisme
(calendrier, titre) reprend un seul accent doré/orange extrait de la photo plutôt que d'imposer une
couleur arbitraire — cohérence photo/graphisme par extraction de teinte.

## 4. Typographie
Titre "Save the Date" : mélange script cursif (mots 1 et 3) + serif classique majuscule (mot du
milieu, encadré par des soulignés décoratifs) — 3 styles dans un seul titre court [FAIT]
Date et noms : serif classique, majuscules pour les noms, taille modeste [FAIT]
Calendrier : sans-serif simple, chiffres alignés en grille classique [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Calendrier grille complet** — composant rare dans un save-the-date, ancre concrètement la date
dans le temps plutôt qu'une simple mention textuelle [FAIT]
**Icône cœur remplaçant un chiffre** — détail qui personnalise la grille calendrier sans la
complexifier [FAIT]
**Cadre bordure fine décorative** — liseré fin coloré qui délimite tout le visuel, évite l'effet
"photo qui déborde sans limite" [FAIT]
**Titre 3 styles typographiques** — technique de composition d'un titre court mais riche visuellement [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE "SAVE THE DATE"
Zone → TOP-CENTER
X% → ≈10% | Y% → ≈6% | W% → ≈80% | H% → ≈8% [HYPOTHÈSE]

ÉLÉMENT : BLOC CALENDRIER
Zone → TOP-CENTER (sous le titre)
X% → ≈15% | Y% → ≈18% | W% → ≈70% | H% → ≈22% [HYPOTHÈSE]

ÉLÉMENT : PHOTO COUPLE
Zone → BOT-CENTER, pleine largeur
X% → 0% | Y% → ≈42% | W% → 100% | H% → ≈58% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                     │ MODE   │ OPACITÉ │ TAG
 3 │ Titre + calendrier (overlay)│ Normal │ 100%    │ FAIT
 2 │ Cadre bordure fine décor    │ Normal │ 100%    │ FAIT
 1 │ Photo couple plein cadre    │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — support statique (image/print), pas d'interaction numérique par nature.

## 9. Effets visuels
Photo avec traitement chaleureux (tons chauds, légère désaturation des verts au profit des
oranges) façon retouche "automne/golden hour" [HYPOTHÈSE]
Aucun glow/blur/glassmorphism — traitement photo + graphisme plat superposé [FAIT]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre blanc sur photo : bon si la zone de fond derrière est assez sombre, risque de
faiblesse locale sur une photo avec beaucoup de variations de luminosité [HYPOTHÈSE]
Calendrier : bonne lisibilité grâce au fond suffisamment neutre en haut de la photo [FAIT]

## 12. Technologies probables
Composition Canva/Photoshop à partir d'une photo de séance couple + template calendrier [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
L'intégration d'un vrai calendrier avec la date mise en évidence est une idée concrète et utile —
au-delà de l'esthétique, ça sert littéralement à mémoriser la date, fonction rare dans ce type de
support.
Le titre à 3 styles typographiques dans 3 mots est un exercice réussi de variété contenue, sans
perdre en lisibilité.
La cohérence chromatique entre la photo et les accents graphiques (doré extrait de la tenue/feuillage)
renforce l'unité visuelle globale.

## 14. Défauts observés
Beaucoup d'info textuelle empilée en haut (titre + date + noms) avant même d'arriver au calendrier —
risque de surcharge de lecture avant la photo [HYPOTHÈSE]
Cadre bordure fine peu visible sur certaines zones sombres de la photo [HYPOTHÈSE]

## 15. Éléments à réutiliser
Intégrer un vrai calendrier fonctionnel avec la date événement mise en évidence par une icône
plutôt qu'un simple chiffre en couleur — idée transposable à toute annonce d'événement daté
Extraire l'accent couleur graphique directement de la photo plutôt que choisir une couleur arbitraire
Titre à mix de styles typographiques pour dynamiser un texte très court

## 16. Éléments à éviter
Empiler trop de blocs textuels avant d'arriver à l'élément visuel principal (photo/calendrier)

## 17. Recommandations pour le projet
Le principe "calendrier avec date mise en évidence" est transposable à toute annonce d'événement
daté à l'avance (lancement produit, ouverture, échéance) — pas propre au mariage.
Extraire systématiquement l'accent couleur d'une photo hero plutôt que choisir arbitrairement,
technique simple pour garantir la cohérence visuelle.

## 18. Cahier des charges final
Stack suggérée si décliné en digital interactif : composant calendrier HTML/CSS généré
dynamiquement (pas une image figée), date événement injectée par variable plutôt que codée en dur.
Reste 100% original — noms des mariés, date réelle et texte exact jamais repris.
