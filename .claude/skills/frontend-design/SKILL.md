---
name: frontend-design
description: Design system rules for the CV/portfolio site — typography, spacing, color tokens, component patterns, and motion. Reference this before building or restyling any component.
---

# Portfolio Design System

Stack: React 19 + Vite + Tailwind CSS v4, with **Framer Motion** (`motion` package, import from `'motion/react'`) for all animation. Bilingual (en/de) via a `language` prop threaded through every section. Fonts already loaded: **Outfit** (headings) and **DM Sans** (body) — see `index.html` / `src/App.jsx`.

## Anti-goals (the "generic AI site" smell to avoid)
- No default Tailwind indigo/violet gradients as the primary palette. No `bg-gradient-to-br from-slate-50 to-cyan-50` placeholders left in production.
- No centered-everything layouts with the same card shadow repeated for every section.
- No emoji-as-icons. Use a real icon set (`lucide-vue-next` or inline SVG) at consistent stroke width.
- No animation that fires on page load for content below the fold — everything off-screen animates in on scroll, not on mount.
- No more than 2 typefaces, no more than 3 accent colors.

## Typography scale
Use a fixed step scale, applied via Tailwind classes — never an arbitrary `text-[17px]`.

| Role | Class | Font |
|---|---|---|
| Display / Hero H1 | `text-5xl md:text-7xl font-bold tracking-tight` | Outfit |
| Section H2 | `text-3xl md:text-4xl font-semibold tracking-tight` | Outfit |
| Card H3 | `text-xl font-semibold` | Outfit |
| Body | `text-base leading-relaxed` | DM Sans |
| Small / meta | `text-sm text-neutral-500` | DM Sans |

## Spacing system
8px base grid. Section vertical rhythm: `py-24 md:py-32`. Card padding: `p-6 md:p-8`. Gap between siblings in a stack: `space-y-6` or `gap-6`. Never use one-off values like `mt-[13px]`.

## Color tokens
Define these once in `src/style.css` as CSS custom properties (or a Tailwind `@theme` block, since you're on Tailwind v4) and reference tokens everywhere — no raw hex in components.

```css
@theme {
  --color-primary: ...;      /* your brand accent, pick ONE decisive color */
  --color-primary-fg: ...;   /* text/icon color on top of primary */
  --color-neutral-50: ...;
  --color-neutral-900: ...;
  --color-accent: ...;       /* secondary highlight, used sparingly */
}
```

Rule: primary color appears on ≤3 elements per screen (CTA, active nav state, key highlight). Everything else is neutral grayscale. This is what makes a site look designed instead of decorated.

## Component patterns
- **Buttons**: one primary style (filled, primary color), one secondary style (outline/ghost). Every button has `hover:`, `focus-visible:`, and `active:` states — never rely on hover alone (touch devices, keyboard nav).
- **Cards**: consistent internal structure across `ProjectCard.vue` / experience entries / education entries — eyebrow label → title → meta line → body → optional footer/tags. Border or shadow, not both stacked heavy.
- **Nav (Header.vue)**: sticky, adds a background/blur + shadow only after scrolling past the hero (not from `y=0`), active-section indicator.
- **Forms (Contact.vue)**: labeled inputs, visible focus ring using the primary token, inline validation state — not just browser default red outline.

## Motion rules (Framer Motion via `motion/react`)
- **Always use the standardized primitives in `src/components/motion/primitives.jsx`** — `<Reveal>` (scroll-triggered fade + rise), `<Stagger>`/`<StaggerItem>` (staggered reveal groups, 60–100ms per sibling), `<Pressable>` (hover lift + tap spring on buttons/links). They share one easing (`EASE`), are layout-aware (`layout` prop), and handle `prefers-reduced-motion`. Only drop to raw `motion.*` elements for cases the primitives can't express (hero entrances with `initial`/`animate`, `AnimatePresence` expand/collapse, the breathing hero blobs).
- Scroll-triggered entrance: fade + 16–24px translate-y; above-the-fold content uses `initial`/`animate`, everything else `whileInView` with `viewport={{ once: true }}`.
- Hover on interactive elements: scale to ~1.02–1.03 or a subtle shadow/brightness shift, 150–200ms, `ease-out`.
- Expanding/collapsing content: `AnimatePresence` + `motion.div` height auto, with `layout` on the container so siblings reflow smoothly.
- Respect `prefers-reduced-motion` (`useReducedMotion`): disable translate/scale, keep opacity fades only.
- The hero's slow breathing backdrop blobs are an approved exception; add no other infinite/looping background animation.

## 21st.dev note
21st.dev components are React/JSX + Tailwind and can now be adapted directly — but re-map their styles onto the design tokens above (no raw hex, no foreign palettes) and route their animations through the motion primitives.
