# DESIGN REFERENCE — Oil Stain (agence voyage safari Afrique, léopard)
Type input : IMAGE STATIQUE
Domaine observé : Voyage/tourisme safari haut de gamme — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero + début de section suivante visible)
Voir aussi design_reference_south-africa-adventures.md — même thématique safari Afrique, styles
distincts, à consulter ensemble (Section 19).

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : landing page d'une agence de voyage spécialisée safaris/destinations reculées en Afrique
(marque non reproduite) [FAIT]
Type : site vitrine agence de voyage haut de gamme [FAIT]
Objectif supposé : positionner l'agence comme spécialiste de destinations exclusives/difficiles
d'accès, générer du contact [FAIT]
Public cible : voyageurs aisés cherchant de l'exclusivité/l'inédit [HYPOTHÈSE]

## 2. Structure générale
Nav : logo texte à gauche, liens centrés (Home/About us/Destinations/Departures), CTA "Get in
touch" en pilule dorée à droite [FAIT]
Hero : photo plein cadre d'un léopard dans la savane en contre-jour, overlay sombre, titre +
paragraphe descriptif alignés à gauche, carte stylisée de l'Afrique avec points de destination à
droite [FAIT]
Section suivante (fond blanc) : titre "Why choose [marque]" + paragraphe à droite, à gauche 2
photos superposées en cascade (safari privé + navigation vers destinations difficiles) avec
libellés overlay [FAIT]
CTA "Contact us" sous le paragraphe de la 2e section [FAIT]
Ordre de lecture : nav → hero (accroche + carte) → pourquoi nous choisir (photos + argumentaire) →
contact [FAIT]

## 3. Palette graphique
Hero : tons chauds naturels de la savane (brun/doré), léopard en contre-jour sombre [FAIT]
Accent : doré/beige pour le nom de marque et le CTA nav, cohérent avec la tonalité chaude de la
photo [FAIT]
Carte Afrique stylisée : silhouette semi-transparente beige/gris sur la photo, points de repère
blancs [FAIT]
Section blanche : fond blanc pur, texte sombre, cohérent avec un ton plus institutionnel/rassurant
après l'immersion du hero [FAIT]
Principe à retenir : alternance hero immersif sombre/chaud → section argumentaire claire/neutre,
rythme de lecture qui alterne émotion et réassurance factuelle (voir Agents_Bibliotheque_Palettes.md
familles chaudes-terreuses pour le hero, ex. Terre Cuite & Olive, jamais recopier tel quel).

## 4. Typographie
Titre hero ("Welcome to...") : sans-serif regular à medium, majuscules pour le nom de marque en
accent doré, taille généreuse [FAIT]
Sur-titre ("Exclusive journeys to Africa") : sans-serif fine, majuscules, letter-spacing large [FAIT]
Titre section blanche : sans-serif bold, majuscules, taille moyenne-grande [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Carte Afrique stylisée avec points de destination** — élément graphique fonctionnel (pas
décoratif), montre concrètement où l'agence opère plutôt qu'une simple liste texte [FAIT]
**Photos superposées en cascade** — 2 images qui se chevauchent légèrement avec un léger décalage
et une ombre portée, chacune avec un libellé overlay contextuel [FAIT]
**CTA pilule dorée nav** — traitement cohérent entre le CTA de nav et l'accent couleur du hero [FAIT]
États hover/clic : non observable sur image statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : CARTE AFRIQUE STYLISÉE
Zone → TOP-RIGHT à MID-RIGHT
X% → ≈58% | Y% → ≈18% | W% → ≈36% | H% → ≈35% [HYPOTHÈSE]

ÉLÉMENT : TITRE HERO + PARAGRAPHE
Zone → MID-LEFT
X% → ≈4% | Y% → ≈24% | W% → ≈48% | H% → ≈30% [HYPOTHÈSE]

ÉLÉMENT : PHOTOS SUPERPOSÉES (section blanche)
Zone → MID-LEFT (section suivante)
X% → ≈5% | Y% → non applicable au hero | W% → ≈40% | H% → ≈35% [HYPOTHÈSE]
Alignement → 2e photo décalée en bas-droite de la 1re, chevauchement partiel avec ombre
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE     │ OPACITÉ EST. │ TAG
 4 │ Texte + carte Afrique + CTA nav │ Normal   │ 100%         │ FAIT
 3 │ Overlay sombre dégradé (hero)   │ Multiply │ ≈40-55%      │ HYPOTHÈSE
 2 │ Photo léopard contre-jour        │ Normal   │ 100%         │ FAIT
 1 │ (section blanche suivante) fond  │ Normal   │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Les points sur la carte Afrique suggèrent des marqueurs
cliquables vers des pages destination dédiées [HYPOTHÈSE].

## 9. Effets visuels
Contre-jour naturel sur le léopard (photo réelle, pas un effet ajouté), silhouette qui se détache
sur le ciel doré du coucher de soleil [FAIT]
Overlay sombre en dégradé sur la photo hero pour la lisibilité du texte [FAIT]
Ombre portée douce sous les photos superposées de la section blanche [FAIT]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable.

## 11. Accessibilité
Contraste titre blanc sur photo hero : bon [FAIT]
Contraste texte sombre sur fond blanc (section 2) : excellent [FAIT]
Lisibilité des libellés overlay sur les photos superposées : à vérifier selon la zone de la photo
derrière [HYPOTHÈSE]

## 12. Technologies probables
Site probablement Webflow/WordPress avec asset photo professionnel (banque d'images premium ou
séance réelle) [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La carte Afrique stylisée avec points de destination est un élément fonctionnel fort — remplace
une simple liste texte par une visualisation géographique immédiate, cohérent avec un
positionnement "accès à des régions difficiles".
L'alternance hero immersif (émotion) → section blanche argumentaire (réassurance factuelle) est un
rythme de conversion efficace, pas juste deux sections juxtaposées au hasard.
Les photos superposées en cascade avec libellés contextuels racontent une histoire (safari privé →
accès à des destinations difficiles) plutôt que d'illustrer platement un paragraphe.

## 14. Défauts observés
La carte Afrique stylisée, bien que fonctionnelle, reste petite dans la composition — pourrait
gagner en lisibilité de ses points de destination à une taille plus généreuse [HYPOTHÈSE]
Aucune indication de prix ou de fourchette budgétaire visible, cohérent avec un positionnement
"sur-mesure" mais peut freiner un visiteur pressé de comparer [HYPOTHÈSE]

## 15. Éléments à réutiliser
Carte géographique stylisée avec points de repère comme élément fonctionnel plutôt que décoratif,
transposable à tout service ayant une couverture géographique réelle à montrer (Delta Leader's et
son réseau de boutiques reseller, par exemple)
Alternance rythmée immersion émotionnelle (hero) / réassurance factuelle (section suivante)
Photos superposées en cascade avec libellé contextuel pour raconter une progression narrative

## 16. Éléments à éviter
Une carte fonctionnelle trop petite qui nuit à la lisibilité de ses propres points de repère

## 17. Recommandations pour le projet
Le principe "carte stylisée avec points de couverture" est directement transposable à Delta
Leader's pour visualiser le réseau de boutiques reseller sur une carte du Bénin/de la sous-région,
plutôt qu'une simple liste de villes en texte.
Vérifier la taille minimale de lisibilité de toute carte fonctionnelle avant livraison.

## 18. Cahier des charges final
Stack suggérée si web : carte SVG stylisée avec points positionnés en coordonnées relatives
(pas une vraie carte interactive Leaflet/Mapbox nécessairement, un SVG stylisé suffit pour l'effet
recherché), photos en cascade via CSS position relative + z-index + box-shadow.
Reste 100% original — nom de marque et texte exact jamais repris.

## 19. Liens avec autres références
Voir design_reference_south-africa-adventures.md — même thématique (safari Afrique, félin en
sujet photo), traitement structurel différent : celle-ci construit une carte fonctionnelle +
alternance hero/section blanche, l'autre superpose typographie géante directement sur une carte-
silhouette du continent. Les deux prouvent que le sujet "safari Afrique" admet plusieurs
structures très différentes — ne pas les confondre en un seul pattern unique.
