# DESIGN REFERENCE — Affiche Citation Encadrée (minimaliste)
Type input : IMAGE STATIQUE
Domaine observé : Décoration intérieure / citation de valeurs familiales — usage NON restreint
Niveau confiance global : ≈70% FAIT / 25% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, photo d'un cadre accroché au mur, angle légèrement
oblique)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de famille/marque ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : affiche encadrée présentant 3 valeurs courtes + une signature de marque/famille [FAIT]
Type : print déco murale, photographié in situ (pas un mockup studio) [FAIT]
Objectif supposé : décoration intérieure porteuse de sens, valeurs personnelles ou familiales
affichées comme objet de fierté [HYPOTHÈSE]
Public cible : usage privé (mur de maison), pas un support marketing destiné à un large public [FAIT]

## 2. Structure générale
Cadre noir classique avec marie-louise (passe-partout) blanche généreuse autour de l'affiche [FAIT]
3 lignes de texte courtes empilées, chacune sur 1-2 mots, alignées à gauche, tailles identiques
entre elles [FAIT]
Ligne de signature ("THE [NOM] FAMILY VALUES") en tout petit, sous la 3e ligne, sans lien visuel
fort avec le reste (juste plus petit) [FAIT]
Fond de l'affiche : gris très clair/blanc cassé neutre, aucun autre élément graphique [FAIT]
Photographiée légèrement de biais, en situation réelle (fenêtre à volets visible en reflet/arrière-
plan) plutôt qu'un mockup plat frontal [FAIT]

## 3. Palette graphique
Fond affiche : gris très clair quasi blanc [FAIT]
Texte : noir plein, aucune couleur d'accent [FAIT]
Cadre : noir mat, mur environnant beige/taupe clair [FAIT]
Principe à retenir : monochrome absolu (noir sur blanc cassé) — aucune couleur d'accent, toute la
force vient de la typo et de l'espacement (voir Agents_Bibliotheque_Palettes.md Section 4.6
Neutres & Minimales, ex. familles "Brume & Noir" ou "Lin & Anthracite").

## 4. Typographie
3 lignes principales : sans-serif bold condensée, majuscules, graisse uniforme sur les 3 lignes,
pas de hiérarchie de taille entre elles (toutes égales) [FAIT]
Ligne signature : même famille sans-serif mais beaucoup plus petite et fine, majuscules aussi [FAIT]
Interlignage généreux entre les 3 lignes principales, espace clairement supérieur à un interligne
de paragraphe classique [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Cadre + passe-partout** — élément physique, pas numérique, mais le ratio marge/image est un
principe transposable à un poster numérique (marge généreuse autour du texte) [FAIT]
**Alignement gauche strict** — toutes les lignes démarrent au même point vertical, pas de centrage [FAIT]
Aucun autre composant — c'est la simplicité qui est le composant central de cette réf [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : BLOC DE 3 LIGNES + SIGNATURE
Zone → CENTER (légèrement haut dans le cadre)
X% → ≈12% | Y% → ≈15% | W% → ≈70% | H% → ≈55% [HYPOTHÈSE]
Alignement → toutes les lignes alignées à gauche sur le même point X, empilées verticalement avec
un espacement généreux et régulier entre chaque ligne
```

## 5ter. Pile de calques
```
N° │ CALQUE           │ MODE   │ OPACITÉ │ TAG
 2 │ Texte (3 lignes + signature) │ Normal │ 100% │ FAIT
 1 │ Fond uni gris très clair     │ Normal │ 100% │ FAIT
```
Composition à seulement 2 calques — pas de superposition complexe, cohérent avec le principe
minimaliste de la réf.

## 6. Animations
NON APPLICABLE — input image statique (print physique photographié).

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non applicable — objet physique, aucune interaction numérique possible par nature.

## 9. Effets visuels
Aucun effet numérique (pas de gradient, pas de texture, pas d'ombre portée dans l'affiche
elle-même) — la seule "texture" vient du support physique (grain du papier, reflet du cadre en
verre visible sur la photo) [FAIT]
Photo prise en léger angle plutôt que de face — donne une sensation "réelle"/lifestyle plutôt
qu'un mockup plat, technique de présentation à retenir pour du contenu marketing print [FAIT]

## 10. Responsive
Non applicable — format fixe (print encadré), pas de déclinaison responsive pertinente à ce stade.

## 11. Accessibilité
Contraste noir sur blanc cassé : excellent, parmi les meilleurs contrastes possibles [FAIT]
Alignement gauche strict facilite la lecture rapide, pas de centrage qui casserait le rythme
de lecture naturel [FAIT]

## 12. Technologies probables
Composition simple InDesign/Canva/Illustrator, impression standard sur papier mat [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La radicalité du minimalisme (2 couleurs, 1 famille de police, alignement strict, rien d'autre)
prouve qu'un message fort n'a pas besoin de décoration pour marquer — l'espace vide (passe-partout
généreux + interlignage) EST le design.
La photo en situation réelle (pas un mockup plat) donne une authenticité et une chaleur que
n'aurait pas un rendu 3D parfait.

## 14. Défauts observés
La ligne de signature est très petite comparée aux 3 lignes principales — risque de passer
totalement inaperçue à distance normale de lecture murale [FAIT]
Aucune hiérarchie entre les 3 valeurs (toutes la même taille) — choix assumé mais qui égalise leur
importance perçue, à confirmer que c'est bien l'intention voulue [HYPOTHÈSE]

## 15. Éléments à réutiliser
Radicalité minimaliste : 2 couleurs, 1 police, rien d'autre — comme option de design à part entière
Alignement gauche strict + interlignage généreux entre lignes courtes, plutôt qu'un centrage réflexe
Présentation "en situation réelle" (photo in situ) plutôt qu'un mockup plat pour du contenu
marketing qui veut une sensation lifestyle/authentique

## 16. Éléments à éviter
Une ligne de signature/mention légale trop petite pour être lue à la distance d'usage réelle du
support (mur, affiche)

## 17. Recommandations pour le projet
Ce principe minimaliste absolu est transposable à tout message de valeurs/mission (entreprise,
marque personnelle, salle de sport, école) qui veut un impact fort sans décoration.
Si une mention secondaire (signature, légal) doit rester lisible, calibrer sa taille selon la
distance de lecture réelle prévue, pas juste "plus petit que le reste".

## 18. Cahier des charges final
Stack suggérée si décliné en poster numérique/web : typographie unique, fond uni, marge (padding)
généreuse équivalente au passe-partout physique observé, alignement gauche strict.
Palette/typo à choisir dans Agents_Bibliotheque_Palettes.md famille "Neutres & Minimales" et
Agents_Bibliotheque_Typographies.md famille correspondante, jamais recopier tel quel.
Reste 100% original — nom de famille/marque réel jamais repris.
