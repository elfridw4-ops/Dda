---
description: Use when improving loading performance, rendering, animations, skeletons, errors, maintenance pages, network resilience, or perceived performance.
---


Treat performance as part of product quality.

Before optimizing:
- identify the actual bottleneck;
- inspect network requests;
- inspect render-heavy components;
- inspect bundle/dependency cost;
- inspect images/fonts;
- inspect layout shifts;
- inspect unnecessary re-renders.

Do not optimize blindly.

LOADING
For meaningful loading delays:
- use skeletons that reproduce the final component dimensions;
- avoid layout shifts;
- avoid flashing between loading and loaded states;
- use lazy loading when appropriate.

IMAGES
- use appropriate dimensions and formats;
- lazy-load non-critical images;
- prioritize above-the-fold assets when justified;
- avoid loading huge images for small displays.

ANIMATIONS
- prefer transform/opacity;
- keep animations short and purposeful;
- avoid expensive effects on mobile;
- respect prefers-reduced-motion.

NETWORK
Handle:
- loading
- timeout
- retry where appropriate
- offline/poor network conditions when relevant
- server errors
- partial failure

ERROR PAGES
500:
- never expose stack traces;
- provide a human-readable message;
- offer recovery actions;
- log technical details securely.

403:
- explain access denial without leaking sensitive information;
- provide a useful next action.

MAINTENANCE:
- explain the situation clearly;
- show estimated duration only if known;
- provide an alternative contact/channel when applicable;
- preserve brand consistency.

Never claim a performance improvement without measuring or verifying the relevant behavior when measurement is available.