# DESIGN REFERENCE — Flyer Culte Dominical (arche dégradé fumé)
Type input : IMAGE STATIQUE
Domaine observé : Église / annonce de culte hebdomadaire — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (1 capture, format portrait 4:5 type story/post)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'église, logo, coordonnées ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : flyer d'annonce d'un culte hebdomadaire, organisation religieuse [FAIT]
Source : capture fournie par l'utilisateur, origine (Canva/Photoshop) non précisée [NON OBSERVÉ]
Type : affiche/flyer réseaux sociaux, format portrait proche 4:5 [FAIT]
Objectif supposé : inviter une communauté à un événement récurrent avec infos pratiques (date,
heure, lieu, contact) [FAIT]
Public cible : membres/prospects d'une communauté religieuse locale [HYPOTHÈSE]

## 2. Structure générale
Grande forme "arche"/pilule verticale semi-transparente occupant tout le cadre, comme une fenêtre
posée sur un fond dégradé fumé plus saturé en périphérie [FAIT]
À l'intérieur de l'arche, empilement vertical centré : logo + nom d'organisation en haut, libellé
d'intro petit et espacé, titre principal 2 lignes en très grand gras, bloc date/heure (2 pastilles
icône+texte côte à côte), pastille blanche pleine largeur avec adresse, ligne réseaux sociaux +
contact tout en bas [FAIT]
Alignement : tout centré horizontalement sauf la dernière ligne (réseaux à gauche, contact à
droite) [FAIT]
Ordre de lecture : logo → accroche → titre → quand → où → comment nous suivre/contacter [FAIT]

## 3. Palette graphique
Fond extérieur : dégradé chaud diffus (orange braise → brun/anthracite → une touche de vert-gris
désaturé en haut à gauche), aspect granuleux/fumé [FAIT pour la texture, HYPOTHÈSE pour les HEX]
Arche intérieure : même famille de teintes mais assombrie/translucide, effet vitre teintée sur le
fond [FAIT]
Texte : blanc pur pour le titre et les infos clés, contraste fort et volontaire [FAIT]
Pastille adresse : fond blanc plein, texte sombre — rupture volontaire avec le reste très sombre,
sert d'ancre de lecture [FAIT]
Principe à retenir : un fond chaud dégradé + une seule zone claire (pastille infos) qui capte
l'œil en dernier, PAS les HEX précis (voir Agents_Bibliotheque_Palettes.md pour équivalents,
ex. familles "Braise/Cannelle & Nuit" ou "Ocre & Charbon").

## 4. Typographie
Titre principal : sans-serif condensée très grasse, majuscules, interligne serré, occupe une
grande partie de la largeur de l'arche [FAIT]
Libellé d'intro ("JOIN US FOR") : sans-serif fine, majuscules, letter-spacing large — contraste
volontaire de graisse avec le titre [FAIT]
Date/heure : sans-serif medium/bold, taille intermédiaire [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Forme arche/pilule** — grand rectangle à coins très arrondis en haut (façon dôme), sert de cadre
maître à toute la composition [FAIT]
**Pastilles date/heure** — icône ronde (calendrier, horloge) + texte 2 lignes, fond neutre discret [FAIT]
**Bloc adresse** — pilule blanche pleine largeur, icône pin + texte multi-lignes centré [FAIT]
**Footer contact** — icônes réseaux sociaux alignées + libellé contact avec icône téléphone [FAIT]
États hover/clic : non observable, support statique [NON OBSERVÉ]

## 5bis. Grille de positionnement — verrouillage adapté
```
ÉLÉMENT : ARCHE PRINCIPALE (cadre translucide)
Zone → CENTER, pleine hauteur quasi
X% → ≈8% | Y% → ≈15% | W% → ≈84% | H% → ≈80% [HYPOTHÈSE]

ÉLÉMENT : TITRE 2 LIGNES
Zone → MID-CENTER (dans l'arche)
X% → ≈12% | Y% → ≈38% | W% → ≈76% | H% → ≈20% [HYPOTHÈSE]

ÉLÉMENT : PASTILLE ADRESSE BLANCHE
Zone → BOT-CENTER (dans l'arche)
X% → ≈14% | Y% → ≈78% | W% → ≈72% | H% → ≈10% [HYPOTHÈSE]
Alignement → centrée horizontalement, juste sous le bloc date/heure
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE    │ OPACITÉ EST. │ TAG
 4 │ Texte + icônes + pastille blanche│ Normal │ 100%         │ FAIT
 3 │ Arche translucide (vitre teintée)│ Normal │ ≈70-85%      │ HYPOTHÈSE
 2 │ Grain/texture fumée              │ Overlay│ faible       │ HYPOTHÈSE
 1 │ Dégradé fond plein cadre         │ Normal │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique, aucune animation observable.

## 7. Chronologie
NON APPLICABLE — input image statique, aucune animation observable.

## 8. Interactions
Non observable sur image statique. Aucun élément cliquable identifiable.

## 9. Effets visuels
Grain/bruit fin sur tout le fond, casse le plat du dégradé [FAIT]
Effet "vitre teintée" sur l'arche — légère transparence qui laisse deviner le dégradé du fond
derrière, plus sombre que le fond extérieur [FAIT]
Pas de glow ni glassmorphism au sens flou net — plutôt une superposition de calques colorés
[HYPOTHÈSE]

## 10. Responsive
Un seul format fourni (portrait ~4:5) → comportement autre ratio non observable.

## 11. Accessibilité
Contraste texte blanc sur fond sombre : bon [FAIT]
Contraste texte sombre sur pastille blanche : bon [FAIT]
Taille des icônes footer : potentiellement sous la zone cliquable recommandée si repris en usage
web interactif (à vérifier si adapté au digital) [HYPOTHÈSE]

## 12. Technologies probables
Probablement Canva ou Photoshop (composition figée, pas de trace de framework web) [HYPOTHÈSE]
Si recréé en web/PWA : CSS radial-gradient + backdrop-filter pour l'effet vitre [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La forme arche comme cadre unique et fort crée une identité graphique immédiate, plus originale
qu'un simple flyer rectangulaire plein cadre.
Hiérarchie très claire : un seul titre domine, tout le reste est secondaire et bien rangé.
La pastille blanche unique au milieu du sombre agit comme point d'ancrage visuel évident pour
l'info pratique la plus importante (où aller).

## 14. Défauts observés
Densité d'information dans le bas de l'arche (date + heure + adresse + réseaux + contact) proche
de la limite de lisibilité sur petit écran mobile [HYPOTHÈSE]
Aucun CTA d'action (pas de "je m'inscris"/lien) — flyer purement informatif [FAIT]

## 15. Éléments à réutiliser
Cadre "fenêtre/arche" comme signature graphique plutôt qu'un rectangle plein cadre générique
Une seule zone claire (pastille) qui sert d'ancre au milieu d'une composition sombre
Hiérarchie stricte : accroche fine → titre énorme → infos pratiques groupées

## 16. Éléments à éviter
Empiler trop de blocs d'info secondaire en bas sans marge de respiration suffisante sur mobile
Aucun CTA cliquable si le support est destiné à un usage digital interactif (site/app)

## 17. Recommandations pour le projet
Le principe "cadre-fenêtre translucide + une seule pastille claire" est transposable à tout
secteur ayant une info pratique récurrente à annoncer (cours, événement, atelier) — pas propre
au religieux.
Prévoir un vrai CTA si le support doit vivre au-delà du simple partage image (lien RSVP, bouton).

## 18. Cahier des charges final
Stack suggérée si version web : composant hero avec clip-path arche + dégradé CSS animé lentement
(pas de vraie animation dans la source), grain via SVG feTurbulence en overlay très léger.
Palette et typo à définir sur-mesure via Agents_Bibliotheque_Palettes.md /
Agents_Bibliotheque_Typographies.md — jamais recopier les HEX/police de cette réf tels quels.
Reste 100% original — nom d'organisation, logo, adresse et contact réels jamais repris.
