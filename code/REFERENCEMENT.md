# PROTOCOLE SEO & GEO

**Objectif :** Définir et appliquer les standards impératifs de référencement (SEO), d'optimisation pour les moteurs IA (GEO) et de qualité technique.
**Statut :** Le référencement n'est pas une couche de vernis ajoutée à la fin. **Chaque ligne de code, chaque route, et chaque composant a un impact sur la découvrabilité.**

---

## 0. PRÉREQUIS & CONTEXTE (OBLIGATOIRE)

Avant toute action:
1.  **Scanner le Stack :** Identifier le framework (Next.js, Nuxt, Astro, WP, Custom) et le mode de rendu (SSR, SSG, CSR).
2.  **Localiser les Configs :** Trouver les fichiers de configuration SEO (ex: `next-seo.config`, `nuxt-seo`, plugins WP).
3.  **Vérifier l'Environnement :** Distinguer `production` vs `staging`/`dev`.
    *   *Règle d'or :* Les sitemaps et robots.txt de staging doivent bloquer l'indexation (`noindex`).

---

## 1. SEO TECHNIQUE & ARCHITECTURE

### 1.1. Fichiers Racine & Accès
- [ ] **robots.txt** : Présent, bloque les ressources sensibles (admin, API privées, staging), autorise les assets CSS/JS.
- [ ] **sitemap.xml** : Généré dynamiquement ou statique, contient uniquement les URL canoniques en 200, exclut les redirections et les `noindex`.
- [ ] **manifest.json** : Validé (pour PWA/Branding).
- [ ] **security.txt** : Présent dans `.well-known/` (contact sécurité).

### 1.2. URLs & Redirections
- [ ] **Canonical** : Absolue et auto-référencée (`<link rel="canonical" href="..." />`).
- [ ] **Structure** : "Slug" propre, pas d'IDs numériques, hiérarchie logique.
- [ ] **Trailing Slash** : Cohérence stricte (choisir avec ou sans, et rediriger l'autre en 301).
- [ ] **i18n (si multi-langue)** : Balises `hreflang` correctes et réciproques sur toutes les pages.

### 1.3. Performance & Crawl Budget
- [ ] **Core Web Vitals** : LCP < 2.5s, INP < 200ms, CLS < 0.1.
- [ ] **Images** : Formats Next-Gen (WebP/AVIF), `width`/`height` explicites (pour éviter le CLS), `loading="lazy"` (sauf LCP).
- [ ] **Rendu** : Préférendre le SSR/SSG pour le contenu public (critique pour les crawlers IA et Googlebot).
- [ ] **JavaScript** : Hydratation partielle ou différée si possible. Le contenu textuel doit être accessible sans JS si possible.

**Accessibilité (WCAG 2.1/2.2 AA minimum) :**
- [ ] Navigation au clavier fonctionnelle (focus visible).
- [ ] Contrastes de couleurs suffisants.
- [ ] Formulaires : `<label>` liés aux `<input>`, messages d'erreur explicites (`aria-describedby`).
- [ ] Médias : Transcripts pour les vidéos, audio.

**PWA (Si applicable, sinon N/A) :**
- [ ] `manifest.json` valide, icônes fournies, Service Worker pour le cache hors-ligne.

---

## 2. SEO ON-PAGE & SÉMANTIQUE

Chaque page doit respecter la structure "Entité - Attribut - Valeur" :

- [ ] **Title** : `<Mot-clé principal> | <Marque>` (Max 60 car). Unique.
- [ ] **Meta Description** : Incitative, contient le mot-clé, répond à l'intention (Max 160 car).
- [ ] **H1** : Unique, reflète le sujet principal, pas de "Bienvenue" générique.
- [ ] **HTML Sémantique** : Usage correct de `<main>`, `<article>`, `<section>`, `<aside>`, `<nav>`.
- [ ] **Maillage** : Liens internes avec ancres descriptives (pas de "cliquez ici").
- [ ] **Accessibilité (a11y)** : Contraste AA, `alt` descriptifs (pas de "image1.jpg"), labels sur les formulaires, navigation clavier.

**Contenu & E-E-A-T (Experience, Expertise, Authoritativeness, Trust) :**
- [ ] Auteur identifié (balise ou section visible) pour les articles/blogs.
- [ ] Dates de publication et de dernière mise à jour visibles.
- [ ] Liens externes vers des sources faisant autorité.
- [ ] Images avec `alt` descriptif (pas de "image1.jpg" ou "sans titre").
- [ ] Maillage interne contextuel (pas de liens "cliquez ici").

---

## 3. GEO (OPTIMISATION POUR IA / LLM)

Le GEO vise à rendre le projet compréhensible, citable et utilisable par les IA (ChatGPT, Perplexity, Claude, etc.).

**A. Gestion des Crawlers IA (`robots.txt`) :**
Définir explicitement les règles pour les bots IA. Par défaut, autoriser sauf contre-indication :
```text
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /
```
*(Si le projet est privé/payant, utiliser `Disallow: /` pour ces bots).*

**B. Fichiers de contexte IA :**
Maintenir à la racine du projet :
- `llms.txt` : Résumé du projet, liens vers la documentation, API, et fonctionnalités clés.
- `llms-full.txt` (optionnel) : Documentation exhaustive pour le contexte LLM.
*Règle : Ces fichiers doivent être mis à jour à chaque changement majeur de l'API ou des fonctionnalités.*

**C. Structuration du contenu pour l'extraction (Answer Engine Optimization) :**
- Formater les réponses aux questions fréquentes de manière directe (ex: "Qu'est-ce que X ? X est...").
- Utiliser des listes à puces et des tableaux pour les données comparatives (les IA les extraient plus facilement).
- Créer des définitions claires et isolées pour les entités propres au projet.
- Entités Nommées** : Utiliser les noms complets des produits/personnes au moins une fois pour aider la désambiguïsation.
---

## 4. DONNÉES STRUCTURÉES (JSON-LD)

**Règle :** Un schema invalide est pire que pas de schema.
**Règle stricte :** Le JSON-LD doit être la traduction exacte du contenu visible. Le spam de schémas entraîne des pénalités manuelles.
**Validation :** Utiliser la syntaxe JSON-LD stricte.

- [ ] **Organization** : Logo, SameAs (liens sociaux), Contact.
- [ ] **WebSite** : Potentiel de recherche (SearchAction).
- [ ] **BreadcrumbList** : Obligatoire pour la navigation.
- [ ] **Article/BlogPosting** : Si applicable (Author, DatePublished, Image).
- [ ] **FAQPage** : *Uniquement* si la FAQ est visible à l'écran (sinon spam).
- [ ] **Product** : Prix, Disponibilité, Avis (si applicable).
- `speakable` (pour les sections de pages destinées à la lecture vocale/IA).

---

## 5. OPEN GRAPH & SOCIAL

Vérifier la présence et la validité des balises pour le partage social :
- **OG :** `og:title`, `og:description`, `og:image` (ratio 1.91:1 recommandé), `og:url`, `og:type`, `og:locale`.
- **Twitter :** `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`.
- [ ] **og:image** : Dimensions 1200x630px, < 5MB, URL absolue.
- [ ] **og:title / og:description** : Adaptés au partage social (plus émotionnels/accrocheurs que le SEO pur).
- [ ] **Twitter Cards** : `summary_large_image`.

---

## 6. PROCÉDURE DE MAINTENANCE (WORKFLOW)

À chaque modification de code touchant le contenu ou la structure :

1.  **Impact Analysis** : Le changement affecte-t-il une URL, un H1, ou une donnée structurée ?
2.  **Sync `llms.txt`** : Si une nouvelle fonctionnalité ou page majeure est ajoutée, le fichier `llms.txt` doit être mis à jour.
3.  **Sitemap Check** : Si nouvelle page -> Vérifier qu'elle est éligible à l'indexation.
4.  **Console Check** : Vérifier l'absence d'erreurs 404 ou JS bloquantes.

---

## 7. FORMAT DE RAPPORT D'AUDIT (OBLIGATOIRE)

Générer ce rapport après chaque audit ou modification majeure.

```markdown
# 📊 AUDIT SEO & GEO — [DATE]

## 1. SCORES & SANTÉ
| Métrique | Score | Statut | Commentaire |
| :--- | :---: | :---: | :--- |
| **SEO Technique** | /100 | 🟢/🟡/🔴 | (ex: Sitemap OK, mais Hreflang manquant) |
| **On-Page & Sémantique** | /100 | 🟢/🟡/🔴 | (ex: H1 manquants sur 2 pages) |
| **GEO (Readability)** | /100 | 🟢/🟡/🔴 | (ex: llms.txt à jour, contenu trop vague) |
| **Accessibilité** | /100 | 🟢/🟡/🔴 | |
| **Perf (CWV)** | /100 | 🟢/🟡/🔴 | |

## 2. FICHIERS CRITIQUES
- [ ] `robots.txt` : [OK / À CORRIGER]
- [ ] `sitemap.xml` : [OK / À CORRIGER]
- [ ] `llms.txt` : [OK / À METTRE À JOUR]
- [ ] `manifest.json` : [OK / N/A]

## 3. ACTIONS CORRECTIVES (CODE)
*Lister les snippets de code à implémenter pour corriger les erreurs.*

**Exemple de correction JSON-LD :**
```json
// Snippet à ajouter dans <head>
```

**Exemple de correction Meta :**
```html
<!-- Remplacer le title actuel par : -->
```
## 8. INTERDITS FORMELS

1.  **NE JAMAIS** inventer une URL dans le sitemap.
2.  **NE JAMAIS** ajouter un schema `FAQPage` si le HTML ne contient pas la FAQ visible.
3.  **NE JAMAIS** laisser une image sans `alt` (utiliser `alt=""` si décoratif, jamais vide).
4.  **NE JAMAIS** indexer une page de staging/dev.
5.  **NE JAMAIS** supprimer le `llms.txt` ou le vider sans justification.
```