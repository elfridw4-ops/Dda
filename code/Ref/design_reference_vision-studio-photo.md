# DESIGN REFERENCE — Vision (studio photo, portrait éditorial sombre)
Type input : IMAGE STATIQUE
Domaine observé : Studio photo/location d'espace créatif — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, hero desktop, effet mockup incliné/ombré)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, adresse ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : hero d'un site de studio photo/location d'espace créatif à New York (adresse mentionnée,
non reproduite) [FAIT]
Type : landing page portfolio/service créatif, présentée en mockup incliné avec ombre portée
(rendu de présentation, pas nécessairement le rendu réel du site) [FAIT]
Objectif supposé : présenter le studio et convertir vers une location d'espace/un service photo [HYPOTHÈSE]
Public cible : professionnels créatifs (photographes, marques cherchant un espace de tournage) [HYPOTHÈSE]

## 2. Structure générale
Nav horizontale : logo "V" + baseline courte à gauche, liens (Home/Photo/Employment/About) à droite [FAIT]
Portrait photo pleine hauteur à gauche du cadre, sujet éclairé chaleureusement sur fond sombre [FAIT]
Bloc titre à droite : mention petite en accent couleur ("Creative Vision"), titre énorme sur 2
lignes ("The Art of Life"), mot "Portraits" en accent couleur juste à côté [FAIT]
Sous le titre : mention courte descriptive [FAIT]
Bas de cadre : adresse + description service à gauche, bouton rond flèche-bas à droite [FAIT]
Ordre de lecture : nav → portrait → titre → description → adresse/CTA scroll [FAIT]

## 3. Palette graphique
Fond : noir/anthracite quasi total [FAIT]
Accent unique : orange/ambre doux (mention "Creative Vision", mot "Portraits", bouton rond), ≈
#D68A4C [HYPOTHÈSE pour le HEX]
Texte principal : blanc pur pour le titre massif [FAIT]
Portrait : éclairage chaud naturel (bougie/lumière tenue en main), contraste avec le fond sombre
environnant [FAIT]
Principe à retenir : fond noir quasi total + un seul accent chaud discret, réservé aux mentions
secondaires (jamais sur le titre principal qui reste blanc) — la photo elle-même porte la
chaleur, pas le graphisme (voir Agents_Bibliotheque_Palettes.md familles sombres à accent unique,
ex. Encre & Safran, sans copier le HEX).

## 4. Typographie
Titre principal : serif classique, très grande taille, blanc, sur 2 lignes courtes [FAIT]
Mention accent ("Creative Vision") : sans-serif fine, majuscules, petite taille, letter-spacing
large [FAIT]
Nav et mentions bas de page : sans-serif regular, petite taille [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Bouton rond flèche-bas** — seul élément interactif visible, sert d'indicateur de scroll [FAIT],
état hover non observable [NON OBSERVÉ]
**Nav minimale texte seul** — pas de CTA plein visible dans la nav elle-même, contrairement à
d'autres refs de la bibliothèque qui ont un CTA nav dédié [FAIT]
**Portrait en pleine hauteur** — traité comme un élément de composition à part entière (pas juste
un fond), occupe toute la hauteur du cadre à gauche [FAIT]

## 5bis. Grille de positionnement
```
ÉLÉMENT : PORTRAIT (sujet éclairé)
Zone → MID-LEFT, pleine hauteur
X% → 0% | Y% → 0% | W% → ≈38% | H% → 100% [HYPOTHÈSE]

ÉLÉMENT : BLOC TITRE
Zone → MID-CENTER à MID-RIGHT
X% → ≈42% | Y% → ≈28% | W% → ≈55% | H% → ≈35% [HYPOTHÈSE]

ÉLÉMENT : BOUTON ROND SCROLL
Zone → BOT-RIGHT
X% → ≈82% | Y% → ≈85% | W% → ≈6% | H% → ≈8% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                    │ MODE   │ OPACITÉ │ TAG
 3 │ Nav + titre + bas de page  │ Normal │ 100%    │ FAIT
 2 │ Portrait éclairé (sujet)   │ Normal │ 100%    │ FAIT
 1 │ Fond noir uni              │ Normal │ 100%    │ FAIT
```
Composition à seulement 3 calques — sobriété assumée, cohérente avec le principe minimaliste.

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — image statique. Bouton rond suggère un scroll déclenché au clic [HYPOTHÈSE].

## 9. Effets visuels
Éclairage chaud naturel sur le portrait (bougie/lampe tenue), contraste marqué avec
l'environnement sombre — technique de lumière plutôt qu'un effet numérique ajouté [FAIT]
Aucun glow/blur/glassmorphism numérique détecté [NON OBSERVÉ]
Présentation en mockup incliné avec ombre portée (probablement un artefact de présentation
Dribbble/portfolio, pas le rendu réel du site en navigateur) [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni → comportement mobile/tablette non observable.

## 11. Accessibilité
Contraste titre blanc sur fond noir : excellent [FAIT]
Contraste accent orange sur fond noir : bon [FAIT]
Nav en petit texte fin : à vérifier la taille de cible tactile si repris en mobile [HYPOTHÈSE]

## 12. Technologies probables
Composition possible en React/Next.js avec image plein cadre + overlay de texte ; portrait
probablement une vraie séance photo, pas un rendu généré [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le portrait traité en pleine hauteur comme un vrai élément de composition (pas un simple fond
flouté) donne au visuel une dimension éditoriale forte, presque affiche de film.
La sobriété du nombre de composants (3 calques) laisse toute la place à la photo et au titre —
rien ne vient diluer l'impact.
Un seul accent couleur réservé aux mentions secondaires, jamais sur le titre principal, crée une
hiérarchie claire entre "ce qui accroche" (titre blanc massif) et "ce qui contextualise" (accent).

## 14. Défauts observés
Nav très discrète, presque invisible sur fond noir — pourrait nuire à la découvrabilité des
sections si l'utilisateur ne remarque pas les liens [HYPOTHÈSE]
Aucun CTA d'action clair (pas de "réserver", "contacter") visible dans le hero — repose entièrement
sur le scroll pour la suite du parcours [FAIT]

## 15. Éléments à réutiliser
Portrait/sujet en pleine hauteur comme élément de composition à part entière, pas un fond dilué
Un seul accent couleur réservé aux mentions secondaires, jamais sur l'élément le plus important
Sobriété du nombre de calques — 3 suffisent pour un impact fort

## 16. Éléments à éviter
Nav trop discrète au point de nuire à la découvrabilité des sections
Absence de CTA d'action clair dans un hero destiné à convertir

## 17. Recommandations pour le projet
Le principe "sujet en pleine hauteur + titre serif massif + un seul accent discret" est
transposable à tout portfolio créatif (photographe, vidéaste, designer) qui veut un rendu
éditorial premium plutôt qu'un template SaaS générique.
Si conversion réelle attendue : ajouter un CTA explicite (pas seulement un indicateur de scroll).

## 18. Cahier des charges final
Stack suggérée : hero React avec image plein cadre object-fit: cover, titre en serif (voir
Agents_Bibliotheque_Typographies.md familles "Sombres & Feutrées"), accent couleur unique à
choisir sur-mesure (jamais recopier l'ambre exact de cette réf).
Reste 100% original — nom de marque, adresse et texte exact jamais repris.
