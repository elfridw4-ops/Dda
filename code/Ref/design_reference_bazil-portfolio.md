# DESIGN REFERENCE — Bazil (portfolio designer/photographe, typo outline)
Type input : IMAGE STATIQUE
Domaine observé : Portfolio freelance design/photo — usage NON restreint à ce domaine
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero desktop complet)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de personne réelle, ville ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero du portfolio personnel d'un freelance webdesigner/photographe (nom non reproduit) [FAIT]
Type : site vitrine personnel, hero fond blanc typo-driven [FAIT]
Objectif supposé : présenter la double compétence (design + photo) et orienter le visiteur vers
le bon service dès l'arrivée [FAIT]
Public cible : clients potentiels cherchant soit un designer, soit un photographe [HYPOTHÈSE]

## 2. Structure générale
Nav : logo texte + emoji à gauche, liens (Design/Photos/About), sélecteur de langue (FR/EN), CTA
email en bouton noir plein à droite [FAIT]
Sous la nav : phrase d'intro courte avec emoji main qui salue, présente la personne et son métier [FAIT]
Titre géant sur 2 lignes ("Webdesigner" plein + "& Photographer" en contour/outline uniquement) —
rupture de traitement entre les 2 lignes du même titre [FAIT]
Portrait de la personne, souriant, positionné au centre, qui chevauche/casse la 2e ligne du titre
en la traversant visuellement [FAIT]
Sous le titre : localisation courte + logos de clients/marques en petite ligne horizontale [FAIT]
2 boutons en bas : "You need a designer" / "You need a photographer" — bifurcation explicite selon
le besoin du visiteur [FAIT]
Ordre de lecture : nav → intro → titre → portrait → réassurance clients → bifurcation CTA [FAIT]

## 3. Palette graphique
Fond : blanc pur [FAIT]
Texte : noir plein pour la 1re ligne du titre ("Webdesigner"), contour noir fin (outline, pas de
remplissage) pour la 2e ligne ("& Photographer") — rupture de traitement typographique qui crée
une hiérarchie de lecture sans changer de couleur [FAIT]
CTA email (nav) et boutons bifurcation : noir plein, texte blanc — inversion de contraste
cohérente sur tous les éléments interactifs [FAIT]
Principe à retenir : monochrome noir et blanc absolu, AUCUN accent couleur — toute la
hiérarchie et la personnalité viennent du traitement typographique (plein vs outline) et de la
photo, pas d'une palette (voir Agents_Bibliotheque_Palettes.md famille Brume & Noir en version
claire pour un registre proche, jamais recopier tel quel).

## 4. Typographie
Titre "Webdesigner" : sans-serif très condensée et grasse, noire pleine, majuscule initiale [FAIT]
Titre "& Photographer" : même famille typographique mais en contour (outline) uniquement, aucun
remplissage — technique de rupture de traitement sur un titre à 2 lignes, cohérente avec d'autres
refs de la bibliothèque (voir design_reference_promo-picnic-immobilier.md pour le même principe
en aplat/texture plutôt qu'en plein/outline) [FAIT]
Intro + nav : sans-serif regular, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Titre à 2 traitements (plein/outline)** — signature typographique forte et simple à exécuter,
sans nécessiter de 2e police ni de couleur supplémentaire [FAIT]
**Portrait qui chevauche/traverse le titre** — le sujet humain casse visuellement la 2e ligne du
titre, technique de composition en profondeur plutôt qu'un portrait posé à côté [FAIT]
**Ligne de logos clients** — réassurance sociale discrète juste sous le titre, avant même la
bifurcation CTA [FAIT]
**Bifurcation à 2 CTA explicites** — "You need a designer" / "You need a photographer", résout
immédiatement l'ambiguïté d'un profil à double compétence plutôt qu'un CTA générique unique [FAIT]
États hover/clic : non observable [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : TITRE 2 LIGNES (plein + outline)
Zone → TOP-CENTER à MID-CENTER
X% → ≈8% | Y% → ≈22% | W% → ≈84% | H% → ≈35% [HYPOTHÈSE]

ÉLÉMENT : PORTRAIT
Zone → MID-CENTER (chevauche le titre, 2e ligne)
X% → ≈32% | Y% → ≈42% | W% → ≈22% | H% → ≈32% [HYPOTHÈSE]
Alignement → superposé au centre de la 2e ligne du titre, casse visuellement le mot "Photographer"

ÉLÉMENT : DUO CTA BIFURCATION
Zone → BOT-CENTER
X% → ≈32% | Y% → ≈88% | W% → ≈36% | H% → ≈7% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                       │ MODE   │ OPACITÉ │ TAG
 3 │ Titre 2e ligne (outline)       │ Normal │ 100%    │ FAIT
 2 │ Portrait (devant le titre)     │ Normal │ 100%    │ FAIT
 1 │ Titre 1re ligne + fond blanc   │ Normal │ 100%    │ FAIT
```
Note : le portrait passe DEVANT le contour du titre (calque 3 visible seulement là où le portrait
ne le couvre pas) — cas d'école de sujet+typo superposés, comparable à la référence Sultan Karimi
documentée dans Agents_Traitement_Visuel.md Section 4.

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. La bifurcation à 2 CTA suggère 2 parcours de navigation
distincts selon le choix du visiteur [HYPOTHÈSE].

## 9. Effets visuels
Aucun effet numérique ajouté (pas de gradient, ombre, blur) — tout repose sur le contraste
plein/outline de la typo et la photo du portrait [FAIT]
Portrait en photo réelle, pas de détourage complexe visible (fond du portrait probablement neutre
ou légèrement flouté) [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable. Le chevauchement titre/
portrait est un pattern qui demande une attention particulière en mobile (risque de superposition
non maîtrisée sur petit écran) [HYPOTHÈSE].

## 11. Accessibilité
Contraste noir sur blanc (titre plein, CTA) : excellent [FAIT]
Lisibilité du titre en outline (2e ligne) : plus faible qu'un plein par nature, mais compensée par
la grande taille et le contexte (déjà annoncé par la 1re ligne pleine) [HYPOTHÈSE]
Boutons bifurcation : bonne taille, cible tactile généreuse probable [HYPOTHÈSE]

## 12. Technologies probables
Site probablement Framer/Webflow ou Next.js, portrait réel (pas de rendu 3D/IA) [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
La rupture de traitement typographique (plein/outline) sur un titre à 2 lignes est une technique
simple, gratuite en exécution (pas de couleur ni de police supplémentaire) mais visuellement très
efficace pour hiérarchiser sans complexifier.
La bifurcation explicite à 2 CTA résout intelligemment l'ambiguïté d'un profil à double compétence
dès le hero, évite de perdre un visiteur qui ne cherche qu'un des deux services.
Le monochrome noir/blanc total, sans aucun accent couleur, prouve qu'un portfolio personnel peut
être mémorable uniquement par la typographie et la composition.

## 14. Défauts observés
Le chevauchement portrait/titre, bien qu'esthétique, réduit la lisibilité complète du mot
"Photographer" — à vérifier que ce n'est pas gênant pour le SEO/accessibilité texte si le mot doit
rester entièrement lisible visuellement [HYPOTHÈSE]
Aucun accent couleur pourrait rendre le site moins mémorable pour certains visiteurs comparé à une
identité plus colorée, choix assumé mais à confirmer comme intentionnel [HYPOTHÈSE]

## 15. Éléments à réutiliser
Rupture de traitement typographique (plein/outline, ou aplat/texture) sur un titre à 2 lignes pour
hiérarchiser sans couleur ni police supplémentaire
Bifurcation explicite à 2 CTA quand le profil/service a une vraie double compétence à clarifier
dès le hero
Portrait qui chevauche le titre en profondeur plutôt qu'à côté, cas d'usage documenté également en
Agents_Traitement_Visuel.md Section 4

## 16. Éléments à éviter
Chevaucher un portrait sur un mot-clé du titre sans vérifier que le mot reste identifiable
visuellement (même partiellement) pour ne pas nuire à la compréhension immédiate

## 17. Recommandations pour le projet
Le principe "bifurcation à 2 CTA selon le besoin du visiteur" est transposable à tout profil ou
service à double compétence réelle (ex: un freelance qui fait à la fois dev et design) — jamais à
forcer artificiellement si une seule compétence est réellement proposée.
La rupture typographique plein/outline est un outil à faible coût d'exécution à garder en tête pour
tout titre à 2 lignes qui a besoin d'une hiérarchie sans complexifier la palette.

## 18. Cahier des charges final
Stack suggérée si web : titre en 2 <span> avec -webkit-text-stroke pour l'effet outline sur la 2e
ligne, portrait en position absolue avec z-index intermédiaire entre les 2 lignes de titre.
Reste 100% original — nom de personne réelle, ville et logos clients réels jamais repris.
