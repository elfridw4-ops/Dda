# DESIGN REFERENCE — Travel Tokyo (landing agence voyage)
Type input : IMAGE STATIQUE
Domaine observé : Landing page / agence de voyage — usage NON restreint à ce domaine
Niveau confiance global : ≈ 55% FAIT / 40% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (1 capture, page complète visible du haut jusqu'à section vidéo)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, langue, marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : Travel Tokyo — nom de projet non fourni, capture montre logo "TRAVEL" [FAIT]
Source : capture écran fournie par l'utilisateur, origine (template/site réel) non précisée [NON OBSERVÉ]
Type : Landing page — site vitrine agence de voyage [FAIT]
Objectif supposé : présenter/vendre des circuits touristiques au Japon [HYPOTHÈSE]
Public cible : voyageurs dans la langue locale du marché visé — langue observée : russe,
non pertinente à reproduire, adapter à la langue réelle du public cible du nouveau projet [FAIT]
Durée vidéo : non applicable (image statique)

## 2. Structure générale
Nav horizontale fixe en tête : logo court (icône + nom de marque) à gauche, liens de navigation
centrés dans la langue locale du public cible visé, icône recherche à droite [FAIT]
(langue observée sur cette réf : russe — non pertinente à reproduire)
Hero plein écran : photo Torii gate (Japon) en fond, overlay sombre, titre "VISIT TOKYO" aligné bas-gauche en très gros [FAIT]
Indicateur vertical numéroté (01 à 05) aligné à droite du hero, "03" affiché en grand = slide actif [FAIT]
3 blocs texte + CTA "ПОДРОБНЕЕ →" alignés horizontalement sous le hero, séparateur orange sous le premier bloc [FAIT]
Section "ПОПУЛЯРНЫЕ ТУРЫ" (tours populaires) : titre centré, grille de 4 cards portrait pleine hauteur [FAIT]
Section immersive pleine largeur "TRAVEL AND INSPIRE YOUR LIFE" : fond photo ciel étoilé/aurore, bouton play + 2 miniatures vidéo en bas [FAIT]
Largeur de contenu desktop ≈ 1200-1400px [HYPOTHÈSE]
Ordre de lecture : nav → titre hero → 3 CTA → grille tours → section vidéo immersive [FAIT]

## 3. Palette graphique
Fond dominant bleu-nuit/anthracite, ≈ #1A1D24 [HYPOTHÈSE — HEX approximatif, pas de sampling pixel possible]
Accent orange/terracotta brûlé (point du logo, soulignement CTA), ≈ #C1502E [HYPOTHÈSE]
Texte principal blanc/blanc cassé sur fond sombre [FAIT]
Section finale : dégradé violet-rose vers bleu nuit (effet aurore/galaxie), ≈ #6B4C8A → #2B2560 [HYPOTHÈSE]
Texte secondaire (sous-titres cards) gris clair, contraste plus faible que le blanc pur [FAIT]

## 4. Typographie
Titre "VISIT TOKYO" : sans-serif condensée, graisse bold à black, majuscules, très grande taille [FAIT]
Libellés nav/CTA : petite taille, majuscules, letter-spacing large [FAIT]
Numéros de slide (01-05) : graisse light/regular, contraste volontaire avec le titre bold [FAIT]
Police exacte non identifiable depuis l'image [NON OBSERVÉ]

## 5. Composants UI
**Navbar** — transparente sur le hero, probablement sticky au scroll [HYPOTHÈSE], hover/clic non observable
**Cards tours** — image plein cadre ratio portrait, titre + sous-texte en bas de card, 4 cards en grille horizontale [FAIT], état hover/clic non observable sur image statique
**CTA texte + flèche** — pas de fond plein, seulement un soulignement orange sous le premier [FAIT]
**Indicateur de slide** — numéros empilés verticalement, l'actif est agrandi avec un trait horizontal [FAIT]
**Bouton play** — rond, bordure fine, icône triangle centrée [FAIT]
Dimensions précises de chaque composant : non mesurables sur cette résolution de capture [NON OBSERVÉ]

## 5bis. Grille de positionnement — verrouillage adapté

```
ÉLÉMENT : TITRE HERO ("destination en 2 mots")
Zone      → BOT-LEFT
X%        → ≈8% depuis bord gauche [HYPOTHÈSE]
Y%        → ≈62% depuis bord supérieur (base du bloc titre) [HYPOTHÈSE]
W%        → ≈45% [HYPOTHÈSE]
H%        → ≈22% [HYPOTHÈSE]
Alignement → aligné à gauche avec le logo nav ; ne chevauche pas l'indicateur de slide (droite)

ÉLÉMENT : INDICATEUR DE SLIDE NUMÉROTÉ
Zone      → MID-RIGHT
X%        → ≈92% [HYPOTHÈSE]
Y%        → ≈35% à 55% (pile verticale 01-05) [HYPOTHÈSE]
W%        → ≈5% [HYPOTHÈSE]
H%        → ≈20% (pile complète) [HYPOTHÈSE]
Alignement → aligné verticalement au centre droit, indépendant du titre

ÉLÉMENT : GRILLE CARDS TOURS
Zone      → BOT-CENTER (section dédiée, hors hero)
X%        → 0% à 100% (pleine largeur, 4 colonnes égales) [HYPOTHÈSE]
Y%        → non applicable au hero — section suivante après scroll
W%        → 25% par card [HYPOTHÈSE]
H%        → ratio portrait, ≈150% de la largeur de card [HYPOTHÈSE]
```

## 5ter. Pile de calques — verrouillage adapté

```
PILE DE CALQUES — Hero Torii
N° │ NOM DU CALQUE          │ MODE APPARENT       │ OPACITÉ EST. │ TAG
───┼─────────────────────────┼─────────────────────┼──────────────┼──────
 3 │ Titre + nav + CTA texte │ Normal              │ 100%         │ FAIT
 2 │ Overlay sombre dégradé  │ Multiply (apparent) │ ≈50-60% bas  │ HYPOTHÈSE
 1 │ Photo Torii (fond)      │ Normal              │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique, aucune animation observable.

## 7. Chronologie
NON APPLICABLE — input image statique, aucune animation observable.

## 8. Interactions
Hover, clic, focus clavier : non observables sur image statique
Présence d'un indicateur 01-05 suggère un carousel/slider hero → interaction swipe ou clic probable [HYPOTHÈSE]
Scroll vertical classique, sections empilées les unes sous les autres [HYPOTHÈSE]
Responsive/transitions : non observables

## 9. Effets visuels
Overlay sombre en dégradé sur la photo hero (assombrissement renforcé en bas de l'image) [FAIT]
Fond "étoilé/aurore" de la dernière section = probablement une photographie, pas un effet CSS généré [HYPOTHÈSE]
Aucun glassmorphism, blur ou glow détecté [NON OBSERVÉ]

## 10. Responsive
Un seul breakpoint fourni (desktop) → comportement tablette/mobile non observable.

## 11. Accessibilité
Contraste texte blanc sur fond sombre : globalement bon à vue [HYPOTHÈSE]
Contraste du texte gris clair sous les cards tours : plus faible, à vérifier avec un outil (non mesuré ici) [HYPOTHÈSE]
Taille des zones cliquables (CTA texte seul, pas de bouton plein) : potentiellement sous la cible tactile recommandée [HYPOTHÈSE]
Navigation clavier / focus visible : non observable

## 12. Technologies probables
Framework : non confirmé — pourrait être HTML/CSS statique, WordPress ou React [HYPOTHÈSE]
Librairie carousel : probable (type Swiper.js) vu l'indicateur de slide numéroté [HYPOTHÈSE]
Icônes : probablement SVG custom ou icon font [HYPOTHÈSE]
Police : non identifiée [NON OBSERVÉ]

## 13. Ce qui rend l'interface exceptionnelle
Photo plein écran forte (Torii) crée une immersion immédiate et pose le sujet sans ambiguïté.
Indicateur de slide vertical numéroté (01-05) : idée plus distinctive que les points génériques ronds.
Cohérence globale sombre/épuré adaptée à un positionnement voyage haut de gamme.

## 14. Défauts observés
Les 3 blocs sous le hero répètent un texte identique ("интересные для читателей") → contenu manifestement placeholder/lorem non finalisé [FAIT]
Titre hero dans une langue différente de celle utilisée pour le reste de la navigation →
incohérence linguistique non résolue, probablement contenu non finalisé [FAIT]
Hiérarchie entre les 3 CTA identiques et peu différenciée — aucun ne ressort comme prioritaire [FAIT]

## 15. Éléments à réutiliser
Indicateur de slide vertical numéroté (alternative au dot-carousel générique)
Immersion hero plein écran avec overlay sombre progressif
Section vidéo pleine largeur avec miniatures secondaires en bas, plutôt qu'un simple embed

## 16. Éléments à éviter
Livrer du contenu placeholder identique répété sur plusieurs blocs
Mélanger deux langues différentes entre le titre et la navigation sans intention éditoriale claire

## 17. Recommandations pour le projet
Adapter le concept d'immersion plein écran à un sujet réel et précis (pas "voyage" générique) selon Agents_Direction_Artistique.md Section 2.
Remplacer tout contenu lorem par du vrai copywriting avant livraison (Section 7 du même fichier).
Conserver la logique de slide numéroté seulement si le contenu est réellement une séquence/un carousel de destinations ou produits — sinon l'éviter (règle anti-numérotation-décorative).

## 18. Cahier des charges final
Stack suggérée : React + une lib de transition (Framer Motion) pour le slide hero, Tailwind pour la grille de cards.
Respecter un contraste AA minimum sur les textes secondaires (actuellement à vérifier).
Ne jamais reproduire la photographie du Torii telle quelle (droit d'auteur tiers) — utiliser une photo originale ou libre de droits sur le sujet réel du projet.
Reste 100% original, inspiré uniquement des principes structurels ci-dessus.
