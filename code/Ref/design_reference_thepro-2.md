# DESIGN REFERENCE — THEPRO (template portfolio développeur/designer)
Type input : IMAGE STATIQUE
Domaine observé : Template portfolio dev/designer — usage NON restreint à ce domaine
Niveau confiance global : ≈ 60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (hero + section "Qui suis-je" + début "My Services" visibles)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, langue, marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : THEPRO — template portfolio (nom "Mary Smith" utilisé comme contenu placeholder) [FAIT]
Source : capture fournie par l'utilisateur, ressemble à un template commercial (ThemeForest ou similaire) [HYPOTHÈSE]
Type : Portfolio / site vitrine développeur-designer [FAIT]
Objectif supposé : template générique à personnaliser pour un profil dev/designer [HYPOTHÈSE]
Public cible : freelances tech cherchant un site vitrine rapide à déployer [HYPOTHÈSE]
Durée vidéo : non applicable (image statique)

## 2. Structure générale
Nav top : logo "THEPRO" (icône feuille verte) à gauche, liens Home/Resume/Portfolio/Blog/Contact à droite [FAIT]
Hero 2 colonnes : texte à gauche ("Hi There! I am Developer" avec curseur clignotant suggéré, "I make the complex simple.", bouton "Contact Me"), photo portrait grand format à droite (noir et blanc) [FAIT]
Bloc contact rapide sous le hero : Email / Phone / Location en 3 colonnes séparées par des traits verticaux [FAIT]
Section "Who am I?" : photo carrée à gauche, texte bio à droite avec identité (Nom/Âge/Ville/Email) + bouton "Download CV" [FAIT]
Section "My Services" : titre + immense texte fantôme "SERVICES" en fond, grille de 6 cards (2 lignes x 3 colonnes) avec icône + titre + texte [FAIT]
Indicateur de scroll (icône souris) en bas à droite du hero [FAIT]
Largeur de contenu desktop ≈ 1140-1200px [HYPOTHÈSE]

## 3. Palette graphique
Fond dominant noir/gris très sombre, ≈ #101010 [HYPOTHÈSE]
Accent vert vif unique pour tous les éléments interactifs (bouton, icônes, liens), ≈ #2ECC71 [HYPOTHÈSE]
Texte principal blanc, texte secondaire gris moyen [FAIT]
Portrait hero traité en noir et blanc (désaturé), contrastant avec l'accent vert du reste de la page [FAIT]

## 4. Typographie
Titre hero "I am Developer" : sans-serif bold, taille large, blanc [FAIT]
Sous-titre "Hi There!" : sans-serif regular, plus petit, au-dessus du titre [FAIT]
Texte "SERVICES" en fond de section : display bold très grand, opacité réduite (effet filigrane) [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Bouton CTA plein** ("Contact Me", "Download CV") — fond vert, texte sombre/blanc, coins légèrement arrondis [FAIT], hover non observable
**Bloc contact 3 colonnes** — séparateurs verticaux fins, icône ou label + valeur par colonne [FAIT]
**Cards services** — fond légèrement plus clair que le fond de section, icône ligne verte en haut, titre + texte court, pas de bordure visible, coins arrondis [FAIT]
**Indicateur scroll** — icône souris + trait vertical, position fixe coin bas droit du hero [FAIT]
**Texte filigrane géant** ("SERVICES") — purement décoratif, superposé derrière le titre de section [FAIT]
États hover/clic/disabled : non observables sur image statique

## 5bis. Grille de positionnement — verrouillage adapté

```
ÉLÉMENT : BLOC TEXTE HERO (gauche)
Zone      → MID-LEFT
X%        → ≈6% [HYPOTHÈSE]
Y%        → ≈30% [HYPOTHÈSE]
W%        → ≈40% [HYPOTHÈSE]
H%        → ≈25% [HYPOTHÈSE]

ÉLÉMENT : PORTRAIT HERO (droite, N&B)
Zone      → MID-RIGHT
X%        → ≈50% [HYPOTHÈSE]
Y%        → ≈5% [HYPOTHÈSE]
W%        → ≈48% [HYPOTHÈSE]
H%        → ≈55% [HYPOTHÈSE]

ÉLÉMENT : TEXTE FILIGRANE "SERVICES" (fond de section)
Zone      → CENTER de la section services
X%        → ≈5% [HYPOTHÈSE]
Y%        → ≈-5% (déborde légèrement au-dessus du titre réel) [HYPOTHÈSE]
W%        → ≈90% [HYPOTHÈSE]
H%        → ≈20% [HYPOTHÈSE]
Alignement → centré, derrière le titre "My Services" (voir pile de calques)
```

## 5ter. Pile de calques — verrouillage adapté

```
PILE DE CALQUES — Section "My Services"
N° │ NOM DU CALQUE           │ MODE APPARENT │ OPACITÉ EST. │ TAG
───┼──────────────────────────┼───────────────┼──────────────┼──────
 3 │ Titre "My Services" réel │ Normal        │ 100%         │ FAIT
 2 │ Grille 6 cards           │ Normal        │ 100%         │ FAIT
 1 │ Texte filigrane "SERVICES"│ Normal       │ ≈8-15%       │ HYPOTHÈSE
```
Principe clé : le filigrane est le calque LE PLUS BAS visuellement parlant (derrière le contenu réel),
simple texte à opacité très réduite — pas d'effet de flou ou de masque détecté.

## 6. Animations
NON APPLICABLE — input image statique, aucune animation observable. (Le curseur clignotant suggéré dans "I am Developer" est une hypothèse de comportement, non une observation directe de mouvement.)

## 7. Chronologie
NON APPLICABLE — input image statique, aucune animation observable.

## 8. Interactions
Hover/clic/focus clavier : non observables
Indicateur de scroll suggère une navigation verticale classique section par section [HYPOTHÈSE]
Nav top suggère ancres ou pages séparées (Home/Resume/Portfolio/Blog/Contact) — structure multi-page probable vu "Blog" en item de nav [HYPOTHÈSE]

## 9. Effets visuels
Photo hero en noir et blanc désaturé contrastant avec le reste de la page en couleur [FAIT]
Texte filigrane géant en fond de section (opacité réduite) [FAIT]
Aucun glassmorphism, blur ou glow détecté [NON OBSERVÉ]

## 10. Responsive
Un seul breakpoint fourni (desktop) → comportement tablette/mobile non observable.

## 11. Accessibilité
Contraste vert sur fond noir : bon pour les CTA, à vérifier pour le texte de lien plus petit [HYPOTHÈSE]
Texte filigrane "SERVICES" à faible opacité : risque de contraste insuffisant s'il portait de l'information (ici purement décoratif, donc impact accessibilité limité) [HYPOTHÈSE]
Navigation clavier / focus visible : non observable

## 12. Technologies probables
Structure typique de template HTML/CSS/Bootstrap ou WordPress premium, non confirmé [HYPOTHÈSE]
Icônes de services : probablement une icon font (Font Awesome ou Flaticon) vu le style ligne uniforme [HYPOTHÈSE]
Police : non identifiée [NON OBSERVÉ]

## 13. Ce qui rend l'interface exceptionnelle
Contraste photo N&B vs reste en couleur crée une accroche visuelle simple et efficace.
Texte filigrane géant en fond de section est une idée réutilisable pour hiérarchiser sans surcharger.
Bloc contact 3 colonnes juste sous le hero = information pratique immédiatement accessible.

## 14. Défauts observés
Contenu manifestement placeholder ("Lorem ipsum...", nom "Mary Smith" alors que le hero dit "I am Developer" sans genre précisé) — incohérence entre les identités affichées [FAIT]
Grille "My Services" = pattern très reconnaissable de template générique (6 cards 2x3, icône + titre + lorem) sans différenciation forte [FAIT]
Le nom du template "THEPRO" reste visible dans le logo — signe que ce n'est pas encore personnalisé pour un vrai client [FAIT]

## 15. Éléments à réutiliser
Contraste photo désaturée (N&B) vs reste de la page en couleur, comme accroche visuelle simple
Texte filigrane géant en fond de section pour hiérarchiser sans ajouter d'éléments graphiques

## 16. Éléments à éviter
La grille de services 6 cards identiques (icône+titre+texte) sans hiérarchie ni différenciation — un des patterns les plus reconnaissables de template générique, à éviter tel quel (voir Agents_Direction_Artistique.md Section 3bis)
Laisser du contenu lorem ipsum ou une identité de template visible en livraison finale

## 17. Recommandations pour le projet
Si la grille de services est reprise, la rendre spécifique au métier réel (icônes et libellés propres au sujet, pas une liste générique interchangeable).
Réutiliser le contraste N&B/couleur comme signature si pertinent pour le brief, mais construit intentionnellement, pas par défaut.
Remplacer tout filigrane texte par un mot réellement signifiant pour le sujet du projet (pas "SERVICES" générique).

## 18. Cahier des charges final
Stack suggérée : React + Tailwind, image hero avec filtre grayscale en CSS (plutôt qu'image pré-désaturée, pour garder la flexibilité).
Grille de services à repenser en signature unique plutôt qu'en 2x3 cards identiques par défaut (voir Direction Artistique 3bis).
Reste 100% original — aucun élément de template (logo, structure de grille identique) ne doit être copié tel quel.
