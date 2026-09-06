# DESIGN REFERENCE — Statue Rouge (hero portfolio design, monochrome accent unique)
Type input : IMAGE STATIQUE
Domaine observé : Portfolio agence/studio design — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture — mockup présentation avec bandeau promo studio en bas,
non compté dans l'analyse structurelle du site lui-même, voir Section 14)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de studio, logo, URL ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'un site portfolio de studio/agence design (nom non reproduit) [FAIT]
Type : landing portfolio, présenté en mockup navigateur dans un cadre de présentation (image
promotionnelle du studio qui l'a conçu, pas le site brut) [FAIT]
Objectif supposé : démontrer le savoir-faire du studio via un exemple de composition sobre et
percutante [HYPOTHÈSE]
Public cible : clients potentiels du studio design (audience professionnelle) [HYPOTHÈSE]

## 2. Structure générale
Fenêtre navigateur/carte flottante à coins arrondis, centrée sur fond noir uni de présentation [FAIT]
Nav intégrée en haut de la carte : logo à gauche (icône losange rouge), liens centrés
(ABOUT/GALLERY/CONTACTS) [FAIT]
Bloc texte à gauche : mention petite ("OUR VERSION"), titre "DESIGN" énorme, paragraphe descriptif
court, lien flèche + "See More" [FAIT]
Statue classique (sculpture) en photo réelle à droite, cadrée serré, fond cercle plein derrière
elle [FAIT]
Indicateur de progression carousel en bas-gauche (01 ——— 03, ligne + numéros) [FAIT]
Petit cercle décoratif partiel en bas, coupé par le bord de la carte [FAIT]
Ordre de lecture : nav → mention → titre → description → CTA → sujet photo → indicateur slide [FAIT]

## 3. Palette graphique
Fond extérieur (hors carte) : noir profond [FAIT]
Carte/hero : anthracite très sombre, quasi noir [FAIT]
Accent unique : rouge vif saturé — logo, cercle derrière la statue, statue elle-même teintée rouge
(monochrome rouge sur le sujet photo) [FAIT]
Texte : blanc pur pour le titre, gris clair pour la description [FAIT]
Principe à retenir : monochrome anthracite/noir + UN SEUL accent rouge appliqué à la fois au
graphisme (logo, cercle) ET au sujet photo (statue teintée) — cohérence totale entre UI et image,
pas 2 registres séparés (voir Agents_Bibliotheque_Palettes.md famille Nuit & Grenat ou Nuit &
Corail Vif pour un registre proche, jamais recopier le rouge exact).

## 4. Typographie
Titre "DESIGN" : sans-serif très condensée et grasse, majuscules, grande taille [FAIT]
Mention petite ("OUR VERSION") : sans-serif fine, majuscules, letter-spacing large [FAIT]
Nav et CTA : sans-serif regular, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Statue teintée rouge (duotone sujet)** — même principe qu'un duotone total (sujet+fond dans la
même teinte), technique documentée aussi dans Agents_Traitement_Visuel.md Section 5 "Duotone
total" [FAIT]
**Cercle plein derrière le sujet** — forme géométrique simple qui sert de halo/fond au sujet photo,
pas de dégradé complexe, juste un disque plat [FAIT]
**Indicateur carousel minimal (numéro-ligne-numéro)** — alternative discrète aux dots classiques,
cohérent avec la sobriété générale [FAIT]
**Lien flèche + texte** — pas de bouton plein, CTA discret [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : BLOC TITRE + DESCRIPTION
Zone → MID-LEFT
X% → 6% | Y% → 32% | W% → 38% | H% → 30% [HYPOTHÈSE]

ÉLÉMENT : STATUE + CERCLE FOND
Zone → MID-RIGHT
X% → 50% | Y% → 15% | W% → 45% | H% → 65% [HYPOTHÈSE]

ÉLÉMENT : INDICATEUR CAROUSEL (01-03)
Zone → BOT-LEFT
X% → 6% | Y% → 82% | W% → 25% | H% → 8% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                    │ MODE   │ OPACITÉ │ TAG
 4 │ Nav + titre + CTA + indicateur│Normal│ 100%   │ FAIT
 3 │ Statue (duotone rouge)      │ Normal │ 100%    │ FAIT
 2 │ Cercle rouge plein (fond sujet)│Normal│ 100%   │ FAIT
 1 │ Fond anthracite carte        │ Normal │ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Indicateur "01 — 03" suggère un carousel hero à 3 slides
[HYPOTHÈSE].

## 9. Effets visuels
Duotone rouge appliqué au sujet photo (statue), cohérent avec l'accent UI — pas un simple filtre
posé sur le fond seul [FAIT]
Aucun glow/blur/glassmorphism détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable.

## 11. Accessibilité
Contraste titre blanc sur fond anthracite : excellent [FAIT]
Contraste accent rouge sur fond sombre : bon [FAIT]
CTA en lien texte (pas bouton plein) : cible tactile à vérifier si repris en mobile [HYPOTHÈSE]

## 12. Technologies probables
Site probablement Framer/Webflow, statue en photo réelle retouchée en duotone (filtre CSS ou
retouche Photoshop) [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le duotone appliqué au sujet ET au graphisme (pas juste au fond) crée une unité rare, renforce
l'impression de composition pensée plutôt qu'assemblée.
Sobriété du nombre d'éléments (titre + description + CTA + 1 sujet photo + indicateur) — rien de
superflu, chaque élément a un rôle clair.
Utiliser une sculpture classique comme sujet plutôt qu'un portrait/produit générique élève
immédiatement le registre vers l'artistique/intemporel.

## 14. Défauts observés
Le fichier source est un mockup de PRÉSENTATION du studio (bandeau promo visible en bas de
l'image, hors du site lui-même) — cette partie n'est pas structurelle au site et n'a pas été
analysée comme telle, seule la fenêtre navigateur/hero compte pour cette réf [FAIT]
CTA en lien texte seul, moins immédiatement identifiable comme actionnable qu'un bouton plein
[HYPOTHÈSE]
Cercle décoratif partiel coupé en bas de carte — probablement un défaut de crop du mockup plutôt
qu'un choix [HYPOTHÈSE]

## 15. Éléments à réutiliser
Duotone unique appliqué à la fois au sujet photo et au graphisme UI (logo, formes) pour une
cohérence totale, pas juste un accent posé sur le fond
Cercle plein géométrique simple comme fond de sujet, alternative à un dégradé complexe
Indicateur carousel minimal (numéro-ligne-numéro) plutôt que des dots génériques

## 16. Éléments à éviter
CTA uniquement en lien texte si l'action doit être très visible/actionnable rapidement — envisager
un bouton si la conversion est un enjeu réel

## 17. Recommandations pour le projet
Le principe "duotone total sujet+UI" est transposable à tout portfolio/site créatif qui veut une
identité forte à une seule couleur — jamais si le sujet a besoin de ses vraies couleurs pour être
compris (produit e-commerce par exemple).
Le cercle plat comme fond de sujet est un principe simple et peu coûteux à exécuter, applicable à
tout hero avec un sujet détouré/photo à mettre en scène.

## 18. Cahier des charges final
Stack suggérée si web : image sujet en CSS filter (hue-rotate/saturate) ou retouche pré-faite pour
le duotone, cercle en simple <div> border-radius:50% derrière l'image en z-index inférieur,
indicateur carousel en composant réutilisable (props: slide actif, total).
Reste 100% original — nom de studio, logo, URL réels jamais repris.
