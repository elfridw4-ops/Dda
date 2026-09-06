# DESIGN REFERENCE — Jason Martin (portfolio Graphic Designer)
Type input : IMAGE STATIQUE (3 sections empilées : hero, about, resume)
Domaine observé : Portfolio personnel graphic design — usage NON restreint à ce domaine
Niveau confiance global : ≈ 55% FAIT / 40% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (3 blocs visibles)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, langue, marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : Jason Martin — Graphic Designer [FAIT]
Domaine d'application observé : portfolio personnel design graphique — tag informatif seulement
Source : capture fournie par l'utilisateur [FAIT]
Type : Portfolio [FAIT]
Objectif supposé : vitrine professionnelle + prise de contact [HYPOTHÈSE]
Public cible : recruteurs/clients cherchant un graphiste freelance [HYPOTHÈSE]
Durée vidéo : non applicable (image statique)

## 2. Structure générale
**Bloc 1 (hero)** : photo grand format d'un poste de travail (écran, laptop, lampe), nom + métier
superposés en bas-gauche, nav horizontale en haut, rangée d'icônes réseaux sociaux en bas,
2 boutons pilule ("voir CV" / "voir portfolio"), icône plein écran en coin [FAIT]
**Bloc 2 (à propos)** : email + adresse à gauche, paragraphe bio, portrait N&B à droite [FAIT]
**Bloc 3 (CV/compétences)** : 3 colonnes — compétences logicielles (curseurs), expérience
(timeline verticale avec dates), "ce que je sais faire" (liste à puces) ; puis langues (curseurs),
compétences de design (liste), compétences personnelles, centres d'intérêt (icônes), formation [FAIT]
Fond uniforme sombre sur les 3 blocs, structure en sections empilées type one-page [FAIT]
Ordre de lecture : identité/photo → contact/bio → détail compétences/parcours [FAIT]

## 3. Palette graphique
Fond dominant bleu-nuit très sombre, ≈ #12151C [HYPOTHÈSE — pas de sampling pixel possible]
Accent bleu cyan pour les liens actifs et éléments interactifs, ≈ #2FA8D8 [HYPOTHÈSE]
Texte principal blanc, texte secondaire gris clair [FAIT]
Principe retenu (pas les valeurs) : fond sombre neutre unique + un seul accent froid saturé pour
le repérage interactif — ce ratio est réutilisable, PAS les HEX exacts (voir règle Section 3
de Agents_Design_Reference.md : palette jamais copiée telle quelle d'un projet à l'autre)

## 4. Typographie
Nom : sans-serif bold, grande taille, blanc [FAIT]
Titres de section ("ABOUT", nom de compétence) : sans-serif medium à bold, accent bleu pour les
éléments actifs de nav [FAIT]
Corps de texte : sans-serif regular, gris clair, taille modeste [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Nav top texte simple** — item actif souligné/coloré en bleu, reste en blanc [FAIT], hover non observable
**Icônes réseaux sociaux** — alignées horizontalement, style outline simple, bas du hero [FAIT]
**Curseurs de compétence** — ligne fine + point plein positionné selon niveau, plutôt qu'une barre remplie classique [FAIT]
**Timeline expérience** — ligne verticale + points, années à gauche, poste/entreprise à droite [FAIT]
**Icônes centres d'intérêt** — pictogrammes ronds en grille, légende sous chacun [FAIT]
**Bouton plein écran** — icône coin, probablement bascule d'affichage responsive/preview [HYPOTHÈSE]
États hover/clic/disabled : non observables sur image statique

## 5bis. Grille de positionnement — verrouillage adapté

```
ÉLÉMENT : NOM + MÉTIER (hero, sur photo poste de travail)
Zone      → BOT-LEFT
X%        → ≈6% [HYPOTHÈSE]
Y%        → ≈68% [HYPOTHÈSE]
W%        → ≈35% [HYPOTHÈSE]
H%        → ≈15% [HYPOTHÈSE]

ÉLÉMENT : TIMELINE EXPÉRIENCE (bloc 3, colonne centrale)
Zone      → CENTER de la colonne
X%        → ≈35% [HYPOTHÈSE]
Y%        → ≈10% [HYPOTHÈSE]
W%        → ≈30% [HYPOTHÈSE]
H%        → ≈70% [HYPOTHÈSE]
Alignement → ligne verticale alignée à gauche de la colonne, points alignés sur cette ligne

ÉLÉMENT : PORTRAIT N&B (bloc 2, à propos)
Zone      → MID-RIGHT
X%        → ≈55% [HYPOTHÈSE]
Y%        → ≈10% [HYPOTHÈSE]
W%        → ≈40% [HYPOTHÈSE]
H%        → ≈80% [HYPOTHÈSE]
```

## 5ter. Pile de calques — verrouillage adapté

```
PILE DE CALQUES — Hero (poste de travail)
N° │ NOM DU CALQUE          │ MODE APPARENT │ OPACITÉ EST. │ TAG
───┼─────────────────────────┼───────────────┼──────────────┼──────
 3 │ Nom + métier (texte)    │ Normal        │ 100%         │ FAIT
 2 │ Léger overlay sombre bas│ Multiply (apparent) │ ≈20-30% │ HYPOTHÈSE
 1 │ Photo poste de travail  │ Normal        │ 100%         │ FAIT
```
Pas de superposition complexe détectée sur les blocs 2 et 3 (about/resume) — éléments juxtaposés
côte à côte plutôt qu'empilés, donc pile de calques non pertinente pour ces 2 blocs.

## 6. Animations
NON APPLICABLE — input image statique, aucune animation observable.

## 7. Chronologie
NON APPLICABLE — input image statique, aucune animation observable.

## 8. Interactions
Hover/clic/focus clavier : non observables
Structure one-page à sections (Home/About/Resume/Portfolio) suggère nav par ancre [HYPOTHÈSE]
Icône plein écran suggère un mode de prévisualisation/présentation [HYPOTHÈSE]

## 9. Effets visuels
Portrait bloc 2 traité en noir et blanc, contrastant avec le reste en couleur [FAIT]
Aucun glassmorphism/blur/glow détecté avec certitude [NON OBSERVÉ]

## 10. Responsive
Un seul breakpoint fourni (desktop) → comportement tablette/mobile non observable.

## 11. Accessibilité
Contraste texte gris clair sur fond très sombre : à vérifier avec un outil, potentiellement limite
pour le corps de texte [HYPOTHÈSE]
Curseurs de compétence : lisibilité de la valeur exacte pas évidente sans légende chiffrée visible [FAIT]
Navigation clavier / focus visible : non observable

## 12. Technologies probables
Framework : non confirmé, structure one-page classique compatible HTML/CSS ou React [HYPOTHÈSE]
Icônes : icon font ou SVG set uniforme (style outline) [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Timeline d'expérience verticale claire, lecture chronologique immédiate.
Curseurs de compétence/langue plus originaux qu'une simple barre de progression pleine.
Organisation en 3 colonnes du bloc CV = beaucoup d'info dense mais bien cadrée par colonne.

## 14. Défauts observés
Bloc 3 très dense (6 sous-blocs d'info dans 3 colonnes) — hiérarchie visuelle entre les sous-blocs
peu marquée, tout a un poids visuel similaire [FAIT]
Curseurs de compétence sans valeur chiffrée visible = ambiguïté sur le niveau exact représenté [FAIT]

## 15. Éléments à réutiliser
Timeline verticale pour un historique/parcours
Curseur ligne+point pour représenter un niveau, alternative à la barre remplie classique

## 16. Éléments à éviter
Densifier un seul bloc avec 6 catégories d'information sans hiérarchie de poids visuel entre elles

## 17. Recommandations pour le projet
Reprendre la timeline verticale si le projet a un vrai historique chronologique à présenter.
Si les curseurs de niveau sont repris, ajouter une valeur chiffrée ou un libellé (déjà bon/en cours/expert)
pour lever l'ambiguïté observée en Section 14.
Répartir un bloc dense en sous-sections avec plus de hiérarchie (tailles, poids) si beaucoup
d'informations doivent cohabiter.

## 18. Cahier des charges final
Stack suggérée : React + Tailwind, timeline en flex/grid avec ligne CSS + points positionnés,
curseurs de compétence en input range stylé ou SVG custom avec valeur affichée au survol/focus.
Reste 100% original — palette et structure de section à dériver du sujet réel du nouveau projet,
jamais recopiées telles quelles depuis cette référence.
