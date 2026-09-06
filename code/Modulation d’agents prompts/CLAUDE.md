# Instructions du projet

## Bibliothèque de prompts — HG Prompt

Charge automatiquement à chaque session : @AGENT-CORE.md

Ce fichier contient :
- Séquence d'exécution obligatoire (ÉTAPE 0 → 5)
- Interdictions absolues
- Obligations strictes
- Règles de fusion de prompts (CAS A / B / C)
- Table de sélection complète (trigger → ID → module)

## Charger un module selon la demande

| Demande concerne... | Charger |
|---|---|
| header, menu, breadcrumb, sidebar, pagination | @AGENT-NAV.md |
| pages d'accueil, about, contact, blog, dashboard, profil | @AGENT-PAGES.md |
| produit, panier, checkout, commande, wishlist | @AGENT-ECOM.md |
| connexion, inscription, mot de passe, onboarding | @AGENT-AUTH.md |
| hero, témoignages, FAQ, tarifs, modal, toast, cookie | @AGENT-UI.md |
| emails (bienvenue, confirmation, reset, newsletter) | @AGENT-EMAIL.md |
| skeleton, maintenance, 500, 403 | @AGENT-PERF.md |
| footer (tous types) | @AGENT-FOOTERS.md |
| landing pages (tous types) | @AGENT-LP.md |
| formulaires, tableaux de données | @AGENT-FORMS.md |
| cas complexe / projet en production | @AGENT-DENSE.md |

## Règles du projet

- Toujours exécuter l'ÉTAPE 0 avant toute modification — sans exception
- Toujours attendre validation explicite après ÉTAPE 3 avant d'implémenter
- Mot de restauration : `RESTAURER VERSION_PRÉCÉDENTE`
- Fusion de prompts : consulter section "RÈGLES DE FUSION" dans AGENT-CORE.md avant de combiner deux prompts sur le même fichier
