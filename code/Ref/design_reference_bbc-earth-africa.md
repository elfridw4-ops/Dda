# DESIGN REFERENCE — BBC Earth "Africa" (hero série documentaire)
Type input : IMAGE STATIQUE
Domaine observé : Média/streaming documentaire — usage NON restreint à ce domaine
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero desktop)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque/chaîne, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'une page dédiée à une série documentaire animalière sur l'Afrique, chaîne de
diffusion publique (nom non reproduit) [FAIT]
Type : landing page média/streaming, hero plein cadre [FAIT]
Objectif supposé : présenter un épisode/une saison et inciter à regarder la bande-annonce [FAIT]
Public cible : audience grand public intéressée par le documentaire nature [HYPOTHÈSE]

## 2. Structure générale
Nav horizontale transparente sur photo : menu hamburger + liens à gauche, logo chaîne centré,
icônes réseaux sociaux à droite [FAIT]
Photo plein cadre : troupeau d'éléphants traversant une savane sous un ciel orageux [FAIT]
Sur-titre discret ("Seven Worlds One Planet") au-dessus du titre principal massif ("AFRICA") [FAIT]
Sous le titre : phrase d'accroche courte à gauche, bouton "Watch Trailer" au centre-bas,
navigation entre épisodes/régions (flèches + libellés) à droite [FAIT]
Ordre de lecture : nav → sur-titre → titre → accroche → CTA → navigation contenu suivant [FAIT]

## 3. Palette graphique
Photo : tons naturels du paysage africain (brun terre, gris ciel orageux, silhouettes sombres des
éléphants) [FAIT]
Titre + texte : blanc pur, aucun accent couleur ajouté [FAIT]
Bouton CTA : contour blanc fin, fond transparent — cohérent avec la sobriété du reste [FAIT]
Principe à retenir : aucune couleur ajoutée au graphisme — la photo du sujet réel porte toute la
richesse chromatique, texte blanc pur en overlay, technique proche de plusieurs autres refs de la
bibliothèque (voir design_reference_silver-eye-lion.md, même logique de sobriété graphique face à
un sujet photographique fort).

## 4. Typographie
Titre principal ("AFRICA") : sans-serif condensée très grasse, majuscules, occupe une large
portion de la largeur du cadre [FAIT]
Sur-titre ("Seven Worlds One Planet") : sans-serif fine, majuscules, letter-spacing large,
contraste de graisse volontaire avec le titre massif dessous [FAIT]
Logo chaîne + nav : sans-serif condensée, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Nav transparente centrée logo** — logo au centre plutôt qu'à gauche, pattern distinct d'autres
refs de la bibliothèque qui placent systématiquement le logo à gauche [FAIT]
**Bouton "Watch Trailer" contour** — pas de fond plein, cohérent avec la sobriété générale, CTA
clair malgré l'absence de couleur d'accent [FAIT]
**Navigation région/épisode suivant en bas-droite** — flèches + libellés (Africa/Australia
observés), suggère un système de navigation entre plusieurs contenus de la même série [FAIT]
États hover/clic : non observable sur image statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : SUR-TITRE + TITRE PRINCIPAL
Zone → TOP-CENTER à MID-CENTER
X% → ≈10% | Y% → ≈32% | W% → ≈80% | H% → ≈25% [HYPOTHÈSE]

ÉLÉMENT : BOUTON WATCH TRAILER
Zone → BOT-CENTER
X% → ≈40% | Y% → ≈82% | W% → ≈20% | H% → ≈6% [HYPOTHÈSE]

ÉLÉMENT : NAVIGATION RÉGION/ÉPISODE SUIVANT
Zone → BOT-RIGHT
X% → ≈70% | Y% → ≈84% | W% → ≈28% | H% → ≈8% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                        │ MODE     │ OPACITÉ EST. │ TAG
 3 │ Nav + titre + CTA + navigation │ Normal   │ 100%         │ FAIT
 2 │ Overlay léger (assombrissement)│ Multiply │ ≈20-30%      │ HYPOTHÈSE
 1 │ Photo éléphants savane (fond)  │ Normal   │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Navigation région/épisode suggère un carousel ou une liste de
contenus liés cliquable [HYPOTHÈSE].

## 9. Effets visuels
Léger overlay pour assurer la lisibilité du texte blanc sur la photo, sans assombrissement lourd
(le ciel orageux naturel de la photo fait déjà une bonne partie du travail de contraste) [FAIT]
Aucun glow/blur/glassmorphism détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable.

## 11. Accessibilité
Contraste titre blanc sur ciel orageux gris : bon [FAIT]
Contraste sur-titre fin sur zone de ciel plus claire : à vérifier, potentiellement plus fragile
[HYPOTHÈSE]
Bouton contour (pas de fond plein) : cible tactile à vérifier, moins évidente qu'un bouton plein
[HYPOTHÈSE]

## 12. Technologies probables
Plateforme média probablement propriétaire (CMS interne de la chaîne), pas un template générique
[HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La photo plein cadre du sujet réel (éléphants, paysage) porte toute la force émotionnelle sans
qu'aucun graphisme ajouté ne soit nécessaire — confiance totale dans le contenu photographique.
Le sur-titre fin qui contraste avec le titre massif crée une hiérarchie de lecture immédiate
(contexte de la série → nom de l'épisode) en 2 lignes seulement.
La navigation région/épisode intégrée directement dans le hero (pas reléguée à une page séparée)
facilite l'exploration du reste de la série sans quitter l'écran.

## 14. Défauts observés
Nav avec logo centré peut réduire l'espace disponible pour les liens de navigation à gauche sur
un écran plus étroit [HYPOTHÈSE]
Aucune indication de durée d'épisode ou de progression visible dans ce hero [FAIT sur l'absence]

## 15. Éléments à réutiliser
Sur-titre fin + titre massif comme hiérarchie de lecture en 2 temps, contexte puis sujet précis
Navigation vers le contenu suivant intégrée directement dans le hero plutôt que reléguée ailleurs
Confiance dans la photo du sujet réel comme unique porteur de richesse visuelle, sans accent
graphique ajouté

## 16. Éléments à éviter
Centrer le logo dans une nav qui a par ailleurs des liens de navigation actifs à gérer — risque de
contrainte d'espace sur écran étroit

## 17. Recommandations pour le projet
Le principe "sur-titre contexte + titre massif sujet" est transposable à toute page qui présente
un contenu au sein d'une série/collection plus large (article dans une catégorie, produit dans une
collection) — pas propre au documentaire.
Vérifier l'espace nav disponible avant de centrer un logo si la nav a des liens actifs des 2 côtés.

## 18. Cahier des charges final
Stack suggérée si web : hero image de fond + overlay CSS léger, nav flex avec logo en position
absolue centrée (attention aux collisions avec les liens sur petit écran), CTA en bouton contour
(border + transparent background).
Reste 100% original — nom de chaîne, logo et texte exact jamais repris.
