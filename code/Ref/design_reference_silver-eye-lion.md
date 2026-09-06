# DESIGN REFERENCE — Silver Eye (portrait lion, storytelling documentaire)
Type input : IMAGE STATIQUE
Domaine observé : Média/documentaire animalier — usage NON restreint à ce domaine
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero desktop complet)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'un site/média présentant une série documentaire animalière centrée sur un lion [FAIT]
Type : landing page storytelling, portrait animalier en gros plan [FAIT]
Objectif supposé : engager l'audience dans une narration épisodique ("The Beginning", épisode
1/04 visible) plutôt qu'un simple article statique [FAIT]
Public cible : audience grand public intéressée par le contenu documentaire/nature [HYPOTHÈSE]

## 2. Structure générale
Fond noir uni sur toute la largeur, réseaux sociaux (Twitter/Facebook/Instagram) empilés
verticalement à gauche, logo couronne en haut à gauche, sélecteur de langue + menu hamburger en
haut à droite [FAIT]
Portrait de lion en gros plan centré-gauche, cadré serré sur le visage, occupe une large part de
la composition [FAIT]
Bloc texte à droite : mention "THE KING" en petit, titre "Silver Eye" énorme sur 2 lignes,
paragraphe descriptif, lien "Read the full story" souligné [FAIT]
Bas de cadre : vignette épisode précédent ("The Beginning") en bas-gauche avec bouton play,
compteur "01/04" + flèches navigation en bas-droite [FAIT]
Ordre de lecture : logo → portrait → titre → description → CTA lecture → navigation épisodes [FAIT]

## 3. Palette graphique
Fond : noir profond quasi total [FAIT]
Portrait : tons naturels du pelage (brun/doré), un œil du lion bleu vif contrastant avec l'autre
œil doré — élément visuel qui justifie le nom "Silver Eye" [FAIT]
Texte : blanc pur pour le titre, gris clair pour le corps de texte [FAIT]
Vignette bas-gauche : overlay sombre semi-transparent sur la photo miniature [FAIT]
Principe à retenir : fond noir total qui laisse toute la place au sujet photographique réel (le
lion) comme unique source de couleur — aucun accent graphique ajouté, la richesse vient de la
photo elle-même, pas d'un accent couleur de marque (voir Agents_Bibliotheque_Palettes.md famille
Brume & Noir / Mur de Pierre Noire pour un registre neutre proche).

## 4. Typographie
Titre "Silver Eye" : serif classique, très grande taille, blanc, 2 lignes courtes [FAIT]
Mention "THE KING" : sans-serif fine, majuscules, letter-spacing large, petite taille [FAIT]
Paragraphe descriptif : sans-serif regular, gris clair, taille standard, texte lorem ipsum
visible (contenu non finalisé) [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Réseaux sociaux verticaux latéraux** — texte pivoté 90°, alignés à gauche du cadre, discret mais
identifiable [FAIT]
**Navigation d'épisodes en bas de cadre** — vignette + compteur + flèches, pattern de carousel
narratif plutôt qu'un simple slider d'images génériques [FAIT]
**Lien souligné "Read the full story"** — pas un bouton plein, juste un soulignement fin sous le
texte, CTA discret cohérent avec le ton éditorial sombre [FAIT]
États hover/clic : non observable sur image statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : PORTRAIT LION
Zone → MID-LEFT à MID-CENTER
X% → ≈8% | Y% → ≈8% | W% → ≈45% | H% → ≈75% [HYPOTHÈSE]

ÉLÉMENT : BLOC TITRE + DESCRIPTION
Zone → MID-RIGHT
X% → ≈58% | Y% → ≈15% | W% → ≈36% | H% → ≈45% [HYPOTHÈSE]

ÉLÉMENT : VIGNETTE ÉPISODE PRÉCÉDENT
Zone → BOT-LEFT
X% → 0% | Y% → ≈82% | W% → ≈22% | H% → ≈18% [HYPOTHÈSE]

ÉLÉMENT : NAVIGATION ÉPISODES (compteur + flèches)
Zone → BOT-RIGHT
X% → ≈78% | Y% → ≈88% | W% → ≈20% | H% → ≈10% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                        │ MODE   │ OPACITÉ │ TAG
 3 │ Nav + texte + vignette + compteur│Normal│ 100%    │ FAIT
 2 │ Portrait lion (sujet)          │ Normal │ 100%    │ FAIT
 1 │ Fond noir uni                  │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Le bouton play + compteur épisode suggèrent une navigation par
clic entre épisodes d'une série [HYPOTHÈSE].

## 9. Effets visuels
Aucun effet numérique détecté (pas de gradient, blur, glow) — tout repose sur la qualité de la
photo et le fond noir [FAIT]
Contraste très marqué entre le portrait détaillé et le fond noir plat, technique d'isolement du
sujet plutôt qu'un traitement graphique ajouté [FAIT]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable.

## 11. Accessibilité
Contraste titre blanc sur noir : excellent [FAIT]
Contraste réseaux sociaux latéraux (texte fin pivoté) : à vérifier, taille très réduite [HYPOTHÈSE]
Le contenu paragraphe est du texte de remplissage (lorem ipsum) — signe que le contenu réel n'est
pas finalisé sur cette maquette [FAIT]

## 12. Technologies probables
Composition probable en HTML/CSS + une lib de carousel pour la navigation d'épisodes (type
Swiper.js), photo réelle professionnelle [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Traiter un sujet documentaire comme une série narrative avec compteur d'épisodes et vignette de
l'épisode précédent transforme un simple article en expérience feuilletonesque, incite au retour.
Le fond noir total qui laisse toute la photo du sujet porter la richesse visuelle est un choix
radical mais efficace — aucune distraction graphique face à un sujet naturellement fort.
Le CTA discret (lien souligné, pas un bouton plein) respecte le ton éditorial sobre sans casser
l'ambiance avec un élément trop "marketing".

## 14. Défauts observés
Contenu de remplissage (lorem ipsum) laissé visible dans la maquette — signe de travail non
finalisé, à ne jamais livrer tel quel en production [FAIT]
Réseaux sociaux latéraux très discrets, risque de sous-découvrabilité [HYPOTHÈSE]

## 15. Éléments à réutiliser
Traitement d'un contenu en série narrative (compteur épisode + vignette précédent) plutôt qu'un
article isolé — applicable à tout contenu récurrent (podcast, série vidéo, étude de cas multi-parties)
Fond noir total qui laisse le sujet photo porter toute la richesse visuelle sans accent graphique ajouté
CTA discret en lien souligné plutôt qu'un bouton plein, cohérent avec un ton éditorial sobre

## 16. Éléments à éviter
Livrer une maquette avec du texte de remplissage (lorem ipsum) visible sans l'avoir remplacé
Réseaux sociaux ou éléments secondaires trop discrets au point de nuire à leur découvrabilité

## 17. Recommandations pour le projet
Le principe "compteur épisode + vignette précédent" est transposable à tout contenu qui a une
vraie logique de série (pas juste pour créer un effet artificiel de série sur du contenu isolé).
Remplacer systématiquement tout texte lorem par du vrai copywriting avant toute livraison
(cohérent avec Agents_Design_Reference.md Section 5 rappel anti-lorem).

## 18. Cahier des charges final
Stack suggérée si web : hero avec image plein cadre + composant carousel narratif (vignette +
compteur + flèches) réutilisable pour toute série de contenu, lien CTA en simple underline stylé.
Reste 100% original — nom de marque, logo et texte exact jamais repris.
