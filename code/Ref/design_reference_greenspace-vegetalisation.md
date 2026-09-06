# DESIGN REFERENCE — GreenSpace (végétalisation de bureaux)
Type input : IMAGE STATIQUE
Domaine observé : Décoration végétale/aménagement d'espaces de travail — usage NON restreint
Niveau confiance global : ≈65% FAIT / 30% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, page complète du haut jusqu'au footer)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, langue, nom de marque ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : landing page d'un service de végétalisation de bureaux [FAIT]
Type : site vitrine service B2B, une seule longue page scrollable [FAIT]
Objectif supposé : générer des demandes de devis/contact via formulaire en bas de page [FAIT]
Public cible : entreprises cherchant à aménager leurs locaux [HYPOTHÈSE]
Langue observée : russe — non pertinent à reproduire, adapter à la langue réelle du public visé [FAIT]

## 2. Structure générale
Nav : logo à gauche, 3 liens centrés, ville + icône panier à droite [FAIT]
Hero : titre 2 lignes à gauche, sous-titre descriptif, à droite une carte produit flottante
(plante en pot + CTA "ouvrir le catalogue") sur fond de feuillage plein cadre [FAIT]
Section "pourquoi" : titre + paragraphe à droite, à gauche une photo/vidéo embed (bureau végétalisé
avec collaborateurs) + 3 stats chiffrées empilées à droite de la photo [FAIT]
Section "4 raisons" : titre centré + grille de 4 cartes numérotées (1-4), chacune titre + description [FAIT]
Section contact : titre + formulaire (nom/téléphone/commentaire/CTA envoyer) sur fond sombre
feuillage, réseaux sociaux en bas [FAIT]
Ordre de lecture : nav → hero produit → preuve vidéo+stats → 4 raisons → formulaire contact [FAIT]

## 3. Palette graphique
Fond dominant : vert très sombre/noir avec texture de feuillage photographique en surimpression
sur plusieurs sections [FAIT]
Cartes/blocs : fond gris-vert semi-transparent sur les sections sombres [FAIT]
Texte : blanc/blanc cassé sur fond sombre [FAIT]
CTA : blanc plein avec texte sombre (contraste inversé, se détache du reste) [FAIT]
Logo : accent vert vif isolé dans le nom de marque [FAIT]
Principe à retenir : un fond photographique végétal réel (pas un vert plat) qui unifie toute la
page, cartes semi-transparentes qui laissent deviner la texture derrière — la matière (feuillage)
remplace la couleur comme identité (voir Agents_Bibliotheque_Palettes.md familles sombres/vertes,
ex. Mousse Électrique, Collines & Ombre, jamais recopier tel quel).

## 4. Typographie
Titres de section : sans-serif regular à medium, taille généreuse, sans effet décoratif [FAIT]
Chiffres stats ("10 лет", "500+", "99%") : sans-serif bold, grande taille, contraste fort avec la
légende plus petite à côté [FAIT]
Corps de texte : sans-serif regular, taille standard [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Carte produit flottante (hero)** — photo produit + CTA, posée sur la photo de fond avec un léger
fond translucide, technique de mise en avant produit dès le hero sans page dédiée [FAIT]
**Bloc stats à 3 items empilés verticalement** (pas horizontal comme d'autres refs) — chiffre + à
droite dans le même bloc, la légende [FAIT]
**Cartes numérotées 1-4** — numéro en très grand en haut de carte, titre + description dessous,
fond semi-transparent sur le feuillage [FAIT]
**Formulaire de contact simple** — 3 champs + CTA plein largeur, fond de champ neutre gris clair
sur fond sombre — contraste net pour la saisie [FAIT]
États hover/focus/erreur : non observable sur image statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : CARTE PRODUIT FLOTTANTE (hero)
Zone → TOP-RIGHT
X% → ≈70% | Y% → ≈6% | W% → ≈24% | H% → ≈16% [HYPOTHÈSE]

ÉLÉMENT : TITRE HERO
Zone → MID-LEFT
X% → ≈4% | Y% → ≈14% | W% → ≈45% | H% → ≈10% [HYPOTHÈSE]

ÉLÉMENT : GRILLE 4 CARTES NUMÉROTÉES
Zone → MID-CENTER (section dédiée)
X% → ≈4% | Y% → non applicable au hero (section suivante) | W% → 23% par carte [HYPOTHÈSE]

ÉLÉMENT : FORMULAIRE CONTACT
Zone → BOT-RIGHT (section finale)
X% → ≈50% | Y% → ≈88% | W% → ≈46% | H% → ≈10% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ │ TAG
 3 │ Texte + cartes + formulaire      │ Normal │ 100%    │ FAIT
 2 │ Cartes semi-transparentes fond   │ Normal │ ≈70-85% │ HYPOTHÈSE
 1 │ Photo feuillage plein cadre (fond)│ Normal│ 100%    │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — page statique. Présence d'un embed vidéo (icône play) suggère lecture au clic
[FAIT pour la présence, NON OBSERVÉ pour le comportement réel].
Formulaire suggère soumission classique avec case consentement RGPD-like visible [FAIT]

## 9. Effets visuels
Texture photographique de feuillage utilisée comme fond sur plusieurs sections différentes,
cohérence par répétition de matière plutôt que par couleur plate [FAIT]
Cartes à fond semi-transparent qui laissent deviner le feuillage derrière — effet de profondeur
léger sans vrai glassmorphism flouté [HYPOTHÈSE]
Aucun glow/blur numérique fort détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni (desktop/scroll long) → comportement mobile non observable.

## 11. Accessibilité
Contraste texte blanc sur fond sombre : bon [FAIT]
Contraste des champs de formulaire (gris clair sur fond sombre) : bon, bien détaché [FAIT]
Lisibilité des cartes semi-transparentes sur zones de feuillage très texturées : à vérifier,
risque de contraste variable selon la zone du fond [HYPOTHÈSE]

## 12. Technologies probables
Site probablement WordPress/builder no-code avec section formulaire connectée à un CRM/email
[HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Utiliser une texture photographique réelle du sujet (feuillage) comme fond unificateur sur
plusieurs sections différentes de la page plutôt qu'un simple aplat vert est cohérent et immersif
sans effort de composition graphique complexe.
La carte produit flottante intégrée directement dans le hero permet un accès rapide au catalogue
sans naviguer plus loin — raccourci de conversion pertinent pour un produit simple.
Les stats empilées verticalement (plutôt qu'en ligne) libèrent de l'espace horizontal pour la
photo/vidéo à côté, choix de layout cohérent avec le contenu voisin.

## 14. Défauts observés
Répétition de la même texture de feuillage sur plusieurs sections consécutives pourrait fatiguer
visuellement sur un scroll long si aucune rupture de rythme n'intervient [HYPOTHÈSE]
Aucune photo de "avant/après" ou de réalisation concrète autre que la vidéo embed — argument
visuel limité pour un service qui a un vrai avant/après à montrer [FAIT sur l'absence]

## 15. Éléments à réutiliser
Fond texturé/photographique du sujet réel répété sur plusieurs sections comme identité cohérente
Carte produit flottante directement dans le hero pour un accès rapide au catalogue
Stats empilées verticalement à côté d'un média (photo/vidéo) plutôt qu'en ligne horizontale séparée

## 16. Éléments à éviter
Répéter la même texture de fond sans rupture de rythme sur un scroll long
Omettre les preuves visuelles concrètes (avant/après) quand le service en a naturellement

## 17. Recommandations pour le projet
Le principe "texture photographique du sujet réel comme fond unificateur" est transposable à tout
service ayant une vraie matière visuelle à exploiter (bois pour menuiserie, tissu pour couture,
pierre pour Delta Leader's si pertinent) plutôt qu'une couleur plate arbitraire.
Prévoir une rupture de rythme (fond clair ou différent) toutes les 2-3 sections sur un scroll long.

## 18. Cahier des charges final
Stack suggérée : sections React avec image de fond en background-fixed ou background-attachment
pour un effet parallax léger, cartes en composants réutilisables avec opacité configurable.
Reste 100% original — nom de marque, ville et texte exact jamais repris.
