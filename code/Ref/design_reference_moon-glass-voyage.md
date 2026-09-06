# DESIGN REFERENCE — Moon (carte glassmorphism, voyage spatial fictif)
Type input : IMAGE STATIQUE
Domaine observé : Voyage/booking (concept spéculatif spatial) — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ
Source analysée en entier : OUI (1 capture, composition unique carte + fond)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, prix, marque ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE — jamais identique. Consultable pour TOUT type de projet.

---

## 1. Informations générales
Nom : concept card de réservation de "voyage" vers la Lune (produit fictif/spéculatif) [FAIT]
Type : mockup UI conceptuel, carte de réservation unique sur fond de paysage désertique/lunaire [FAIT]
Objectif supposé : démonstration de style/exercice créatif (glassmorphism + typographie), pas un
vrai produit commercial [HYPOTHÈSE]
Public cible : audience design/inspiration (Dribbble/Behance probable) [HYPOTHÈSE]

## 2. Structure générale
Fond photo/rendu 3D : paysage désertique rocheux avec ciel dégradé pastel au coucher du soleil,
éléments sphériques métalliques et lumineux disposés au sol [FAIT]
Carte centrale unique : forme pilule verticale à coins très arrondis, effet verre dépoli (fenêtre
translucide qui laisse voir le paysage flouté derrière) [FAIT]
Dans la carte, de haut en bas : cercle image (fragment de roche/paysage), libellé "destination",
nom du lieu en grand, dates + référence produit, prix, bouton de paiement type Apple Pay, mention
légère en bas [FAIT]
Ordre de lecture : où → quand → combien → comment payer [FAIT]

## 3. Palette graphique
Fond : dégradé pastel doux (bleu-gris → rose-pêche), lumineux et onirique [FAIT]
Carte : verre translucide gris-brun qui filtre la couleur du fond, pas une couleur propre fixe [FAIT]
Texte : blanc/blanc cassé sur la carte translucide [FAIT]
Bouton paiement : noir plein, contraste fort avec la carte translucide claire [FAIT]
Éléments décoratifs (sphères) : argenté/métallique + un halo rose lumineux au sol [FAIT]
Principe à retenir : la carte ne porte AUCUNE couleur propre — elle filtre et adoucit les
couleurs du fond, principe de glassmorphisme fonctionnel plutôt que décoratif (le fond change,
la carte s'adapte visuellement sans être retouchée) — voir
Agents_Standards_Interface_Web.md Section 7bis pour l'implémentation technique de cet effet.

## 4. Typographie
Nom de destination ("Moon") : sans-serif regular à medium, grande taille, blanc [FAIT]
Libellés (destination/dates/prix) : sans-serif fine, petite taille, discrète [FAIT]
Mention légère bas de carte : sans-serif italique fine, ton presque poétique/slogan [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Carte glassmorphism verticale** — élément UI central et unique de toute la composition, forme
pilule à fenêtre ronde intégrée en haut (façon hublot) [FAIT]
**Bouton paiement type wallet natif** — icône + libellé, forme pilule noire pleine, reproduit le
pattern visuel d'un bouton de paiement mobile natif [FAIT]
**Fenêtre "hublot" dans la carte** — cercle qui cadre un fragment du paysage réel, lien visuel
direct entre la carte et son environnement plutôt qu'une icône abstraite [FAIT]
États hover/clic : non observable, mockup statique [NON OBSERVÉ]

## 5bis. Grille de positionnement
```
ÉLÉMENT : CARTE GLASSMORPHISM CENTRALE
Zone → CENTER
X% → ≈35% | Y% → ≈20% | W% → ≈30% | H% → ≈55% [HYPOTHÈSE]

ÉLÉMENT : FENÊTRE HUBLOT (cercle image)
Zone → TOP-CENTER (dans la carte)
X% → ≈40% | Y% → ≈24% | W% → ≈20% | H% → ≈14% [HYPOTHÈSE]

ÉLÉMENT : BOUTON PAIEMENT
Zone → MID-CENTER, bas de carte
X% → ≈39% | Y% → ≈58% | W% → ≈22% | H% → ≈5% [HYPOTHÈSE]
```

## 5ter. Pile de calques
```
N° │ CALQUE                          │ MODE   │ OPACITÉ EST. │ TAG
 3 │ Texte + bouton dans la carte     │ Normal │ 100%         │ FAIT
 2 │ Carte glassmorphism (blur+teinte)│ Normal │ ≈50-65%      │ HYPOTHÈSE
 1 │ Fond paysage désertique + sphères│ Normal │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique.

## 7. Chronologie
NON APPLICABLE — input image statique.

## 8. Interactions
Non observable — mockup statique. Le bouton de paiement suggère une action de clic réelle dans
un contexte d'usage final [HYPOTHÈSE].

## 9. Effets visuels
Glassmorphisme fonctionnel complet : blur + transparence + légère saturation du fond visible à
travers la carte — cas d'école conforme aux critères d'usage recommandés (panneau flottant sur
fond riche, pas sur fond uni) [FAIT]
Rendu 3D/CGI probable pour les sphères métalliques et le paysage (cohérence lumineuse trop
parfaite pour une photo brute) [HYPOTHÈSE]
Halo lumineux rose au sol, éclairage doux général façon golden hour [FAIT]

## 10. Responsive
Un seul format fourni → comportement autre ratio non observable.

## 11. Accessibilité
Contraste texte blanc sur carte translucide claire (zone rose/pastel du fond) : risque de
contraste insuffisant selon la zone du fond derrière — exactement le risque documenté en
Agents_Standards_Interface_Web.md Section 7bis (contraste sur le pire cas du fond, pas un
instantané figé) [HYPOTHÈSE]
Bouton paiement noir : contraste bon, se détache clairement [FAIT]

## 12. Technologies probables
Rendu 3D (Blender/Cinema4D ou génération IA) pour le fond, composition Figma pour la carte UI
avec effet blur natif [HYPOTHÈSE]

## 13. Ce qui rend l'interface exceptionnelle
Le glassmorphisme est ici un cas d'usage justifié et pas décoratif : la carte a une vraie raison
d'être translucide (laisser deviner le lieu vendu, à travers un hublot) plutôt qu'un effet de
mode plaqué sans lien au sujet — exactement la nuance attendue en Section 7bis du fichier
standards.
Le hublot circulaire qui cadre un fragment du paysage réel crée un lien direct entre l'UI et le
produit vendu, plus fort qu'une simple photo miniature classique.
Le bouton de paiement qui reprend le pattern visuel d'un wallet natif rassure immédiatement sur
la simplicité de la transaction.

## 14. Défauts observés
Le risque de contraste texte/fond translucide sur les zones les plus claires n'est pas vérifiable
avec certitude sur un seul instantané — à tester sur plusieurs positions de fond avant validation
si le concept devient un vrai produit [HYPOTHÈSE]
Aucun élément de réassurance (avis, sécurité paiement) visible — cohérent avec un statut de
concept/exercice plutôt qu'un vrai produit commercial [FAIT sur l'absence]

## 15. Éléments à réutiliser
Glassmorphisme justifié par un vrai besoin de superposition contextuelle (voir hublot), pas un
effet décoratif systématique
Fenêtre circulaire qui cadre un fragment du sujet réel plutôt qu'une icône abstraite
Bouton de paiement qui reprend un pattern de wallet natif pour rassurer sur la simplicité

## 16. Éléments à éviter
Poser un glassmorphisme sur un fond qui pourrait devenir trop clair sans prévoir de fallback de
contraste (voir Agents_Standards_Interface_Web.md Section 7bis, fallback obligatoire)

## 17. Recommandations pour le projet
Le principe "carte glass avec hublot qui cadre le sujet vendu" est transposable à toute carte
produit qui vend un LIEU ou une EXPÉRIENCE (voyage réel, immobilier, événement) — jamais à un
produit qui n'a pas de lien visuel direct à cadrer.
Si converti en vrai produit : prévoir le fallback de contraste obligatoire du glassmorphisme
(Standards Section 7bis) avant mise en prod.

## 18. Cahier des charges final
Stack suggérée si web : composant carte avec backdrop-filter: blur(16px) + fallback @supports
opaque, image de fond en cover, bouton paiement stylé façon Apple/Google Pay natif si intégration
réelle prévue (sinon design custom cohérent).
Reste 100% original — nom de destination réel, prix et texte exact jamais repris tels quels.
