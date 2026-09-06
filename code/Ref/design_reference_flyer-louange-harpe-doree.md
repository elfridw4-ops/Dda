# DESIGN REFERENCE — Flyer Célébration de Louange (harpe dorée, rayons chauds)
Type input : IMAGE STATIQUE
Domaine observé : Église / célébration mi-annuelle de louange — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait ~4:5)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom d'organisation, orateur, adresse ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : flyer d'une célébration de louange à mi-année, organisation religieuse (nom non reproduit) [FAIT]
Type : flyer réseaux sociaux, illustration/rendu 3D élégant + typographie éditoriale [FAIT]
Objectif supposé : annoncer un événement musical/spirituel avec un positionnement haut de gamme
(dress code formel) [FAIT]
Public cible : membres d'une communauté religieuse locale, événement présentiel [FAIT]

## 2. Structure générale
En-tête centré : logo institutionnel + nom complet organisation + antenne locale, mention
"présente" [FAIT]
Titre principal en 2 lignes empilées, mélange serif script (mot 1) + serif display (mots 2-3),
centré [FAIT]
Instrument (harpe dorée ornementée) positionné en diagonale, occupe une large portion centrale,
posé sur un fond de rayons de lumière chaude concentriques [FAIT]
Mention orateur/responsable juste sous le titre, en retrait à droite de l'instrument [FAIT]
Badge "dress code" en pastille détachée à droite, forme organique distincte du reste [FAIT]
Bas de flyer : adresse complète + date + heure, alignés centre [FAIT]
Ordre de lecture : organisation → titre → qui dirige → tenue attendue → où/quand [FAIT]

## 3. Palette graphique
Fond : dégradé chaud rayonnant (crème/pêche/orangé) en éventail depuis un point de lumière,
lumineux et doux [FAIT pour la tonalité, HYPOTHÈSE pour les HEX exacts]
Titre : dégradé brun-doré, cohérent avec la teinte de l'instrument [FAIT]
Instrument : doré/bronze avec ornementation sculptée, rendu métallique riche [FAIT]
Badge dress code : orange/pêche plein, texte blanc, seul aplat de couleur franc du visuel [FAIT]
Principe à retenir : palette monochrome chaude du fond au titre à l'instrument — un seul univers
de teinte du début à la fin, renforcé par un unique badge en aplat contrastant (voir
Agents_Bibliotheque_Palettes.md famille Soie Ivoire ou Miel & Anthracite pour un registre proche).

## 4. Typographie
Mot 1 du titre : script élégant cursif fin [FAIT]
Mots 2-3 du titre : serif display large, majuscules, poids visuel dominant [FAIT]
Mention orateur : sans-serif + serif mixte, hiérarchie nom (gros) / fonction (petit) [FAIT]
Adresse/date bas : sans-serif regular, discret [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Instrument comme sujet central unique** — pas de photo de personne, l'objet symbolique porte
seul toute la charge visuelle et thématique (musique/louange) [FAIT]
**Rayons de lumière concentriques** — structure le fond autour de l'instrument comme un halo,
renforce le caractère "sacré/lumineux" sans texte explicite [FAIT]
**Badge dress code en pastille détachée** — forme organique qui casse la rigidité du reste
(rectangles/alignements droits), attire l'œil sur une info pratique importante [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : EN-TÊTE (logo + nom organisation)
Zone → TOP-CENTER
X% → ≈15% | Y% → ≈2% | W% → ≈70% | H% → ≈10% [HYPOTHÈSE]

ÉLÉMENT : TITRE 2 LIGNES
Zone → TOP-CENTER (sous en-tête)
X% → ≈10% | Y% → ≈14% | W% → ≈80% | H% → ≈18% [HYPOTHÈSE]

ÉLÉMENT : HARPE (sujet central)
Zone → MID-CENTER, diagonale
X% → ≈5% | Y% → ≈32% | W% → ≈85% | H% → ≈35% [HYPOTHÈSE]

ÉLÉMENT : BADGE DRESS CODE
Zone → MID-RIGHT
X% → ≈78% | Y% → ≈58% | W% → ≈20% | H% → ≈10% [HYPOTHÈSE]

ÉLÉMENT : ADRESSE + DATE (bas)
Zone → BOT-CENTER
X% → ≈10% | Y% → ≈88% | W% → ≈80% | H% → ≈10% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 4 │ Texte (en-tête/titre/adresse)    │ Normal │ 100%    │ FAIT
 3 │ Badge dress code (détaché)       │ Normal │ 100%    │ FAIT
 2 │ Harpe dorée (sujet central)      │ Normal │ 100%    │ FAIT
 1 │ Fond rayons lumineux dégradé     │ Screen │ 100%    │ HYPOTHÈSE (mode apparent sur le halo)
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — support statique.

## 9. Effets visuels
Rayons de lumière concentriques façon halo, structure tout le fond autour de l'instrument [FAIT]
Rendu métallique riche sur la harpe (reflets, ornementation sculptée détaillée) [FAIT]
Aucun glow numérique ni glassmorphism au sens UI — tout reste dans un registre illustration
lumineuse [FAIT]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste titre doré sur fond pêche clair : correct mais pas maximal, le dégradé chaud sur chaud
réduit le contraste par rapport à un titre foncé sur fond clair classique [HYPOTHÈSE]
Contraste badge dress code (blanc sur orange) : bon [FAIT]
Contraste adresse/date (probablement sombre sur zone plus foncée en bas) : bon si la zone basse
du dégradé est assez sombre [HYPOTHÈSE]

## 12. Technologies probables
Rendu 3D ou illustration très soignée pour la harpe (ornementation détaillée cohérente),
composition finale Photoshop/Canva pour le texte et les rayons [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Utiliser l'instrument seul comme sujet (sans photo de personne) élève immédiatement le
positionnement vers le symbolique/intemporel plutôt que vers l'anecdotique.
La cohérence monochrome chaude du fond à l'instrument au titre crée une unité visuelle rare et
soignée, plus proche d'un visuel de marque premium que d'un flyer religieux standard.
Le badge dress code en forme organique détachée est un détail de composition qui casse
intelligemment la rigidité générale sans désorganiser la hiérarchie.

## 14. Défauts observés
Le contraste titre/fond, bien que cohérent stylistiquement, reste dans une zone de confort visuel
plutôt que de lisibilité maximale — à surveiller si le titre doit être lu très vite [HYPOTHÈSE]
Aucune information sur qui prêche/anime concrètement au-delà d'un nom et d'une fonction — pas de
hiérarchie d'intervenants multiples si l'événement en compte plusieurs [FAIT sur l'absence]

## 15. Éléments à réutiliser
Objet symbolique seul comme sujet central plutôt qu'une photo de personne — élève le
positionnement pour un événement qui veut du prestige/de l'intemporalité
Palette monochrome chaude cohérente fond/sujet/titre comme signature d'unité visuelle
Badge d'info pratique en forme organique détachée pour casser une composition trop rigide

## 16. Éléments à éviter
Un dégradé titre-sur-fond de la même famille de teinte sans vérifier le contraste réel — risque de
lisibilité en zone de confort plutôt qu'en contraste maximal

## 17. Recommandations pour le projet
Le principe "objet symbolique seul + palette monochrome cohérente" est transposable à tout
événement qui veut un positionnement premium/intemporel (concert classique, gala, cérémonie) —
pas propre au religieux.
Vérifier le contraste réel titre/fond avec un outil avant livraison si la lisibilité rapide est
un enjeu (Agents_Standards_Interface_Web.md Section 7, privilégier APCA).

## 18. Cahier des charges final
Stack suggérée si décliné en web : image hero du sujet symbolique en haute résolution (rendu 3D
coûteux à refaire en temps réel), rayons de lumière en CSS radial-gradient statique ou légèrement
animé (rotation très lente), badge en composant réutilisable avec forme organique SVG.
Reste 100% original — nom d'organisation, orateur réel, adresse et texte exact jamais repris.
