# DESIGN REFERENCE — African Journey (forêt, split-screen, titre superposé)
Type input : IMAGE STATIQUE
Domaine observé : Voyage/tourisme nature — usage NON restreint à ce domaine
Niveau confiance global : ≈55% FAIT / 40% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero unique)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'un site voyage centré sur des excursions en forêt africaine [FAIT]
Type : landing page voyage, composition hero en split-screen (2 zones distinctes) [FAIT]
Objectif supposé : donner envie de découvrir une offre de voyage nature/forêt [HYPOTHÈSE]
Public cible : voyageurs intéressés par l'écotourisme/la nature [HYPOTHÈSE]

## 2. Structure générale
Split-screen vertical : zone gauche sombre/désaturée (fond flouté avec logo + accroche + CTA),
zone droite photo nette de canopée forestière avec nav intégrée [FAIT]
Logo "AFRICAN JOURNEY" + feuille décorative en haut-gauche, nav (Home/About/Services/Programs/FAQ)
alignée à droite au-dessus de la photo [FAIT]
Titre massif "AFRICAN FOREST" qui chevauche la limite entre les 2 zones du split-screen — le mot
"AFRI" reste dans la zone sombre à gauche, "CAN" (fin du 1er mot) déborde sur la photo à droite,
créant un jeu de mots visuel avec le nom de marque "AFRICAN" [FAIT]
Texte descriptif + lien "Learn more" en bas-gauche [FAIT]
Flèches de navigation (précédent/suivant) en bas-droite, indicateurs de progression verticaux à
droite du cadre [FAIT]
Ordre de lecture : logo → nav → titre (jeu de mot visuel) → description → CTA → navigation carousel [FAIT]

## 3. Palette graphique
Zone gauche : vert très sombre/noir désaturé, flouté [FAIT]
Zone droite : vert forêt naturel et lumineux (photo nette de la canopée) [FAIT]
Titre : blanc pur qui chevauche les 2 zones, lisible sur les 2 fonds différents [FAIT]
Logo : vert clair pour la feuille décorative, blanc pour le texte de marque [FAIT]
Principe à retenir : split-screen sombre/lumineux de la MÊME famille de couleur (vert), pas un
contraste de teintes opposées — cohérence par la nuance plutôt que par la rupture chromatique
(voir Agents_Bibliotheque_Palettes.md familles vertes sombres, ex. Collines & Ombre, Mousse
Électrique, jamais recopier tel quel).

## 4. Typographie
Titre "AFRICAN FOREST" : sans-serif très condensée et grasse, majuscules, 2 mots empilés qui
jouent sur la troncature du nom de marque ("AFRI"+"CAN"="AFRICAN") — technique de jeu de mot
typographique entre le titre et le logo [FAIT]
Nav : sans-serif regular, petite taille, majuscules [FAIT]
Texte descriptif : sans-serif italique fine, ton éditorial [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Split-screen à 2 zones de netteté différente** — flou à gauche (contexte/texte) vs net à droite
(sujet photo), technique qui hiérarchise visuellement sans séparateur graphique dur [FAIT]
**Titre à jeu de mot visuel avec le nom de marque** — le titre du hero reprend et prolonge le nom
de la marque elle-même ("AFRICAN" → "AFRI" + "CAN" du forest), lien texte/marque très fort [FAIT]
**Indicateurs de progression verticaux (losanges)** — alternative aux points ronds classiques,
signature graphique discrète [FAIT]
**Lien "Learn more" simple souligné** — pas de bouton plein [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : SPLIT-SCREEN (limite flou/net)
Zone → verticale, coupe le cadre en 2
X% → ≈38% (position de la limite) [HYPOTHÈSE]

ÉLÉMENT : TITRE "AFRICAN FOREST" (chevauche la limite)
Zone → MID-CENTER
X% → ≈10% | Y% → ≈35% | W% → ≈55% | H% → ≈25% [HYPOTHÈSE]
Alignement → chevauche intentionnellement la limite floue/nette du split-screen

ÉLÉMENT : NAV + LOGO
Zone → TOP, pleine largeur
X% → 0% | Y% → 0% | W% → 100% | H% → ≈10% [HYPOTHÈSE]

ÉLÉMENT : INDICATEURS PROGRESSION (losanges)
Zone → MID-RIGHT
X% → ≈92% | Y% → ≈35% | W% → ≈4% | H% → ≈20% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ EST. │ TAG
 3 │ Texte + logo + nav + indicateurs│ Normal │ 100%         │ FAIT
 2 │ Photo canopée nette (zone droite)│Normal │ 100%         │ FAIT
 1 │ Fond flouté sombre (zone gauche) │ Normal │ 100%         │ FAIT
```
Note : le calque 2 et le calque 1 sont probablement la MÊME photo, l'un flouté/assombri, l'autre
net — traitement différencié d'une seule image plutôt que 2 images distinctes [HYPOTHÈSE].

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Flèches + indicateurs verticaux suggèrent un carousel hero à
plusieurs slides [HYPOTHÈSE].

## 9. Effets visuels
Flou net appliqué uniquement à la zone gauche du split-screen (probablement la même photo que la
droite, dépth of field simulé ou vraie photo floutée en post-prod) [HYPOTHÈSE]
Assombrissement supplémentaire de la zone gauche pour la lisibilité du texte [FAIT]
Aucun glow/glassmorphism détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable. Le split-screen horizontal
est un pattern qui pose typiquement question en mobile (empilement vertical probable) [HYPOTHÈSE].

## 11. Accessibilité
Contraste titre blanc sur la zone sombre floutée : bon [FAIT]
Contraste titre blanc sur la zone photo nette (partie "CAN") : à vérifier selon la luminosité
locale de la canopée à cet endroit précis [HYPOTHÈSE]
Lien "Learn more" en texte simple : cible tactile à vérifier [HYPOTHÈSE]

## 12. Technologies probables
Composition Photoshop/Canva, une seule photo source dédoublée avec traitement différencié
(flou+assombrissement à gauche, net à droite) [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le jeu de mot typographique qui prolonge le nom de la marque dans le titre du hero ("AFRICAN" →
"AFRI"+"CAN" du mot Forest) crée un lien mémorable entre identité de marque et contenu, plus fort
qu'un titre et un logo traités comme deux éléments complètement séparés.
Le split-screen flou/net de la MÊME famille de couleur (pas un contraste de teintes) crée une
hiérarchie douce sans séparateur graphique dur (ligne, bordure).
Les indicateurs de progression en losanges plutôt qu'en points ronds classiques est un détail de
signature qui distingue le carousel d'un pattern totalement générique.

## 14. Défauts observés
Le jeu de mot typographique, bien que créatif, dépend entièrement du nom de marque exact — non
transposable tel quel à un autre projet sans un nom qui se prête à la même mécanique [FAIT]
Lisibilité du titre sur la partie photo nette (zone la plus lumineuse) à vérifier avant validation
[HYPOTHÈSE]

## 15. Éléments à réutiliser
Split-screen flou/net de la même famille de couleur pour hiérarchiser sans séparateur graphique dur
Indicateurs de progression en forme distinctive (losange, ou autre forme signature) plutôt que des
points ronds génériques
Principe du jeu de mot titre/marque — À ADAPTER, jamais copier la mécanique exacte, mais le
PRINCIPE (chercher un lien textuel entre nom de marque et titre de contenu) reste transposable si
le nom du projet réel s'y prête

## 16. Éléments à éviter
Forcer un jeu de mot typographique sur un nom de marque qui ne s'y prête pas naturellement —
mieux vaut l'écarter que de le forcer artificiellement

## 17. Recommandations pour le projet
Le principe "split-screen flou/net même famille de couleur" est transposable à toute page qui veut
une hiérarchie douce contexte/sujet sans bordure dure.
Vérifier si le nom du projet réel permet un jeu de mot typographique naturel avant de forcer cette
technique — sinon, l'écarter plutôt que la reproduire artificiellement.

## 18. Cahier des charges final
Stack suggérée si web : une seule image de fond dédoublée en CSS (filter: blur() sur la copie de
gauche, nette à droite), titre en position absolue qui chevauche intentionnellement la limite des
2 zones, indicateurs de progression en SVG custom (losanges) plutôt qu'une lib générique par défaut.
Reste 100% original — nom de marque, logo et texte exact jamais repris.
