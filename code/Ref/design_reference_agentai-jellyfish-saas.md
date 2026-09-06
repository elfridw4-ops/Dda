# DESIGN REFERENCE — AgentAI (landing SaaS complète, méduse rouge lumineuse)
Type input : IMAGE STATIQUE
Domaine observé : SaaS/agence IA (services de développement IA) — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, page longue scroll complet visible du hero jusqu'à la
section services)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, chiffres/stats, témoignage ou palette figée ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : landing page d'une agence/studio spécialisé en solutions IA sur-mesure (nom non reproduit) [FAIT]
Type : site vitrine B2B SaaS/agence, une seule longue page scrollable [FAIT]
Objectif supposé : générer des demandes de devis/appels découverte via preuve sociale chiffrée et
un positionnement "sprint IA à la demande" [FAIT]
Public cible : décideurs entreprise cherchant à intégrer de l'IA rapidement [HYPOTHÈSE]

## 2. Structure générale
Nav horizontale : logo à gauche, liens centrés en pilule sombre (Home/Services/Works/About/Contact,
item actif en fond rouge), CTA "Menu" + icône expand à droite [FAIT]
Hero : badge pilule "AI-Driven Agency" en haut-gauche, titre 3 lignes énorme à gauche, sous-titre
descriptif, 2 CTA (1 plein rouge + 1 contour sombre), 3 mini-cards stats en dessous (Happy people/
ROI/Rétention) [FAIT]
Sujet central massif : méduse bioluminescente rouge en rendu 3D/photo, occupe toute la hauteur du
hero, s'étend des tentacules qui traversent plusieurs sections en dessous [FAIT]
Colonne droite du hero : mini-preview vidéo/card + card stats (projets lancés) + card partenaires
(logos clients en mini-avatars) + icônes réseaux sociaux verticales + bouton "Book a call" [FAIT]
Citation/positionnement en gras au milieu de page ("We design and deploy...") avec mots-clés
surlignés en rouge [FAIT]
Section preuve sociale : bloc localisation studio + CTA "Start a Project" + photo équipe, à côté
bloc stats clients + note 5 étoiles + témoignage avec avatar [FAIT]
Bandeau logos partenaires (placeholder "Logoipsum") [FAIT]
Début section "End-to-End AI Services" : titre + card service détaillée (tags, étapes) [FAIT]
Ordre de lecture : nav → hero (titre+stats+méduse) → citation positionnement → preuve sociale
(studio+stats+avis) → logos → services détaillés [FAIT]

## 3. Palette graphique
Fond dominant : noir/anthracite très sombre sur toute la page [FAIT]
Accent unique : rouge vif saturé — CTA plein, mots-clés surlignés dans les paragraphes, item nav
actif, méduse elle-même (bioluminescence rouge), bordures de card au survol probable [FAIT]
Cards/blocs : gris très sombre légèrement plus clair que le fond, bordure fine subtile [FAIT]
Texte : blanc/gris clair sur fond sombre, rouge réservé aux mots-clés et CTA uniquement [FAIT]
Principe à retenir : accent rouge répété STRICTEMENT aux mêmes endroits fonctionnels (CTA, nav
actif, mots-clés, sujet hero) sur toute la longueur de la page — cohérence de système plutôt qu'un
rouge dispersé au hasard (voir Agents_Bibliotheque_Palettes.md famille Nuit & Corail Vif ou Nuit
Verte & Écarlate pour un registre proche, jamais recopier le rouge exact).

## 4. Typographie
Titre hero (3 lignes) : sans-serif regular à medium, grande taille, casse mixte (pas tout
majuscule) — contraste avec beaucoup d'autres refs de la bibliothèque qui vont au bold condensé [FAIT]
Citation positionnement : sans-serif regular grande taille, mots-clés en rouge dans le corps de
texte plutôt qu'en gras — hiérarchie par couleur, pas par graisse [FAIT]
Stats chiffrées (cards) : sans-serif bold, grande taille, contraste fort avec la légende [FAIT]
Corps de texte : sans-serif regular, taille standard [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Nav pilule avec item actif en aplat rouge** — pattern nav flottante sombre, cohérent avec
d'autres refs de la bibliothèque (voir Mobile_Floating_Search_Menu_Spec.md pour le principe pilule
flottante, ici en version desktop statique) [FAIT]
**Sujet 3D massif qui traverse plusieurs sections** — la méduse ne reste pas cantonnée au hero,
ses tentacules descendent visuellement dans la section suivante — technique de continuité verticale
rare [FAIT]
**Cards stats mini-format répétées** — plusieurs cards chiffre+légende de tailles différentes
disséminées dans le hero et la section preuve sociale, pas un seul bloc stats unique [FAIT]
**Citation avec mots-clés surlignés couleur** — technique de mise en emphase dans un paragraphe
long sans gras ni soulignement, juste la couleur d'accent [FAIT]
**Bloc témoignage avec avatar + note étoiles** — preuve sociale classique mais bien intégrée au
flux plutôt que reléguée à une section dédiée séparée [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE HERO 3 LIGNES
Zone → TOP-LEFT à MID-LEFT
X% → 8% | Y% → 14% | W% → 40% | H% → 15% [HYPOTHÈSE]

ÉLÉMENT : MÉDUSE (sujet massif)
Zone → CENTER, traverse plusieurs sections verticalement
X% → 25% | Y% → 8% | W% → 45% | H% → 60%+ (déborde du hero) [HYPOTHÈSE]

ÉLÉMENT : COLONNE CARDS DROITE (preview+stats+partenaires)
Zone → TOP-RIGHT à MID-RIGHT
X% → 72% | Y% → 15% | W% → 26% | H% → 35% [HYPOTHÈSE]

ÉLÉMENT : 3 MINI-CARDS STATS HERO (bas-gauche)
Zone → MID-LEFT
X% → 8% | Y% → 40% | W% → 35% | H% → 8% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                           │ MODE   │ OPACITÉ EST. │ TAG
 4 │ Nav + texte + cards + CTA         │ Normal │ 100%         │ FAIT
 3 │ Méduse (sujet, devant le fond)    │ Screen │ 100%         │ HYPOTHÈSE (glow apparent)
 2 │ Particules/glow ambiant rouge     │ Screen │ ≈20-40%      │ HYPOTHÈSE
 1 │ Fond noir uni (toute la page)     │ Normal │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique (mais tentacules/particules suggèrent fortement un site
animé en usage réel, non confirmable sur capture figée) [HYPOTHÈSE sur l'existence d'animation]

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Cards cliquables probables (partenaires, services), nav pilule
suggère interaction standard [HYPOTHÈSE].

## 9. Effets visuels
Glow/bioluminescence sur la méduse, probablement mix-blend-mode screen ou lighten pour l'effet
lumineux net sur fond noir [HYPOTHÈSE]
Léger effet de particules/traînées autour des tentacules [FAIT pour la présence, HYPOTHÈSE sur la
technique exacte]
Aucun glassmorphism détecté sur les cards (fond opaque, pas de blur) [FAIT]

## 10. Responsive
Un seul format fourni (semble être un export mobile/portrait très long, vu le ratio) → à confirmer,
possible que la capture soit déjà une version mobile du site [HYPOTHÈSE]. Comportement desktop
non confirmé avec certitude si c'est le cas.

## 11. Accessibilité
Contraste texte blanc sur noir : excellent [FAIT]
Contraste rouge sur noir (CTA, mots-clés) : bon [FAIT]
Densité d'information très élevée sur une page longue — beaucoup de cards/stats à la suite,
risque de fatigue de lecture si aucune rupture de rythme claire [HYPOTHÈSE]

## 12. Technologies probables
Site probablement Next.js/Framer avec sujet 3D (méduse) en rendu pré-généré ou modèle Three.js
animé [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le sujet massif (méduse) qui traverse physiquement plusieurs sections de la page crée une colonne
vertébrale visuelle rare — la plupart des heros confinent leur sujet à un seul écran.
La discipline de couleur (rouge STRICTEMENT aux mêmes rôles fonctionnels : CTA, nav actif,
mots-clés, sujet) sur une page très longue est une vraie rigueur de design system, rare à ce niveau.
Les mots-clés surlignés en couleur dans un paragraphe long est une technique d'emphase élégante,
alternative au gras/souligné classique.

## 14. Défauts observés
Densité de cards/stats très élevée (au moins 6-7 blocs chiffrés différents visibles) — risque de
diluer l'impact de chaque stat individuelle si elles sont toutes traitées avec la même importance
visuelle [HYPOTHÈSE]
Logos partenaires en placeholder "Logoipsum" — contenu non finalisé visible, à ne jamais livrer
tel quel en production [FAIT]
Sujet massif (méduse) magnifique mais son lien direct avec "agence IA" reste symbolique/abstrait
plutôt qu'évident — pari créatif qui peut ne pas être immédiatement compris par tous [HYPOTHÈSE]

## 15. Éléments à réutiliser
Sujet visuel massif qui traverse plusieurs sections verticalement, créant une continuité de scroll
plutôt qu'un hero isolé — transposable à tout site avec un sujet fort à filer sur la longueur
Discipline de couleur stricte (1 accent réservé aux mêmes rôles fonctionnels partout) sur une page
longue à plusieurs sections
Mots-clés surlignés en couleur dans un paragraphe long comme alternative au gras

## 16. Éléments à éviter
Cumuler trop de cards/stats de même poids visuel sans hiérarchiser laquelle est la plus importante
Livrer des logos placeholder visibles en maquette finale

## 17. Recommandations pour le projet
Le principe "sujet visuel filé sur plusieurs sections" est transposable à tout site qui veut éviter
l'effet "hero isolé puis sections plates classiques" — mais coûteux en production (sujet 3D/
illustration cohérente sur toute la hauteur).
Si beaucoup de stats à afficher : hiérarchiser 2-3 stats "hero" plus grandes, reléguer les autres
en secondaire plus discret plutôt que tout traiter au même niveau.

## 18. Cahier des charges final
Stack suggérée si web : sujet en image/vidéo haute résolution position sticky ou absolue qui suit
le scroll sur plusieurs sections (coût perf à vérifier, voir Agents_Standards_Interface_Web.md
Section 6), cards en composants réutilisables (props: chiffre, légende, icône), glow en CSS
mix-blend-mode: screen + filter blur sur calque séparé.
Reste 100% original — nom de marque, chiffres/stats, témoignage et texte exact jamais repris.
