# DESIGN REFERENCE — Flyer "Day Two" Intronisation (colonnades, doré/rouge)
Type input : IMAGE STATIQUE
Domaine observé : Église / cérémonie institutionnelle multi-jours — usage NON restreint
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait ~4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, personne représentée ou palette figée
ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : flyer du "jour 2" d'une cérémonie institutionnelle multi-jours (intronisation/renouvellement
spirituel), organisation religieuse (nom non reproduit) [FAIT]
Type : flyer réseaux sociaux, composite architecture + portrait + effets lumineux [FAIT]
Objectif supposé : maintenir l'engagement sur un événement structuré en plusieurs jours,
positionnement cérémoniel/officiel fort [FAIT]
Public cible : membres/réseau d'une organisation à portée internationale ("toutes nos branches
globalement" mentionné) [FAIT]

## 2. Structure générale
Décor architectural classique (colonnades façon temple/rotonde) en fond, 2 grands bannières rouges
verticales suspendues entre les colonnes portant des symboles (couronne, sceau) [FAIT]
Personnage en tenue formelle blanche, debout centré, petite échelle par rapport au décor massif —
le décor domine largement le sujet humain [FAIT]
En-tête : double logo/badge (organisation + nom de la cérémonie) centré [FAIT]
Titre "DAY [numéro]" en lettrage énorme blanc, superposé directement sur l'architecture et le
personnage, occupe la largeur quasi complète [FAIT]
Bas : mentions diffusion live (icônes plateformes), portée géographique ("toutes nos branches") [FAIT]
Effets décoratifs : éclairs/étincelles dorés le long des bords gauche et droit du cadre [FAIT]

## 3. Palette graphique
Fond : sombre (ciel nuageux orageux, colonnades en pierre foncée), dramatique [FAIT]
Bannières + accents : rouge profond, symboles dorés (couronne, sceau) [FAIT]
Personnage : costume blanc pur, seul élément clair de la composition hormis le titre — contraste
fort avec l'environnement sombre [FAIT]
Titre : blanc, grande échelle, léger effet de superposition/transparence avec le fond visible
à travers certaines lettres [FAIT]
Effets éclairs : doré/jaune vif sur les bords [FAIT]
Principe à retenir : sombre + rouge + or = registre "cérémonie/pouvoir/prestige" assumé, costume
blanc du sujet comme seul point de rupture clair qui le distingue du décor (voir
Agents_Bibliotheque_Palettes.md famille Bordeaux & Or Profond pour un registre HEX proche, jamais
recopier tel quel).

## 4. Typographie
Titre "DAY [numéro]" : display bold massif, majuscules, blanc, très grande échelle — le mot
"TWO" notamment fusionne visuellement avec "DAY" par superposition serrée [FAIT]
Mentions en-tête et bas : sans-serif condensée, plus discrète [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Titre qui absorbe le sujet** — le lettrage "DAY TWO" est si massif qu'il chevauche et fusionne
visuellement avec le personnage central, technique de composition à très fort impact mais qui
réduit la lisibilité du sujet humain lui-même [FAIT]
**Bannières symboliques suspendues** — élément architectural/décoratif qui porte du sens (couronne
= intronisation) plutôt qu'un simple fond neutre [FAIT]
**Éclairs dorés en bordure** — encadrement dynamique qui structure les 2 côtés du cadre sans
toucher au centre [FAIT]
**Badge "5PM" en sceau doré** — horaire traité comme un élément décoratif à part entière (sceau
circulaire) plutôt qu'un simple texte [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : DÉCOR ARCHITECTURAL + BANNIÈRES
Zone → TOP-CENTER à MID-CENTER, pleine largeur
X% → 0% | Y% → 0% | W% → 100% | H% → ≈55% [HYPOTHÈSE]

ÉLÉMENT : PERSONNAGE CENTRAL
Zone → MID-CENTER, petite échelle
X% → ≈38% | Y% → ≈30% | W% → ≈24% | H% → ≈35% [HYPOTHÈSE]

ÉLÉMENT : TITRE "DAY TWO" (géant, chevauche le personnage)
Zone → MID-CENTER à BOT-CENTER
X% → 0% | Y% → ≈45% | W% → 100% | H% → ≈25% [HYPOTHÈSE]

ÉLÉMENT : ÉCLAIRS DORÉS
Zone → MID-LEFT et MID-RIGHT (bords)
X% → 0-15% et 85-100% | Y% → ≈15% à ≈75% | [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE     │ OPACITÉ │ TAG
 5 │ Éclairs dorés bordure            │ Screen   │ ≈70-90% │ HYPOTHÈSE
 4 │ Texte (en-tête/titre/bas)        │ Normal   │ 100%    │ FAIT
 3 │ Titre "DAY TWO" (chevauche sujet)│ Normal   │ ≈90-100%│ HYPOTHÈSE (légère transparence apparente sur certaines lettres)
 2 │ Personnage central                │ Normal   │ 100%    │ FAIT
 1 │ Décor architecture + bannières    │ Normal   │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — support statique, bien que la mention "LIVE" + icônes plateformes suggère un
usage réel en story/reel animé dans le contexte de diffusion de l'organisation [HYPOTHÈSE]

## 9. Effets visuels
Éclairs/étincelles dorées animées en apparence (rendu qui évoque un effet de mouvement figé) le
long des bords [FAIT]
Ciel orageux dramatique en fond, renforce le registre solennel/puissant [FAIT]
Légère transparence du titre qui laisse deviner le personnage/décor derrière certaines lettres,
technique de fusion plutôt qu'une opacité 100% plate [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre blanc sur fond sombre (architecture/ciel) : bon dans l'ensemble [FAIT]
Contraste au niveau de la fusion titre/personnage (zone de transparence) : potentiellement plus
faible, zone à risque si le titre doit rester parfaitement lisible partout [HYPOTHÈSE]
Le personnage central étant petit à l'échelle du cadre, sa lisibilité individuelle (visage,
expression) est réduite au profit du titre et du décor [FAIT]

## 12. Technologies probables
Composition Photoshop avec rendu architectural probablement généré/retouché par IA (cohérence
lumineuse et grain de l'ensemble), personnage réel détouré et intégré [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
L'échelle volontairement écrasante du décor face au personnage (petit dans le cadre) communique
la grandeur/solennité de l'événement sans avoir besoin de texte explicatif — le rapport d'échelle
EST le message.
Le badge horaire en forme de sceau doré transforme une info pratique banale en élément de prestige
cohérent avec le reste de la composition.
Les bannières à symboles (couronne) intègrent le thème de l'événement directement dans le décor
plutôt que de le confier au seul texte.

## 14. Défauts observés
Le titre qui absorbe visuellement le personnage réduit sa présence individuelle — reste à
déterminer si c'est voulu (le décor/l'événement prime sur l'individu) ou un défaut de hiérarchie
[HYPOTHÈSE]
Densité d'effets (éclairs + bannières + décor + titre superposé) proche de la surcharge si le
sujet réel de l'événement est plus sobre que ce traitement ne le suggère [HYPOTHÈSE]

## 15. Éléments à réutiliser
Rapport d'échelle décor/personnage comme outil de communication de grandeur/solennité, sans texte
explicatif nécessaire
Info pratique (horaire) transformée en élément décoratif cohérent (sceau) plutôt qu'un simple texte
Décor porteur de symboles liés au thème réel de l'événement plutôt qu'un fond neutre générique

## 16. Éléments à éviter
Laisser un titre géant absorber totalement la présence du sujet humain sans vérifier que c'est
bien l'intention (sinon corriger l'équilibre décor/titre/personnage)

## 17. Recommandations pour le projet
Le principe "rapport d'échelle décor/sujet comme message" est transposable à toute communication
qui veut évoquer la grandeur d'une institution/d'un événement (cérémonie officielle, remise de
prix, lancement institutionnel) — pas propre au religieux.
Vérifier intentionnellement le niveau de présence voulu pour le sujet humain avant de généraliser
un titre aussi massif.

## 18. Cahier des charges final
Stack suggérée si décliné en web : image hero du décor architectural en haute résolution
(élément le plus coûteux à recréer, mieux vaut pré-rendu), effets d'éclairs en SVG animé léger sur
les bords uniquement (pas sur toute la composition, coût de performance), badge sceau réutilisable
en composant SVG pour toute info pratique à valoriser visuellement.
Reste 100% original — nom d'organisation, personne représentée et texte exact jamais repris.
