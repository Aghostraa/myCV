# Portfolio Rebrand — Kickoff Prompt

Copy/paste this into a Claude Code session in this repo when you're ready to start the rebrand.

---

Do a full visual rebrand of this portfolio to look like an agency-built site, not an AI-generated template. This is a Vue 3 + Vite + Tailwind v4 project (not Next.js) — respect the existing architecture: `src/App.vue` composes section components (`Header`, `Projects`, `Experience`, `Volunteer`, `Writing`, `Education`, `Skills`, `Contact`, `Footer`), all bilingual via a `language` prop.

Requirements:
- Read and follow `.claude/skills/frontend-design/SKILL.md` for every component you touch — typography scale, 8px spacing grid, color tokens, component patterns, motion rules. Don't default to generic Tailwind gradients or centered cookie-cutter cards.
- Install `@vueuse/motion` and use it for all animation: scroll-triggered fade + stagger on section/card entrances, smooth hover transitions on buttons/cards/nav links. Respect `prefers-reduced-motion`.
- Define real color tokens in `src/style.css` via Tailwind v4's `@theme` block before touching component colors — pick one decisive primary color instead of the current generic slate/cyan gradient.
- Keep both `en` and `de` copy working in every section you touch — don't drop the language prop or hardcode English strings.
- Go section by section, starting with `Header.vue` (nav + hero) since it sets the tone, then `Projects.vue`/`ProjectCard.vue`, then `Experience.vue`, then the rest. Show me each section before moving to the next.
- Mobile-first, fully responsive at every step.
- No 21st.dev component code pasted verbatim — it's React/JSX. Use it (if I share any) only as a layout/structure reference, hand-ported into Vue with our own tokens and copy.
- At the end: run `npm run build` and check for warnings/errors, and do a quick pass for unused CSS, oversized images, and font-loading strategy (the site already loads Outfit + DM Sans from Google Fonts in `index.html` — make sure that's not duplicated or blocking render).

Start with the Header/Hero section and stop for my feedback before continuing.
