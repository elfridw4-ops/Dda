# DESIGN REFERENCE — Flyer Étude Biblique (temple grec doré, série numérotée)
Type input : IMAGE STATIQUE
Domaine observé : Église / club d'étude biblique — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait ~4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : flyer d'annonce du 1er épisode d'une série d'étude biblique thématique (numérotée "I"),
club d'étude biblique au sein d'une organisation religieuse (nom non reproduit) [FAIT]
Type : flyer réseaux sociaux, illustration composite photoréaliste/rendu 3D [FAIT]
Objectif supposé : lancer une série récurrente avec une identité visuelle forte et un vrai
compte à rebours pour créer l'urgence [HYPOTHÈSE]
Public cible : membres/prospects d'une communauté religieuse, probablement audience habituée aux
codes visuels "cinématographiques" (comparaison possible à une affiche de film) [HYPOTHÈSE]

## 2. Structure générale
En-tête centré : logo + nom d'organisation, sous-titre "présente" [FAIT]
Titre principal en très grand lettrage 3D doré biseauté, occupant la place centrale dominante,
sous-titre descriptif juste en dessous en blanc discret [FAIT]
Élément architectural (temple à colonnades) posé sur un îlot rocheux flottant, entouré de nuages
denses, sert de socle visuel au numéro d'épisode ("I") superposé en bas du temple [FAIT]
Bloc horaire (format compte à rebours HH.MM.SS) puis date, empilés en bas, alignés à gauche [FAIT]
Ordre de lecture : organisation → titre série → numéro épisode → quand [FAIT]

## 3. Palette graphique
Fond : dégradé ciel bleu profond en haut vers tons chauds crépusculaires (pêche/orangé) au niveau
des nuages, contraste jour/coucher de soleil dans une même image [FAIT]
Titre : or/bronze en dégradé avec biseau 3D marqué (highlights clairs, ombres portées internes) —
traitement "logo de film à gros budget" plutôt qu'un aplat couleur simple [FAIT]
Texte secondaire (sous-titre, horaire, date) : blanc/gris clair, discret face au titre doré [FAIT]
Principe à retenir : un seul élément doré à fort relief comme signature, posé sur un dégradé de
ciel naturel à deux températures — pas les HEX exacts (voir Agents_Bibliotheque_Palettes.md,
familles dorées comme Marbre Noir & Or pour un registre proche en plus sombre).

## 4. Typographie
Titre principal : display condensé à empattements géométriques, effet 3D/biseau prononcé,
majuscules, occupe une largeur proche du cadre complet [FAIT]
Sous-titre série : sans-serif fine, espacement large, majuscules [FAIT]
Nom organisation (en-tête) : mixte serif fin (nom) + sans-serif bold condensée (sous-libellé) [FAIT]
Horaire/date : sans-serif medium, chiffres bien lisibles [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Titre 3D biseauté** — traitement typographique le plus travaillé du flyer, seul élément à
recevoir un rendu volumétrique plutôt qu'un aplat [FAIT]
**Socle architectural flottant** — temple sur île rocheuse entourée de nuages, sert de transition
visuelle entre le titre (haut) et les infos pratiques (bas) plutôt qu'un simple fond décoratif [FAIT]
**Numéro d'épisode superposé** — chiffre romain simple posé directement sur l'architecture,
suggère une numérotation de série à suivre [FAIT]
**Bloc horaire compte-à-rebours** — format HH.MM.SS inhabituel pour un simple horaire d'événement,
évoque un décompte plutôt qu'une heure fixe [FAIT pour la présence, HYPOTHÈSE sur l'intention
exacte : soit un vrai compte à rebours dynamique en usage réel, soit un choix stylistique statique]
États hover/clic : non observable, support statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE 3D DORÉ
Zone → TOP-CENTER
X% → ≈10% | Y% → ≈22% | W% → ≈80% | H% → ≈18% [HYPOTHÈSE]

ÉLÉMENT : TEMPLE + ÎLOT FLOTTANT
Zone → MID-CENTER
X% → ≈15% | Y% → ≈42% | W% → ≈70% | H% → ≈35% [HYPOTHÈSE]
Alignement → centré horizontalement sous le titre, numéro d'épisode superposé en bas du temple

ÉLÉMENT : BLOC HORAIRE + DATE
Zone → BOT-LEFT
X% → ≈10% | Y% → ≈82% | W% → ≈60% | H% → ≈12% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 4 │ Texte (en-tête/titre/horaire)   │ Normal │ 100%    │ FAIT
 3 │ Numéro d'épisode                │ Normal │ 100%    │ FAIT
 2 │ Temple + îlot rocheux            │ Normal │ 100%    │ FAIT
 1 │ Fond ciel dégradé + nuages       │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — flyer statique. Le format "compte à rebours" suggère une éventuelle version
vidéo/story animée dans l'usage réel de l'organisation, mais rien ne le confirme sur cette
capture [HYPOTHÈSE]

## 9. Effets visuels
Biseau/relief 3D sur le titre (highlights + ombres internes) — traitement le plus élaboré du
visuel [FAIT]
Brume/nuages denses en volume autour de l'îlot, profondeur atmosphérique marquée [FAIT]
Aucun glassmorphism ni glow au sens UI numérique — tout reste dans un registre illustration/rendu
3D [FAIT]

## 10. Responsive
Un seul format fourni (portrait) → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre doré sur ciel bleu/pêche : bon dans l'ensemble grâce au biseau qui ajoute des
zones sombres de contour [FAIT]
Contraste texte horaire/date blanc sur zone sombre du bas (nuages/rocher assombris) : bon [FAIT]
Sous-titre série en blanc fin sur ciel clair : risque de contraste plus faible localement
[HYPOTHÈSE]

## 12. Technologies probables
Composition probablement générée/retouchée par IA (cohérence lumineuse très poussée entre temple,
nuages et ciel) puis typographie 3D ajoutée en post-production (Photoshop styles de calque ou
rendu 3D dédié type Cinema 4D pour le titre) [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le traitement "titre 3D doré façon logo de film" élève immédiatement la perception de qualité
production, rare dans ce type de flyer habituellement plus plat.
L'architecture flottante comme socle narratif (plutôt qu'un simple fond) crée une vraie scène,
pas juste un décor.
Le format numéroté ("I") avec compte à rebours pose l'attente d'une série à suivre, mécanisme
d'engagement plus fort qu'une annonce ponctuelle isolée.

## 14. Défauts observés
Densité d'effets visuels (biseau 3D + brume + dégradé complexe) proche de la surcharge si le sujet
réel de la série est simple — à calibrer selon l'importance de l'événement [HYPOTHÈSE]
Aucune information sur le lieu (uniquement horaire + date) — pourrait manquer si l'événement n'est
pas exclusivement en ligne [FAIT sur l'absence, HYPOTHÈSE sur si c'est un problème réel]

## 15. Éléments à réutiliser
Traitement 3D biseauté réservé au titre uniquement (pas à tout le texte) comme signature de qualité
Élément architectural/scénique comme socle narratif plutôt qu'un fond plat
Numérotation de série visible directement dans la composition, pas juste dans le texte

## 16. Éléments à éviter
Cumuler biseau 3D + brume dense + dégradé multi-teintes sans vérifier que le titre reste le point
focal principal malgré la richesse du fond

## 17. Recommandations pour le projet
Le principe "titre en relief doré + scène architecturale comme socle" est transposable à toute
série de contenu à suivre (formation, saison de podcast, cycle de conférences) — pas propre au
religieux.
Si usage réel en série : garantir la cohérence du traitement 3D sur tous les épisodes suivants
pour que la signature reste reconnaissable.

## 18. Cahier des charges final
Stack suggérée si décliné en web : image hero statique haute résolution (le rendu 3D biseauté est
coûteux à recréer en temps réel, mieux vaut une image pré-rendue), typographie du reste en CSS
standard. Si compte à rebours réellement fonctionnel souhaité : composant JS dédié (calcul de
différence de dates), pas une image statique du chiffre.
Reste 100% original — nom d'organisation, logo et texte exact jamais repris.
