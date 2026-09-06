# DESIGN REFERENCE — Sultan Karimi (bannière portfolio visual designer)
Type input : IMAGE STATIQUE
Domaine observé : Personal branding / portfolio designer visuel — usage NON restreint à ce domaine
Niveau confiance global : ≈ 60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (1 bannière/hero unique, pas de scroll fourni)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, langue, marque, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : Sultan Karimi — Lens & Layers [FAIT]
Source : capture fournie par l'utilisateur, probablement bannière de présentation (portfolio, Behance ou réseau social) [HYPOTHÈSE]
Type : Bannière personnelle / hero de portfolio designer visuel [FAIT]
Objectif supposé : présentation personnelle + vitrine services créatifs [FAIT]
Public cible : clients/marques cherchant du design social media, branding, pitch deck [FAIT]
Durée vidéo : non applicable (image statique)

## 2. Structure générale
Format bannière large (ratio proche 16:9), cadre fin doré délimitant toute la composition [FAIT]
Ligne de services en majuscules tout en haut, séparée par des points : "SOCIAL MEDIA DESIGN • PITCH DECK DESIGN • BRANDING... • AMAZON LISTING IMAGE & EBC CONTENT DESIGN" [FAIT]
Nom + marque personnelle en haut à gauche : "SULTAN KARIMI" / "Lens & Layers" [FAIT]
Mot "CREATIVE" en très grand, en fond, chevauchant le portrait — élément dominant de la composition [FAIT]
Portrait photo (homme, lunettes, barbe, hoodie noir) positionné au centre, superposé au mot géant [FAIT]
Colonne droite : accroche "Design that speaks. Visuals that convert." + titre de poste "VISUAL DESIGNER" [FAIT]
Icônes réseaux sociaux (Behance, Instagram) + pseudos, en bas à gauche [FAIT]
Paragraphe de bio en bas, pleine largeur [FAIT]
Hiérarchie de lecture : nom → mot "CREATIVE" → portrait → accroche/titre → bio [FAIT]

## 3. Palette graphique
Fond dominant noir/anthracite très sombre, ≈ #1A1A1A [HYPOTHÈSE]
Accent doré/bronze pour le nom, le cadre et le mot "CREATIVE" (dégradé doré→brun), ≈ #C9A15A à #6B4A2A [HYPOTHÈSE]
Texte secondaire blanc cassé pour l'accroche et la bio [FAIT]
Aucune couleur vive additionnelle — palette volontairement restreinte (noir + doré) [FAIT]

## 4. Typographie
Mot "CREATIVE" : serif ou slab display très grand, graisse bold, en dégradé — élément typographique central de la composition [FAIT]
Nom "SULTAN KARIMI" : sans-serif, majuscules, taille moyenne, doré [FAIT]
Accroche/titre de poste à droite : sans-serif, contraste de graisse entre les deux lignes ("Design that speaks." plus fin, "VISUAL DESIGNER" plus bold) [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Cadre décoratif doré** — fine bordure entourant toute la bannière, angle arrondi léger [FAIT]
**Bloc services (ticker de texte)** — ligne horizontale de mentions séparées par des puces, haut de la composition [FAIT]
**Icônes sociales** — Behance + Instagram, taille petite, alignées horizontalement avec le pseudo [FAIT]
**Portrait** — photo studio, éclairage dirigé (lumière latérale visible sur le mur en fond), superposé au texte géant [FAIT]
Il ne s'agit pas d'une interface interactive mais d'une bannière statique — pas de boutons/CTA cliquables identifiés [FAIT]
États hover/clic/disabled : non applicables, pas de composant interactif dans cette bannière [NON OBSERVÉ]

## 5bis. Grille de positionnement — verrouillage adapté

```
ÉLÉMENT : MOT-SIGNATURE GÉANT (fond)
Zone      → CENTER (chevauche TOP-CENTER à BOT-CENTER)
X%        → ≈5% [HYPOTHÈSE]
Y%        → ≈20% [HYPOTHÈSE]
W%        → ≈90% (déborde visuellement du cadre de lecture) [HYPOTHÈSE]
H%        → ≈55% [HYPOTHÈSE]
Alignement → centré horizontalement, derrière le portrait (voir 5ter)

ÉLÉMENT : PORTRAIT
Zone      → CENTER à BOT-CENTER
X%        → ≈30% [HYPOTHÈSE]
Y%        → ≈15% [HYPOTHÈSE]
W%        → ≈40% [HYPOTHÈSE]
H%        → ≈80% [HYPOTHÈSE]
Alignement → superposé au mot-signature (devant lui, voir pile de calques)

ÉLÉMENT : NOM + MARQUE PERSONNELLE
Zone      → TOP-LEFT
X%        → ≈4% [HYPOTHÈSE]
Y%        → ≈8% [HYPOTHÈSE]
W%        → ≈25% [HYPOTHÈSE]
H%        → ≈8% [HYPOTHÈSE]
```

## 5ter. Pile de calques — verrouillage adapté

```
PILE DE CALQUES — Bannière Sultan Karimi
N° │ NOM DU CALQUE           │ MODE APPARENT       │ OPACITÉ EST. │ TAG
───┼──────────────────────────┼─────────────────────┼──────────────┼──────
 4 │ Nom + accroche + bio     │ Normal              │ 100%         │ FAIT
 3 │ Portrait (sujet)         │ Normal              │ 100%         │ FAIT
 2 │ Mot-signature géant      │ Normal (dégradé)    │ ≈70-85%      │ HYPOTHÈSE
 1 │ Fond noir uni            │ Normal              │ 100%         │ FAIT
```
Principe clé observé : le portrait (calque 3) passe DEVANT le mot géant (calque 2) — c'est ce
chevauchement qui crée la signature visuelle de cette réf (voir Section 13).

## 6. Animations
NON APPLICABLE — input image statique, aucune animation observable.

## 7. Chronologie
NON APPLICABLE — input image statique, aucune animation observable.

## 8. Interactions
Aucune interaction observable — bannière statique, pas de site/UI navigable visible [NON OBSERVÉ]

## 9. Effets visuels
Éclairage directionnel visible sur le mur derrière le sujet (lumière latérale chaude), probablement réel (photo studio) plutôt qu'un effet CSS [HYPOTHÈSE]
Dégradé doré sur le texte "CREATIVE" et le cadre [FAIT]
Aucun glassmorphism, blur ou glow numérique détecté [NON OBSERVÉ]

## 10. Responsive
Un seul format fourni (bannière large desktop/print) → comportement mobile non observable.

## 11. Accessibilité
Contraste texte doré sur fond noir : correct pour les gros titres, plus limite pour les petits libellés de service en haut (fin, petite taille) [HYPOTHÈSE]
Pas de composant interactif donc pas de sujet de navigation clavier ici [NON OBSERVÉ]

## 12. Technologies probables
Il s'agit d'un visuel de branding personnel, pas d'une interface web — probablement conçu en Photoshop/Illustrator, pas de stack front-end pertinent ici [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le mot "CREATIVE" géant en fond, superposé au portrait, crée une vraie signature visuelle mémorable (Section 6 Direction Artistique).
Palette restreinte à 2 couleurs (noir + doré) = discipline forte, rien ne vient diluer le message.
Cadre fin doré qui unifie toute la composition comme un objet fini, pas un simple montage.

## 14. Défauts observés
Le bloc de services en haut ("SOCIAL MEDIA DESIGN • PITCH DECK...") est visuellement compressé/tronqué au centre sur la capture — lisibilité réduite à cet endroit [FAIT]
Beaucoup d'informations tassées dans un seul visuel (services + nom + accroche + titre + bio + réseaux) — hiérarchie chargée pour une bannière unique [FAIT]

## 15. Éléments à réutiliser
Mot-clé géant en fond superposé au sujet principal comme signature visuelle
Palette à 2 couleurs disciplinée (dominante sombre + un seul accent métallique/chaud)
Cadre fin qui délimite et unifie une composition dense

## 16. Éléments à éviter
Surcharger un seul visuel avec trop de blocs d'information différents sans les hiérarchiser clairement

## 17. Recommandations pour le projet
Réutiliser le principe "mot-signature géant en fond" pour un hero de portfolio, adapté au métier réel du client (pas "CREATIVE" générique — un mot propre au sujet).
Si le projet a plusieurs infos à caser (services, bio, contact), les répartir sur plusieurs sections plutôt que dans un seul bloc dense comme ici.

## 18. Cahier des charges final
Stack suggérée pour une version web de ce type de hero : React + Tailwind, texte géant en position absolute derrière l'image (z-index), portrait en avant-plan avec masque/recadrage.
Prévoir un fallback lisible sur mobile pour le mot géant en fond (risque de débordement/illisibilité à petite largeur).
Reste 100% original — le mot-signature et la palette doivent être dérivés du sujet réel du nouveau projet, jamais recopiés tels quels ("CREATIVE" et le doré appartiennent à cette référence).
