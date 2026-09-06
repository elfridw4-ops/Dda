# DESIGN REFERENCE — Save The Date Tropical (feuillage + script vert)
Type input : IMAGE STATIQUE
Domaine observé : Mariage / faire-part numérique — usage NON restreint
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, format portrait)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, noms des mariés, lieu réel, monogramme ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : "Save the date" de mariage à ambiance tropicale/botanique [FAIT]
Type : faire-part numérique, format portrait [FAIT]
Objectif supposé : annoncer date + lieu du mariage avec une esthétique végétale chaleureuse [FAIT]
Public cible : proches/famille invités [HYPOTHÈSE]
Tenue traditionnelle portée par le marié (coiffe + tenue cérémonielle) — indique un mariage
traditionnel/coutumier en complément ou à la place d'un mariage occidental classique [FAIT]

## 2. Structure générale
Fond clair neutre (mur + lumière naturelle façon fenêtre) avec feuilles de palmier décoratives
disposées dans les 4 coins, cadrant la photo centrale sans la couvrir [FAIT]
Monogramme initiales des mariés en haut, dans un cercle fin, tout petit — signature discrète [FAIT]
Titre "Save the Date" en grand lettrage script/calligraphique très ornemental, occupe une place
centrale importante juste sous le monogramme [FAIT]
Photo du couple (portrait rapproché, regards l'un vers l'autre) au centre, sous le titre [FAIT]
Noms des mariés en serif majuscule très grand, sous la photo — aussi visuellement importants que
le titre script [FAIT]
Date + lieu en petit, tout en bas, dégradé vert en overlay pour assurer la lisibilité sur la photo [FAIT]

## 3. Palette graphique
Fond : blanc cassé/beige clair neutre [FAIT]
Feuillage : vert naturel (photo réelle de plantes, pas un vert graphique plat) [FAIT]
Titre script + monogramme : vert profond, cohérent avec le feuillage environnant [FAIT]
Overlay bas de la photo : dégradé vert qui assure la lisibilité du texte sur l'image [FAIT]
Principe à retenir : un seul accent couleur (vert) qui unifie typographie ET décor botanique réel
— cohérence de teinte entre l'élément graphique (titre) et l'élément photo (feuilles), plutôt que
2 langages visuels séparés.

## 4. Typographie
Titre "Save the Date" : script calligraphique très orné, avec fioritures/queues de lettres
étendues — le plus travaillé des 2 réfs save-the-date de ce lot [FAIT]
Noms des mariés : serif classique majuscule, grande taille, poids visuel proche du titre script
malgré un style totalement différent [FAIT]
Date + lieu : sans-serif simple, petite taille, discret en bas de composition [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Cadrage feuillage aux 4 coins** — les plantes n'entourent que les bords, laissent le centre
(photo + texte) totalement dégagé — technique de cadrage naturel réutilisable [FAIT]
**Monogramme en cercle fin** — signature discrète des mariés, plus subtile qu'un logo plein [FAIT]
**Overlay dégradé pour lisibilité** — bande de couleur en dégradé uniquement en bas de la photo, là
où le texte en a besoin, pas sur toute l'image [FAIT]
**Association tenue traditionnelle + robe occidentale** — mixe deux registres vestimentaires dans
une même photo, reflet d'un choix culturel assumé plutôt qu'un défaut [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : MONOGRAMME
Zone → TOP-CENTER
X% → ≈42% | Y% → ≈4% | W% → ≈16% | H% → ≈6% [HYPOTHÈSE]

ÉLÉMENT : TITRE SCRIPT "SAVE THE DATE"
Zone → TOP-CENTER (sous monogramme)
X% → ≈15% | Y% → ≈12% | W% → ≈70% | H% → ≈18% [HYPOTHÈSE]

ÉLÉMENT : PHOTO COUPLE
Zone → CENTER
X% → ≈8% | Y% → ≈32% | W% → ≈84% | H% → ≈40% [HYPOTHÈSE]

ÉLÉMENT : NOMS DES MARIÉS
Zone → BOT-CENTER (sous photo)
X% → ≈5% | Y% → ≈74% | W% → ≈90% | H% → ≈14% [HYPOTHÈSE]

ÉLÉMENT : DATE + LIEU
Zone → BOT-CENTER (bas de cadre)
X% → ≈10% | Y% → ≈90% | W% → ≈80% | H% → ≈8% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE     │ OPACITÉ │ TAG
 4 │ Texte (monogramme/titre/noms)   │ Normal   │ 100%    │ FAIT
 3 │ Overlay dégradé vert (bas photo)│ Multiply │ ≈40-60% │ HYPOTHÈSE
 2 │ Photo couple                     │ Normal   │ 100%    │ FAIT
 1 │ Fond clair + feuillage coins     │ Normal   │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — support statique.

## 9. Effets visuels
Overlay dégradé colorimétrique localisé (bas de photo uniquement) pour garantir la lisibilité du
texte — technique précise plutôt qu'un assombrissement de toute l'image [FAIT]
Lumière naturelle douce sur la photo, ambiance chaleureuse/intimiste [FAIT]
Aucun glow/blur artificiel détecté [FAIT]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste noms des mariés (blanc) sur overlay vert dégradé : bon grâce à l'assombrissement ciblé [FAIT]
Contraste titre script vert sur fond clair : correct mais le style calligraphique fin pourrait
réduire la lisibilité à très petite taille (vignette) [HYPOTHÈSE]

## 12. Technologies probables
Composition Canva/Photoshop, photo de séance couple + éléments végétaux détourés en overlay [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le cadrage par feuillage aux 4 coins qui laisse le centre totalement dégagé est un principe de
composition élégant et discret — décore sans jamais gêner la lecture.
L'overlay dégradé localisé (seulement où le texte en a besoin) est plus soigné qu'un assombrissement
uniforme de toute la photo.
La cohérence de teinte entre le vert du titre et le vert du feuillage réel unifie texte et photo en
un seul univers visuel.

## 14. Défauts observés
Titre en script très orné pourrait manquer de lisibilité à très petite taille (aperçu mobile,
vignette réseaux sociaux) [HYPOTHÈSE]
Beaucoup de texte a un poids visuel proche (titre script ET noms serif tous deux imposants) — pas
de hiérarchie unique évidente au premier regard [HYPOTHÈSE]

## 15. Éléments à réutiliser
Cadrage décoratif aux 4 coins qui laisse le centre totalement dégagé pour le sujet principal
Overlay dégradé localisé uniquement là où le texte en a besoin, pas sur toute l'image
Cohérence de teinte entre élément graphique (texte) et élément photo (décor réel)

## 16. Éléments à éviter
Faire cohabiter 2 blocs de texte au poids visuel équivalent sans trancher une vraie hiérarchie
Style calligraphique très orné sans vérifier la lisibilité à petite taille/mobile

## 17. Recommandations pour le projet
Le principe de cadrage par éléments décoratifs aux coins (pas seulement du feuillage — pourrait
être tout motif du secteur réel) est transposable à toute photo hero qui a besoin d'un cadrage doux.
Trancher une hiérarchie claire si 2 blocs de texte semblent aussi importants l'un que l'autre.

## 18. Cahier des charges final
Stack suggérée si décliné en digital : image de fond + éléments décoratifs SVG/PNG détourés en
coins, overlay CSS linear-gradient localisé en bas d'image pour la lisibilité du texte.
Reste 100% original — noms des mariés, lieu réel, monogramme et texte exact jamais repris.
