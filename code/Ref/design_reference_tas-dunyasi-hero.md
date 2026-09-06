# DESIGN REFERENCE — Taş Dünyası (hero site pierre/brique, nuit)
Type input : IMAGE STATIQUE
Domaine observé : Artisanat/BTP (pierre, brique décorative) — usage NON restreint à ce domaine
Niveau confiance global : ≈60% FAIT / 35% HYPOTHÈSE / 5% NON OBSERVÉ — estimation approx
Source analysée en entier : OUI (1 capture, hero desktop complet visible)

⚠️ CE FICHIER = INSPIRATION STRUCTURELLE UNIQUEMENT.
Ne jamais copier texte exact, nom de marque, langue, logo ou palette figée listés ci-dessous.
Objectif : recréation ORIGINALE, de qualité égale ou supérieure — jamais identique.
Consultable pour TOUT type de projet, même hors du domaine observé ci-dessus.

---

## 1. Informations générales
Nom : hero d'un site vitrine d'entreprise de pierre/brique décorative (marque non reproduite) [FAIT]
Source : capture fournie par l'utilisateur, origine template/site réel non précisée [NON OBSERVÉ]
Type : site vitrine artisan/BTP, page d'accueil hero plein écran [FAIT]
Objectif supposé : générer des demandes de devis pour un service de pose de pierre/brique [FAIT]
Public cible : propriétaires/particuliers cherchant une rénovation de façade [HYPOTHÈSE]
Langue observée : turc — non pertinent à reproduire, adapter à la langue réelle du public visé [FAIT]

## 2. Structure générale
Nav horizontale transparente sur la photo : logo + baseline à gauche, liens centrés, CTA plein
("Teklif Al" = demander un devis) à droite [FAIT]
Photo plein cadre nocturne d'une maison moderne en bois/pierre, overlay sombre pour la lisibilité [FAIT]
Badge pilule discret centré au-dessus du titre (nom de la marque/enseigne locale) [FAIT]
Titre 1 ligne, 2 couleurs (blanc + orange sur le mot clé) [FAIT]
Sous-titre 2 lignes centré, description du service + zone géographique [FAIT]
2 CTA côte à côte (plein orange + contour blanc/WhatsApp) [FAIT]
Bandeau de 4 statistiques chiffrées alignées horizontalement en bas de hero, séparées par un
indicateur "Keşfet" (découvrir/scroll) au centre [FAIT]
Chat widget flottant en bas à droite (bulle "Powered by Zoer") [FAIT]
Ordre de lecture : nav → badge → titre → sous-titre → CTA → stats → scroll indicator [FAIT]

## 3. Palette graphique
Fond : photo nocturne désaturée avec overlay noir/bleu-nuit pour contraste texte [FAIT]
Accent unique : orange vif (CTA plein, mot clé du titre, chiffres stats), ≈ #E8631C [HYPOTHÈSE
pour le HEX exact]
Texte principal : blanc pur [FAIT]
Bouton secondaire : contour blanc fin, fond transparent [FAIT]
Principe à retenir : UN SEUL accent chaud (orange) répété à 3 endroits stratégiques (CTA, mot
clé titre, chiffres) sur une photo nocturne désaturée — cohérence par répétition d'un accent
unique plutôt que par palette riche (voir Agents_Bibliotheque_Palettes.md familles chaudes sur
fond sombre, ex. Suie & Orange Brûlé, en gardant la nuance : ne jamais copier le HEX exact).

## 4. Typographie
Titre hero : sans-serif bold condensée, grande taille, un seul mot en accent couleur [FAIT]
Sous-titre : sans-serif regular, taille moyenne, bonne lisibilité sur photo sombre [FAIT]
Stats (bandeau bas) : sans-serif bold très grande taille pour le chiffre, petite légende dessous [FAIT]
Police exacte non identifiable [NON OBSERVÉ]

## 5. Composants UI
**Nav transparente sur hero** — pas de fond plein, dépend du contraste de la photo derrière [FAIT],
état sticky au scroll non observable sur capture unique [NON OBSERVÉ]
**Badge pilule flottant** — mention marque au-dessus du titre, contour fin semi-transparent [FAIT]
**Duo de CTA** — 1 plein (action principale : devis) + 1 contour (action alternative : WhatsApp,
canal de contact local pertinent) — hiérarchie claire entre 2 intentions différentes [FAIT]
**Bandeau stats à 4 items** — chiffre + légende, séparés visuellement par un indicateur de scroll
central plutôt qu'un simple espacement neutre [FAIT]
**Chat widget flottant** — bulle ronde bas-droite, marque du fournisseur de l'outil visible
("Powered by Zoer") — élément tiers, pas à reproduire tel quel si autre outil utilisé [FAIT]
États hover/clic : non observable sur image statique [NON OBSERVÉ]

## 5bis. Grille de positionnement — verrouillage adapté
```
ÉLÉMENT : TITRE HERO
Zone      → CENTER
X%        → ≈28% | Y%        → ≈32% | W%        → ≈44% | H%        → ≈10% [HYPOTHÈSE]

ÉLÉMENT : DUO CTA
Zone      → CENTER (sous sous-titre)
X%        → ≈36% | Y%        → ≈55% | W%        → ≈28% | H%        → ≈6% [HYPOTHÈSE]

ÉLÉMENT : BANDEAU STATS (4 items)
Zone      → BOT-CENTER
X%        → ≈28% | Y%        → ≈65% | W%        → ≈46% | H%        → ≈10% [HYPOTHÈSE]
Alignement → 4 blocs égaux, séparateur central (indicateur scroll) entre le 2e et le 3e
```

## 5ter. Pile de calques — verrouillage adapté
```
N° │ CALQUE                          │ MODE     │ OPACITÉ EST. │ TAG
 4 │ Nav + badge + titre + CTA+ stats │ Normal   │ 100%         │ FAIT
 3 │ Chat widget flottant             │ Normal   │ 100%         │ FAIT
 2 │ Overlay sombre dégradé           │ Multiply │ ≈50-60%      │ HYPOTHÈSE
 1 │ Photo maison nocturne (fond)     │ Normal   │ 100%         │ FAIT
```

## 6. Animations
NON APPLICABLE — input image statique, aucune animation observable.

## 7. Chronologie
NON APPLICABLE — input image statique, aucune animation observable.

## 8. Interactions
Non observable sur image statique. Nav suggère scroll classique, badge "Keşfet" suggère un
indicateur de scroll interactif [HYPOTHÈSE].

## 9. Effets visuels
Overlay sombre en dégradé sur la photo, renforce la lisibilité du texte blanc [FAIT]
Aucun glassmorphism/blur détecté sur les composants UI eux-mêmes (nav, badge, CTA restent
opaques ou à contour simple) [FAIT]
Photo légèrement désaturée/assombrie pour unifier le ton nocturne [HYPOTHÈSE]

## 10. Responsive
Un seul format fourni (desktop) → comportement mobile/tablette non observable.

## 11. Accessibilité
Contraste texte blanc sur overlay sombre : bon [FAIT]
Contraste badge pilule (texte clair sur fond semi-transparent clair) : à vérifier, zone la plus
fragile de la composition [HYPOTHÈSE]
Taille des CTA : généreuse, bonne cible tactile probable [HYPOTHÈSE]

## 12. Technologies probables
Site probablement construit sur un builder no-code (le chat widget "Powered by Zoer" suggère un
écosystème SaaS site+chat intégré) [HYPOTHÈSE]
Framework sous-jacent non identifiable [NON OBSERVÉ]

## 13. Ce qui rend l'interface exceptionnelle
Le duo CTA plein/contour avec une option WhatsApp directement visible en hero est une réponse
concrète à un contexte réel (contact rapide informel), pas un simple "Contactez-nous" générique.
Le bandeau stats intégré directement dans le hero (pas relégué à une section séparée plus bas)
donne une preuve sociale immédiate sans quitter l'écran d'accueil.
Un seul accent couleur répété à 3 endroits crée une cohérence visuelle forte malgré une photo
riche en détails (maison, végétation, éclairage).

## 14. Défauts observés
Le badge pilule "Keşfet" au centre du bandeau stats casse l'alignement des 4 chiffres — lecture
un peu hésitante à cet endroit précis [FAIT]
Contraste du texte de nav sur la zone la plus claire de la photo (ciel) potentiellement faible
[HYPOTHÈSE]
Aucune indication de langue/zone alternée si le site vise une audience non-turcophone [FAIT sur
l'absence]

## 15. Éléments à réutiliser
Duo de CTA avec un canal de contact informel (WhatsApp) en option secondaire, pertinent pour un
contexte où la messagerie directe est un canal de vente réel
Bandeau de preuve sociale chiffrée intégré au hero plutôt que relégué plus bas
Un seul accent couleur répété à quelques endroits clés plutôt qu'une palette dispersée

## 16. Éléments à éviter
Insérer un élément de séparation (ici l'indicateur scroll) au milieu d'une rangée de données qui
devrait rester visuellement uniforme

## 17. Recommandations pour le projet
Le principe "CTA principal + canal de contact local pertinent" est directement transposable au
contexte béninois (Mobile Money, WhatsApp Business) pour tout site vitrine de service local.
Le bandeau stats en hero est un pattern réutilisable pour Delta Leader's ou tout projet artisan/
service ayant des chiffres de confiance réels à mettre en avant immédiatement.

## 18. Cahier des charges final
Stack suggérée : hero React avec image de fond + overlay CSS gradient, bandeau stats en
composant réutilisable (props: chiffre, légende), CTA secondaire pointant vers un lien
wa.me pré-rempli si WhatsApp Business est le canal réel utilisé.
Reste 100% original — nom de marque, texte turc exact et logo jamais repris.
