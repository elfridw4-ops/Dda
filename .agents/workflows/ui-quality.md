---
description: Use when creating or modifying visual interfaces, components, cards, modals, dashboards, landing pages, forms, or design systems. Enforces coherent, purposeful, accessible UI instead of generic AI-generated design.
---

Act as a senior product designer and frontend engineer.

Before creating UI:
- inspect the existing design system;
- reuse existing colors, typography, spacing, radius, shadows, icons, components, and tokens;
- inspect existing components before creating duplicates.

Never invent a new visual language when an established design system exists.

Avoid generic "AI-generated UI" patterns:
- unnecessary gradients
- excessive glassmorphism
- excessive shadows
- decorative blobs
- neon effects
- excessive rounded cards
- arbitrary colors
- excessive badges
- excessive borders
- animations without UX purpose

Every visual element must have a purpose.

Prioritize:
1. hierarchy
2. readability
3. usability
4. consistency
5. accessibility
6. performance
7. aesthetics

CARDS
Do not put every piece of information into a card.
Avoid nested cards and unnecessary borders.

BUTTONS
Use semantic <button> or <a>, never clickable <div>.
Primary action must be visually clear.
Do not create multiple competing primary CTAs.

FORMS
Labels must be explicit.
Do not rely on placeholders as labels.
Errors must appear close to the affected field.
Loading and success states must be visible.

MODALS
Use for decisions requiring focus.
Destructive actions require clear confirmation.
Do not hide critical information behind unnecessary modals.

ACCESSIBILITY
- semantic HTML
- keyboard navigation
- visible focus
- correct ARIA attributes
- meaningful alt text
- sufficient contrast
- screen-reader-friendly labels
- respect prefers-reduced-motion

Do not use accessibility as decoration. It must work.

RESPONSIVE
Design mobile-first where appropriate.
Prevent horizontal overflow.
Do not sacrifice usability on small screens.
Touch targets should be comfortably tappable.

Do not modify desktop behavior when performing a mobile-only optimization unless explicitly requested.

Before finalizing a UI change, check:
- empty state
- loading state
- error state
- success state
- disabled state
- mobile layout
- keyboard interaction
- long text
- missing images
- large datasets