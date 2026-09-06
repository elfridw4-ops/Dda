# DESIGN REFERENCE — Flyer Culte de Jeunes (carte glossy sombre)
Type input : IMAGE STATIQUE
Domaine observé : Église / rencontre jeunesse hebdomadaire — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait proche 4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, logo, adresse ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : flyer d'invitation à une rencontre jeunesse hebdomadaire, organisation religieuse [FAIT]
Type : flyer réseaux sociaux, carte flottante sur fond texturé [FAIT]
Objectif supposé : informer sur le programme, l'adresse et les horaires récurrents [FAIT]
Public cible : jeunes membres/prospects d'une communauté religieuse [HYPOTHÈSE]
Langue observée : française — non pertinent à reproduire, adapter à la langue réelle du public
cible du nouveau projet [FAIT]

## 2. Structure générale
Fond extérieur : texture sombre grunge/béton rougeâtre, un halo de lumière chaude en haut à gauche [FAIT]
Carte centrale : rectangle à coins très arrondis façon "app icon" géant, effet glossy/glassmorphism
translucide, flotte au centre du cadre avec une ombre portée nette [FAIT]
Dans la carte, empilement centré : 2 logos côte à côte en haut, nom d'organisation en 2 lignes,
titre principal "gros mot / petit mot / gros mot" (3 lignes, mot du milieu plus petit et entre
parenthèses visuellement), ligne de features séparées par des points, pastille blanche adresse,
ligne horaires récurrents, bandeau tricolore décoratif, arc de cercle fin en coin bas-droit [FAIT]
Ordre de lecture : logos → nom organisation → titre événement → features → où → quand [FAIT]

## 3. Palette graphique
Fond extérieur : rouge-brun sombre grunge/texturé, aspect mur/béton usé [FAIT]
Carte centrale : même famille rouge-brun mais en dégradé glossy plus lumineux au centre, effet de
reflet convexe façon bouton d'app [FAIT]
Texte : blanc pur pour le titre, pour un contraste maximal sur le fond sombre glossy [FAIT]
Pastille adresse : blanc plein, rupture claire au milieu du sombre — même principe que le flyer
"arche église" (réf design_reference_flyer-culte-dominical-arche.md) [FAIT]
Bandeau tricolore (rouge/jaune/bleu fins) : élément décoratif distinct, probablement un rappel de
couleurs nationales/institutionnelles du contexte local [FAIT pour la présence, HYPOTHÈSE pour la
signification exacte]
Principe à retenir : carte glossy sombre monochrome + une seule pastille blanche comme ancre —
famille de palettes "Nuit & Grenat" ou "Bordeaux" à explorer (Agents_Bibliotheque_Palettes.md).

## 4. Typographie
Titre principal : sans-serif très condensée et grasse, majuscules, mot central nettement plus
petit que les deux autres lignes — hiérarchie de taille marquée en 3 temps [FAIT]
Nom d'organisation : sans-serif medium, majuscules, 2 lignes centrées [FAIT]
Ligne features : sans-serif regular, séparateurs points ronds entre chaque item [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Carte glossy centrale** — effet "bouton d'app géant" : reflet convexe, coins très arrondis,
ombre portée nette qui la détache du fond — signature visuelle forte [FAIT]
**Titre 3 lignes à hiérarchie de taille** — grand/petit/grand, mot du milieu qui semble "inséré"
entre les deux autres [FAIT]
**Pastille blanche adresse** — même principe que d'autres réfs de la bibliothèque (voir
design_reference_flyer-culte-dominical-arche.md) : seule zone claire au milieu du sombre [FAIT]
**Arc de cercle fin décoratif** — élément graphique discret en coin bas-droit, rôle purement
décoratif/signature [FAIT]
**Bandeau tricolore fin** — 3 traits de couleur courts sous la ligne horaires [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : CARTE GLOSSY CENTRALE
Zone → CENTER, pleine hauteur quasi
X% → ≈10% | Y% → ≈8% | W% → ≈80% | H% → ≈84% [HYPOTHÈSE]

ÉLÉMENT : TITRE 3 LIGNES
Zone → MID-CENTER (dans la carte)
X% → ≈15% | Y% → ≈32% | W% → ≈70% | H% → ≈22% [HYPOTHÈSE]

ÉLÉMENT : PASTILLE ADRESSE BLANCHE
Zone → MID-CENTER, sous le titre
X% → ≈12% | Y% → ≈62% | W% → ≈76% | H% → ≈10% [HYPOTHÈSE]

ÉLÉMENT : ARC DE CERCLE DÉCORATIF
Zone → BOT-RIGHT
X% → ≈75% | Y% → ≈82% | W% → ≈20% | H% → ≈15% [HYPOTHÈSE]
Alignement → coupé par le bord de la carte, purement décoratif
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE    │ OPACITÉ EST. │ TAG
 5 │ Texte + pastille + bandeau       │ Normal  │ 100%         │ FAIT
 4 │ Arc de cercle décoratif          │ Normal  │ ≈60-80%      │ HYPOTHÈSE
 3 │ Reflet glossy (highlight convexe)│ Screen  │ ≈30-40%      │ HYPOTHÈSE
 2 │ Carte rectangle arrondi (fond)   │ Normal  │ 100%         │ FAIT
 1 │ Fond grunge texturé extérieur    │ Normal  │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — flyer statique. La carte évoque visuellement un bouton/icône cliquable
(affordance) mais aucune interaction n'est réellement montrée [HYPOTHÈSE]

## 9. Effets visuels
Effet glossy/convexe façon icône d'app skeuomorphe — reflet lumineux qui suit la courbure
apparente de la carte [FAIT]
Ombre portée nette et large sous la carte, la détache clairement du fond grunge [FAIT]
Texture grunge/béton en fond extérieur, contraste avec la carte lisse/brillante [FAIT]
Aucun vrai glassmorphism (pas de transparence qui laisse voir le fond à travers) — plutôt un effet
plastique/verre opaque brillant [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni (portrait ~4:5) → comportement autre ratio non observable.

## 11. Accessibilité
Contraste blanc sur carte glossy sombre : bon au centre, à vérifier sur la zone de reflet
lumineux qui pourrait réduire le contraste localement [HYPOTHÈSE]
Contraste texte sur pastille blanche : bon [FAIT]

## 12. Technologies probables
Photoshop/Canva avec effets de calque (bevel/emboss, reflet) pour l'effet glossy [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
L'effet "carte-bouton d'app géant" est une signature visuelle mémorable, différente d'un flyer
plat classique — donne une impression tactile/premium.
Hiérarchie de taille en 3 temps sur le titre (grand/petit/grand) crée un rythme de lecture original
plutôt qu'un bloc de texte uniforme.
Cohérence avec d'autres flyers de la même famille visuelle (pastille blanche comme ancre unique) —
un système réutilisable, pas un one-shot.

## 14. Défauts observés
Le fond grunge très texturé pourrait distraire légèrement de la carte si le contraste carte/fond
n'est pas assez marqué sur petit écran [HYPOTHÈSE]
Bandeau tricolore et arc décoratif ajoutent 2 éléments graphiques supplémentaires dont le rôle
n'est pas immédiatement évident sans contexte culturel [HYPOTHÈSE]

## 15. Éléments à réutiliser
Effet carte glossy convexe comme cadre principal, alternative forte au rectangle plat classique
Hiérarchie de taille en 3 temps sur un titre à 3 lignes
Système de pastille blanche unique comme ancre visuelle — cohérent avec d'autres flyers de
l'atelier, à documenter comme signature transversale possible

## 16. Éléments à éviter
Ajouter des éléments décoratifs (arc, bandeau couleur) sans qu'ils aient une vraie justification
lisible pour un public qui ne connaît pas le contexte local

## 17. Recommandations pour le projet
L'effet carte glossy est transposable à toute annonce d'événement récurrent (cours, atelier, club)
qui veut une identité plus "premium/app" qu'un flyer plat.
Si des éléments décoratifs culturels/institutionnels sont repris, s'assurer qu'ils restent lisibles
et volontaires, pas juste décoratifs sans sens.

## 18. Cahier des charges final
Stack suggérée si web : carte avec box-shadow large + dégradé radial pour simuler le reflet
convexe, border-radius généreux, fond extérieur en texture SVG bruit teintée.
Reste 100% original — nom d'organisation, adresse, logos et texte exact jamais repris.
