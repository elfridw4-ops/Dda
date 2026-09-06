# DESIGN REFERENCE — Flyer Séminaire Mariage (mains + alliance, script rouge/or)
Type input : IMAGE STATIQUE
Domaine observé : Église / séminaire jeunesse thématique — usage NON restreint
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait ~4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, orateurs, adresse ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : flyer d'annonce d'un séminaire thématique sur le choix du conjoint, organisé par la section
jeunesse d'une organisation religieuse (nom non reproduit) [FAIT]
Type : flyer réseaux sociaux format portrait [FAIT]
Objectif supposé : informer sur un événement ponctuel à destination des jeunes/célibataires, avec
intervenants nommés pour crédibilité [HYPOTHÈSE]
Public cible : jeunes adultes en réflexion sur le mariage, communauté religieuse locale [HYPOTHÈSE]

## 2. Structure générale
En-tête : logo + nom organisation à gauche, mention "présente : [type d'événement]" à droite [FAIT]
Titre principal en 2 registres : "CHOOSING A" en sans-serif bold noir condensé, "Life" en script
doré/rouge dégradé qui chevauche visuellement "PARTNER" en dessous — mot du milieu traité
différemment des deux mots qui l'encadrent [FAIT]
Photo en fond bas de cadre : mains tenant une alliance, bouquet de fleurs, cadrage serré [FAIT]
Bloc infos pratiques (date/lieu/heure) aligné à droite sous le titre, en couleur contrastée [FAIT]
Bloc intervenants (nom + rôle) et bloc sermon empilés en dessous, hiérarchie par indentation [FAIT]
Ordre de lecture : organisation → type d'événement → titre → infos pratiques → qui parle [FAIT]

## 3. Palette graphique
Fond : blanc/bleu très pâle avec traînées de lumière diffuses (lens flare), lumineux et aérien [FAIT]
Titre "CHOOSING A...PARTNER" : noir/anthracite plein, contraste fort sur fond clair [FAIT]
Mot "Life" : dégradé rouge-orangé vers doré, script cursif — seul élément couleur du titre [FAIT]
Bloc infos pratiques : orange/doré pour les libellés d'emphase (date, lieu) [FAIT]
Éléments déco (cœurs, brins de fleurs) : rose pâle, discret [FAIT]
Principe à retenir : titre noir sobre + UN SEUL mot traité en accent chaud dégradé — casse la
monotonie sans multiplier les couleurs (voir Agents_Bibliotheque_Palettes.md pour équivalents
HEX, jamais recopier les teintes exactes de cette réf).

## 4. Typographie
Titre principal : sans-serif très condensée et grasse, majuscules, pour les 2 mots encadrants [FAIT]
Mot central "Life" : script cursif fluide, casse mixte, rupture de registre volontaire avec le
reste du titre [FAIT]
Bloc infos pratiques : sans-serif bold, hiérarchie par la couleur (orange = emphase) [FAIT]
Bloc intervenants/sermon : sans-serif regular, plus petit, discret [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Titre à rupture de registre** — un mot central en script coloré chevauchant 2 mots en display
noir bold — technique de composition pour dynamiser un titre autrement plat [FAIT]
**Bloc infos pratiques aligné à droite** — rupture avec l'alignement centré du titre au-dessus,
crée une respiration visuelle [FAIT]
**Hiérarchie intervenants/sermon** — 2 blocs distincts (qui organise vs qui prêche) avec
indentation différente, évite la confusion des rôles [FAIT]
États hover/clic : non observable, support statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : EN-TÊTE (logo + présente)
Zone → TOP, pleine largeur
X% → 0% | Y% → 0% | W% → 100% | H% → ≈8% [HYPOTHÈSE]

ÉLÉMENT : TITRE À RUPTURE DE REGISTRE
Zone → TOP-CENTER à MID-CENTER
X% → ≈5% | Y% → ≈10% | W% → ≈90% | H% → ≈22% [HYPOTHÈSE]

ÉLÉMENT : BLOC INFOS PRATIQUES
Zone → MID-RIGHT
X% → ≈45% | Y% → ≈35% | W% → ≈50% | H% → ≈12% [HYPOTHÈSE]

ÉLÉMENT : PHOTO MAINS + ALLIANCE (fond bas)
Zone → BOT-CENTER, pleine largeur
X% → 0% | Y% → ≈65% | W% → 100% | H% → ≈35% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 3 │ Texte (titre/infos/intervenants)│ Normal │ 100%    │ FAIT
 2 │ Traînées lumière (lens flare)   │ Screen │ ≈40-60% │ HYPOTHÈSE
 1 │ Photo mains+alliance+fleurs (bas)│ Normal│ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — flyer statique.

## 9. Effets visuels
Traînées de lumière diffuses (lens flare) en overlay sur le fond clair, ajoute une texture lumineuse
sans surcharger [FAIT]
Dégradé rouge→doré sur le mot script, seul traitement couleur riche du visuel [FAIT]
Aucun glassmorphism/blur [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre noir sur fond clair : excellent [FAIT]
Contraste bloc infos pratiques (orange sur blanc) : à vérifier, l'orange clair sur fond très clair
peut être limite [HYPOTHÈSE]
Densité d'info (titre + infos + 2 blocs intervenants) proche de la limite haute pour un flyer
mobile, mais reste organisée par hiérarchie claire [FAIT]

## 12. Technologies probables
Composition Canva/Photoshop, photo stock ou séance photo réelle pour les mains+alliance
[HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La rupture de registre sur un seul mot du titre (script coloré vs display noir) est une technique
simple et efficace pour créer un point focal sans complexifier toute la composition.
Séparation claire organisateur/intervenant/prédicateur — évite la confusion fréquente dans ce
type de flyer où tous les noms sont mélangés au même niveau visuel.

## 14. Défauts observés
Beaucoup de blocs d'info textuelle différents (titre, infos pratiques, intervenants, sermon,
responsable) sans structure de carte/séparateur visuel fort entre eux — juste de la position et
de la couleur, pourrait devenir confus à distance/petite taille [HYPOTHÈSE]
Photo en fond bas assez discrète, presque anecdotique par rapport au poids du texte — pourrait
être plus présente vu le sujet (mariage) [HYPOTHÈSE]

## 15. Éléments à réutiliser
Rupture de registre typographique sur un seul mot central pour dynamiser un titre à 3 mots
Séparation visuelle claire des rôles (qui organise / qui parle / qui prêche) par bloc distinct
Alignement à droite du bloc infos pratiques en contraste avec un titre centré au-dessus

## 16. Éléments à éviter
Empiler trop de blocs d'info sans séparateur visuel (ligne, carte, fond) quand le nombre de
rôles/intervenants dépasse 2-3

## 17. Recommandations pour le projet
La technique "1 mot en registre différent au milieu du titre" est transposable à tout titre
d'événement à 3 mots qui a besoin d'un point focal (formation, conférence, lancement).
Si plusieurs intervenants/rôles à lister : envisager des cartes ou séparateurs visuels plutôt que
la seule indentation si le nombre dépasse 3.

## 18. Cahier des charges final
Stack suggérée si décliné en web : composant "titre à mot accent" réutilisable (2 polices
différentes injectées par variable), photo en background-image avec object-position ajustable.
Reste 100% original — nom d'organisation, intervenants réels et texte exact jamais repris.
