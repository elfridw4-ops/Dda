# DESIGN REFERENCE — Promo Saisonnière Immobilier (World Picnic Day)
Type input : IMAGE STATIQUE
Domaine observé : Immobilier / marketing saisonnier (journée thématique) — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait story ~9:16)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : post réseaux sociaux célébrant une journée thématique internationale, publié par une marque
immobilière [FAIT]
Type : post Instagram/story format vertical plein cadre photo [FAIT]
Objectif supposé : engagement/branding — la marque s'associe à une journée thématique populaire
pour rester présente sans vendre directement un bien [HYPOTHÈSE]
Public cible : audience grand public de la marque sur réseaux sociaux [HYPOTHÈSE]

## 2. Structure générale
Photo plein cadre (pelouse vue du dessus) comme fond unique, pas de bloc de couleur séparé [FAIT]
Logo petit, centré, en haut — signature discrète, pas dominante [FAIT]
Titre en 2 parties empilées au centre : mot du haut en aplat blanc plein, mot du bas en texture
"papier déchiqueté/confettis" — rupture de traitement entre les 2 mots du même titre [FAIT]
Sous-titre en script cursif, aligné à droite du second mot, plus petit [FAIT]
Composition photo (plateaux de nourriture + tissu vichy) uniquement dans les 2 coins bas,
diagonale gauche→droite, laissant le centre-haut dégagé pour le texte [FAIT]

## 3. Palette graphique
Fond : vert gazon saturé, texture organique naturelle (photo, pas un aplat) [FAIT]
Texte titre : blanc pur, aucun accent couleur additionnel dans le texte [FAIT]
Logo : blanc, monochrome [FAIT]
Nourriture/tissu (bas de cadre) : palette chaude naturelle (rouge vichy, doré friture, vert
garniture) qui contraste avec le fond vert dominant [FAIT]
Principe à retenir : un fond-texture unique (photo) fait toute la couleur de base, le texte reste
blanc pur sans accent — la richesse vient de la photo produit en bas, pas de la palette graphique.

## 4. Typographie
Mot du haut ("WORLD") : sans-serif condensée, majuscules, légère texture/grain sur les contours
(pas un aplat parfaitement lisse) [FAIT]
Mot du bas ("PICNIC") : même famille structurelle mais remplie d'une texture "papier déchiqueté"
dense — rupture de traitement visuel entre les 2 mots du même titre, technique de composition à
retenir [FAIT]
Sous-titre : script cursif fin, minuscules, très différent du titre (registre calligraphique) [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Logo centré haut** — mini bloc icône + nom de marque + baseline, taille volontairement petite [FAIT]
**Titre à texture mixte** — un mot en aplat plein, l'autre en texture déchirée — signature visuelle
du post [FAIT]
**Photo produit diagonale** — plusieurs éléments (plats, panier, verre, tissu) répartis en 2 zones
opposées bas-gauche/bas-droite, pas une seule photo bloc mais une composition éclatée [FAIT]
Aucun CTA, aucun bouton — post pur branding sans action attendue [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : LOGO
Zone → TOP-CENTER
X% → ≈40% | Y% → ≈8% | W% → ≈20% | H% → ≈6% [HYPOTHÈSE]

ÉLÉMENT : TITRE (2 mots empilés)
Zone → CENTER, légèrement haut
X% → ≈20% | Y% → ≈32% | W% → ≈65% | H% → ≈22% [HYPOTHÈSE]

ÉLÉMENT : SOUS-TITRE SCRIPT
Zone → MID-RIGHT (juste sous le titre)
X% → ≈48% | Y% → ≈54% | W% → ≈25% | H% → ≈8% [HYPOTHÈSE]

ÉLÉMENT : COMPOSITION NOURRITURE BAS-GAUCHE
Zone → BOT-LEFT
X% → 0% | Y% → ≈70% | W% → ≈55% | H% → ≈30% [HYPOTHÈSE]

ÉLÉMENT : COMPOSITION NOURRITURE BAS-DROITE
Zone → BOT-RIGHT
X% → ≈55% | Y% → ≈68% | W% → ≈45% | H% → ≈32% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                        │ MODE   │ OPACITÉ │ TAG
 4 │ Texte titre + sous-titre       │ Normal │ 100%    │ FAIT
 3 │ Logo                           │ Normal │ 100%    │ FAIT
 2 │ Photos nourriture (2 groupes)  │ Normal │ 100%    │ FAIT
 1 │ Photo gazon plein cadre (fond) │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — post statique sans élément interactif visible.

## 9. Effets visuels
Texture "papier déchiqueté/confettis blancs" en remplissage du second mot du titre — effet de
texture textuelle plutôt qu'un aplat, technique réutilisable pour casser la monotonie d'un titre
2 mots [FAIT]
Aucun glow, blur ou glassmorphism — traitement photo brut + texte [FAIT]

## 10. Responsive
Un seul format fourni (story verticale) → comportement autre ratio non observable.

## 11. Accessibilité
Contraste blanc sur vert gazon foncé : bon pour le mot en aplat [FAIT]
Contraste du mot en texture déchiquetée : plus faible, la texture blanche sur fond clair de gazon
en haut de l'image pourrait réduire la lisibilité à certains endroits [HYPOTHÈSE]

## 12. Technologies probables
Composition Photoshop/Canva à partir de photos stock + texte vectoriel [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La rupture de traitement entre les 2 mots du titre (aplat vs texture) est une idée simple et forte,
plus mémorable qu'un titre entièrement uniforme.
La photo plein cadre comme unique "fond coloré" évite tout artifice graphique superflu — le sujet
réel (gazon, pique-nique) porte toute l'ambiance.
Composition diagonale des éléments produit en bas laisse un vrai espace de respiration au centre
pour le texte, sans donner l'impression de manque.

## 14. Défauts observés
Le sous-titre script est petit et pourrait passer inaperçu sur un scroll rapide mobile [HYPOTHÈSE]
Aucun élément qui identifie clairement le lien entre "picnic" et le métier réel de la marque
(immobilier) — association thématique un peu flottante si on ne connaît pas déjà la marque [FAIT]

## 15. Éléments à réutiliser
Rupture de traitement typographique entre 2 mots d'un même titre (aplat/texture) comme signature
Photo plein cadre en fond + logo minimal comme seule signature de marque, sans bandeau/cartouche
Composition produit répartie en 2 zones opposées plutôt qu'un seul bloc centré

## 16. Éléments à éviter
Laisser un sous-titre trop petit sans le renforcer si l'info est importante à transmettre
Associer une thématique (journée internationale) au métier réel sans lien visuel/textuel explicite

## 17. Recommandations pour le projet
Le principe photo-plein-cadre + titre à texture mixte est transposable à toute marque qui publie
du contenu de "moment/journée thématique" (food, tech, santé...) — pas propre à l'immobilier.
Si le lien métier doit être plus clair : ajouter une ligne de texte reliant le thème au service réel.

## 18. Cahier des charges final
Stack suggérée si web : image de fond CSS + masque de texture SVG (bruit/confettis) appliqué en
clip sur le second mot du titre pour reproduire l'effet déchiqueté sans image bitmap figée.
Reste 100% original — nom de marque, logo et texte exact jamais repris.
