# Fiche de Décisions Verrouillées — Refonte Visuelle "Le Délice Africain"

> **Fichier d'orchestration :** `Refonte_LeDeliceAfricain_Decisions.md`
> Ce document consigne l'ADN visuel, les tokens de design et les choix techniques verrouillés pour la refonte visuelle complète du projet.

---

## 1. ADN Visuel Retenu
**Concept :** *Warm Terracotta & Luxury Gold (Gastronomie Béninoise Élevée)*
Une esthétique culinaire haut de gamme combinant la chaleur des braises béninoises (Terracotta), l'élégance de la cuisine royale (Or chaud) et la fraîcheur des ingrédients naturels (Vert Feuille de Bananier).

## 2. Palette de Couleurs Verrouillée
- `--primary-color: #8C2D19;` (Terracotta Profond / Épices d'Afrique)
- `--secondary-color: #D4AF37;` (Or Chaud Gastronomique)
- `--accent-color: #2E5A44;` (Vert Feuille / Fraîcheur Botanique)
- `--light-color: #FAF6F0;` (Fond Ivoire Chaud / Texture Lin)
- `--dark-color: #1A1412;` (Ébène Cacaoté / Profondeur)
- `--card-bg: #FFFFFF;` (Blanc Pur / Lisibilité)
- `--shadow-premium: 0 12px 35px rgba(26, 20, 18, 0.08);`

## 3. Pairing Typographique Verrouillé
- **Titre / Display :** `'Playfair Display', serif` (Graisses : 600, 700) — Élégance gastronomique et noblesse.
- **Corps de texte / UI :** `'Plus Jakarta Sans', sans-serif` (Graisses : 400, 500, 600) — Lisibilité irréprochable et modernité.

## 4. Technique Signature (Direction Artistique Section 4.4bis)
- **Technique choisie :** **n°3 (Text Split-Reveal / Shimmer Gold)** + **n°7 (Tilt 3D & Depth Glow sur cartes)**.
- **Où elle apparaît :** Sur tous les titres majeurs H1/H2 (effet doré animé au scroll/survol) et sur les cartes de plats signature (élévation 3D et lueur dorée au survol).

## 5. Techniques Traitement Visuel (Quota min. 2 — Section 6bis)
1. **Texture Grain/Noise Overlay & Mesh Gradient** (Section 5) sur les bannières et hero.
2. **Glassmorphism & Lueur de Bordure Dynamique (Border Glow Accent)** (Section 2) sur les cartes produits, filtres et badges.

## 6. Planning des Lots de Refonte
- [ ] **Lot 1 :** Design System CSS (`css/style.css`) + Imports Google Fonts + Animations de base.
- [ ] **Lot 2 :** Page d'Accueil (`index.html`) — Nouvelle architecture méconnaissable.
- [ ] **Lot 3 :** Carte & Menu (`resto.html`) et Fiche Produit (`produit.html`).
- [ ] **Lot 4 :** Galerie Photo (`galerie.html`) & Composants secondaires (`nav.html`, `profil.html`, `card.html`).
