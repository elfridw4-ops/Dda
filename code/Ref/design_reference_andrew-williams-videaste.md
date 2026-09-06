# DESIGN REFERENCE — Andrew Williams (portfolio vidéaste, N&B mockup multi-device)
Type input : IMAGE STATIQUE
Domaine observé : Portfolio vidéaste/créatif — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, présentation mockup laptop + mobile côte à côte)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de personne réelle ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : présentation portfolio (mockup Dribbble-style) d'un site de vidéaste [FAIT]
Type : image de présentation de projet (pas le site lui-même) — montre le site sur laptop +
mobile côte à côte, avec titre de présentation en haut ("Videographer Portfolio") [FAIT]
Objectif supposé : présenter un travail de design de portfolio à des clients/recruteurs
(présentation type Behance/Dribbble) [HYPOTHÈSE]
Public cible : audience design professionnelle (clients potentiels, communauté designers) [HYPOTHÈSE]

## 2. Structure générale
Cadre englobant : fond noir avec un cadre arrondi gris foncé plus clair qui contient les 2
mockups d'appareils [FAIT]
Titre de présentation en haut ("Videographer Portfolio") + petit logo/monogramme au-dessus [FAIT]
Mockup laptop à gauche : nav (About/Work/Linkedin/Instagram), portrait sombre + nom en très grand
en bas-gauche, texte descriptif à droite [FAIT]
Mockup mobile à droite : même contenu adapté en vertical, nom empilé, texte en dessous [FAIT]
Ordre de lecture : titre présentation → device laptop → device mobile (comparaison desktop/mobile
côte à côte) [FAIT]

## 3. Palette graphique
Fond global : noir profond [FAIT]
Cadre englobant : gris anthracite légèrement plus clair que le fond, délimite la zone de
présentation [FAIT]
Contenu du site (dans les mockups) : noir et blanc quasi total, portrait en tons de gris [FAIT]
Texte : blanc pur sur fond noir/gris sombre [FAIT]
Principe à retenir : monochrome absolu du fond de présentation AU contenu du site lui-même — pas
de rupture colorimétrique entre le "cadre de présentation" et le "produit présenté", cohérence
totale (voir Agents_Bibliotheque_Palettes.md Brume & Noir / Mur de Pierre Noire pour un registre
proche, jamais recopier tel quel).

## 4. Typographie
Nom "Andrew Williams" : sans-serif condensée bold, très grande taille, majuscules [FAIT]
Titre de présentation ("Videographer Portfolio") : sans-serif bold, majuscules, taille moyenne [FAIT]
Nav et texte descriptif : sans-serif regular, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Mockup multi-device côte à côte** — laptop + mobile dans un même cadre de présentation, permet
de juger la cohérence responsive d'un seul coup d'œil plutôt que 2 images séparées [FAIT]
**Nom en typo massive superposée au portrait** — technique similaire à d'autres refs de la
bibliothèque (titre qui domine visuellement le sujet photo) mais ici en monochrome strict [FAIT]
**Nav minimale texte + liens sociaux** — About/Works/liens sociaux, pas de CTA plein visible [FAIT]
États hover/clic : non observable, mockup de présentation statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE DE PRÉSENTATION
Zone → TOP-CENTER
X% → ≈15% | Y% → ≈8% | W% → ≈70% | H% → ≈8% [HYPOTHÈSE]

ÉLÉMENT : MOCKUP LAPTOP
Zone → MID-LEFT
X% → ≈8% | Y% → ≈30% | W% → ≈55% | H% → ≈55% [HYPOTHÈSE]

ÉLÉMENT : MOCKUP MOBILE
Zone → MID-RIGHT (chevauche/déborde légèrement du laptop)
X% → ≈58% | Y% → ≈42% | W% → ≈28% | H% → ≈50% [HYPOTHÈSE]
Alignement → décalé plus bas et devant le laptop, crée une profondeur de superposition
```

## 5ter. Pile de calques
```
N° │ CALQUE                  │ MODE   │ OPACITÉ │ TAG
 4 │ Titre présentation       │ Normal │ 100%    │ FAIT
 3 │ Mockup mobile (devant)   │ Normal │ 100%    │ FAIT
 2 │ Mockup laptop (derrière) │ Normal │ 100%    │ FAIT
 1 │ Fond noir + cadre gris   │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image de présentation statique, pas le site interactif réel.

## 9. Effets visuels
Aucun effet numérique ajouté sur la présentation elle-même — sobriété totale, laisse le contenu
du site (déjà sombre et contrasté) porter l'attention [FAIT]
Léger effet de profondeur par la superposition mobile devant laptop (ombre implicite, pas de vraie
ombre portée marquée détectée) [HYPOTHÈSE]

## 10. Responsive
Cette réf montre PRÉCISÉMENT une comparaison desktop/mobile — cas rare où le responsive est
directement observable dans l'input même s'il reste une image statique. Cohérence confirmée entre
les 2 formats (même contenu, même monochrome, adaptation verticale du nom) [FAIT]

## 11. Accessibilité
Contraste blanc sur noir : excellent sur les 2 devices [FAIT]
Nav en petit texte : à vérifier la cible tactile sur la version mobile réelle [HYPOTHÈSE]

## 12. Technologies probables
Site probablement React/Next.js avec vidéo ou image plein cadre en hero, présentation mockup
probablement générée via un outil dédié (Mockuuups, Shots, ou Figma plugin) [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Montrer laptop ET mobile côte à côte dans une seule image de présentation permet de juger la
cohérence de marque sur les 2 formats sans avoir à imaginer la transition — argument de vente
fort pour un portfolio qui veut prouver sa maîtrise du responsive.
Le monochrome strict maintenu du cadre de présentation jusqu'au contenu du site lui-même crée une
unité totale, aucune rupture qui distrairait du sujet (le travail présenté).
Le nom en typo massive superposée au portrait reste lisible malgré le fond sombre, grâce au
contraste blanc pur bien maîtrisé.

## 14. Défauts observés
Aucun contexte (client, date, type de projet) visible autour de la présentation — pourrait
manquer d'information si utilisée hors contexte d'une plateforme portfolio (Dribbble/Behance) qui
fournit ces métadonnées autour [HYPOTHÈSE]

## 15. Éléments à réutiliser
Présentation multi-device côte à côte pour prouver la cohérence responsive d'un seul coup d'œil
Monochrome strict maintenu du cadre de présentation jusqu'au contenu réel, sans rupture
Nom/titre en typo massive superposée au sujet photo, technique cohérente avec d'autres refs de la
bibliothèque (voir design_reference_flyer-god-chaser-foret.md pour le même principe en flyer)

## 16. Éléments à éviter
Présenter un travail sans contexte minimal (type de projet, date) si utilisé hors d'une
plateforme qui fournit déjà ces métadonnées autour de l'image

## 17. Recommandations pour le projet
Le principe de présentation multi-device côte à côte est directement applicable à toute
présentation de travail client (avant livraison à Hora ou présentation à un client Delta
Leader's) pour prouver la cohérence desktop/mobile en un coup d'œil.

## 18. Cahier des charges final
Stack suggérée si le site lui-même est recréé : hero plein cadre avec portrait + nom en typo
overlay (voir aussi Agents_Traitement_Visuel.md Section 4 pour la technique sujet+typo
superposés), monochrome strict du header au footer.
Reste 100% original — nom de personne réelle jamais repris.
