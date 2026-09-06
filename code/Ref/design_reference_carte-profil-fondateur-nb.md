# DESIGN REFERENCE — Carte Profil Fondateur (portrait N&B, fond sombre texturé)
Type input : IMAGE STATIQUE
Domaine observé : Page équipe / portfolio corporate (tech/aérospatial) — usage NON restreint
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
La source montre une PERSONNE RÉELLE IDENTIFIABLE et une marque réelle — nom, marque, bio et
signature réels jamais reproduits ci-dessous, uniquement le principe structurel générique.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : carte "profil dirigeant" au sein d'une page équipe corporate [FAIT]
Source : capture fournie, personne réelle identifiable + marque réelle — non reproduites,
politique droit à l'image/marque [FAIT]
Type : team/about page, carte profil unique dans un carousel probable [FAIT]
Objectif supposé : présenter un dirigeant/fondateur avec bio courte et touche humaine [HYPOTHÈSE]
Public cible : visiteurs corporate cherchant à connaître l'équipe dirigeante [HYPOTHÈSE]

## 2. Structure générale
Nav verticale latérale gauche, texte pivoté 90° (4 libellés : shop/careers/team/about), l'item
actif ("team") en évidence [FAIT]
Logo marque en haut-gauche, au-dessus d'une carte photo rectangulaire cadrée blanc épais,
légèrement décalée/superposée sur un fond sombre texturé (photo floutée d'un engin/architecture
en arrière-plan) [FAIT]
Bloc texte à droite : trait horizontal fin, nom en grand, poste juste dessous en plus petit,
paragraphe bio, signature manuscrite, icônes réseaux sociaux en ligne [FAIT]
Bouton double-flèche (navigation carousel) en bas-droite, accent doré, seul élément de couleur
franche du visuel [FAIT]
Ordre de lecture : nav → logo → portrait → nom/poste → bio → signature → réseaux → nav carousel [FAIT]

## 3. Palette graphique
Fond : anthracite/gris-noir texturé (photo floutée en profondeur) [FAIT]
Carte photo : cadre blanc épais, portrait en noir et blanc contrasté [FAIT]
Texte : blanc pur pour nom/poste/bio [FAIT]
Accent : doré/jaune moutarde, réservé uniquement au bouton de navigation — seul point de couleur
de toute la composition [FAIT]
Principe à retenir : fond neutre sombre + portrait N&B + UN SEUL accent chaud isolé sur l'action
(pas sur le contenu informatif) — hiérarchie claire action/info (voir Agents_Bibliotheque_Palettes.md
famille Graphite & Laiton pour un registre proche, jamais recopier tel quel).

## 4. Typographie
Nom : sans-serif bold, grande taille, blanc [FAIT]
Poste (sous le nom) : sans-serif regular, gris clair, petite taille — hiérarchie de graisse nette [FAIT]
Bio : sans-serif regular, taille standard, plusieurs lignes [FAIT]
Nav latérale : sans-serif condensée, petite taille, pivotée 90° [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Nav verticale pivotée 90°** — libère toute la largeur horizontale pour le contenu principal,
technique rare mais qui a un coût d'accessibilité (Section 11) [FAIT]
**Carte photo cadrée "mat de galerie"** — cadre blanc épais autour d'un portrait N&B, superposé/
décalé sur le fond sombre, évoque une photo encadrée physique plutôt qu'un simple visuel plein
cadre [FAIT]
**Signature manuscrite** — élément d'authenticité rare dans une team page, humanise la fiche [FAIT]
**Bouton carousel accent doré** — seul CTA visible, isolé en bas-droit [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : CARTE PHOTO CADRÉE
Zone → MID-LEFT
X% → ≈12% | Y% → ≈14% | W% → ≈40% | H% → ≈70% [HYPOTHÈSE]

ÉLÉMENT : BLOC NOM + POSTE + BIO
Zone → MID-CENTER à MID-RIGHT
X% → ≈52% | Y% → ≈28% | W% → ≈40% | H% → ≈40% [HYPOTHÈSE]

ÉLÉMENT : NAV VERTICALE PIVOTÉE
Zone → MID-LEFT (bord extrême)
X% → 0% | Y% → ≈35% | W% → ≈5% | H% → ≈40% [HYPOTHÈSE]

ÉLÉMENT : BOUTON CAROUSEL DORÉ
Zone → BOT-RIGHT
X% → ≈88% | Y% → ≈80% | W% → ≈10% | H% → ≈15% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 4 │ Texte + signature + réseaux      │ Normal │ 100%    │ FAIT
 3 │ Bouton carousel doré             │ Normal │ 100%    │ FAIT
 2 │ Carte photo cadrée (portrait N&B)│ Normal │ 100%    │ FAIT
 1 │ Fond texturé sombre flouté       │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Bouton double-flèche suggère navigation entre plusieurs profils
d'équipe [HYPOTHÈSE].

## 9. Effets visuels
Fond en profondeur de champ flouté (bokeh léger), détache la carte photo nette au premier plan [FAIT]
Cadre blanc épais façon mat de galerie physique — rupture volontaire avec le fond digital sombre [FAIT]
Aucun glow/glassmorphism détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste texte blanc sur fond sombre : bon [FAIT]
Nav verticale pivotée 90° : lisibilité réduite par rapport à une nav horizontale classique, texte
tourné moins scannable en un coup d'œil — point d'attention si repris [HYPOTHÈSE]
Bouton carousel accent doré : bon contraste, bien détaché [FAIT]

## 12. Technologies probables
Site portfolio probablement Framer/Webflow, portrait retouché en N&B haut contraste [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La signature manuscrite ajoute une touche d'authenticité rare dans une page équipe corporate,
au-delà du simple portrait+bio attendu.
Le cadre photo façon "mat de galerie" contraste intelligemment avec le fond digital sombre —
donne un rendu éditorial plutôt qu'un simple crop plein cadre.
Un seul accent couleur réservé strictement à l'action (bouton carousel) clarifie immédiatement
ce qui est cliquable vs informatif.

## 14. Défauts observés
Nav verticale pivotée 90° sacrifie la lisibilité rapide au profit de l'espace horizontal — à
questionner si l'accessibilité est une priorité du projet [HYPOTHÈSE]
Un seul portrait par vue — scalabilité à vérifier si l'équipe réelle est nombreuse (plusieurs
dizaines de fiches à faire défiler) [HYPOTHÈSE]

## 15. Éléments à réutiliser
Cadre photo "mat de galerie" (bordure blanche épaisse) sur fond sombre pour un rendu éditorial
Signature manuscrite (ou équivalent générique) comme touche d'authenticité humaine
Un seul accent couleur réservé à l'action, jamais au contenu informatif

## 16. Éléments à éviter
Nav pivotée 90° sans vérifier l'impact accessibilité/lisibilité avant de la généraliser
Reproduire une signature réelle d'un tiers — toujours un élément générique/fictif si repris

## 17. Recommandations pour le projet
Transposable à toute page équipe qui veut un rendu éditorial premium plutôt qu'une grille de
photos plates. Si nav verticale pivotée reprise : tester lecteur d'écran + lisibilité réelle
avant validation, ne pas la garder par pur effet de style.

## 18. Cahier des charges final
Stack suggérée : composant TeamCard (image cadrée + nom/poste/bio + signature générique SVG),
nav verticale en CSS `writing-mode: vertical-lr` avec libellé accessible caché en horizontal
pour lecteur d'écran (`aria-label`).
Reste 100% original — personne réelle, marque réelle, bio et signature réelles jamais repris.
