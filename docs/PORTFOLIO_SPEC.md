# Portfolio rework — spec for Claude Code (2026-10-03)

Put this file at `docs/PORTFOLIO_SPEC.md` in the PersonalPortfolio repo and work through it **one phase at a time**.
Stop after each phase, run the checks listed under it, and report before starting the next one.

## Ground rules (every phase)
- **Content comes only from `PortfolioData/Data.ts`** and `caseStudies.ts`. Never invent or reword claims, numbers,
  dates, links or project details. If a field is empty or starts with `YOU:`, don't render it.
- Only `transform` and `opacity` may animate. No `backdrop-blur`, no `filter: blur` animations, no infinite animations.
- Everything that moves must stop under `prefers-reduced-motion: reduce`.
- Keep React 19 + Vite + TypeScript. Ask before adding any dependency.
- GitHub Pages serves the site under `/PersonalPortfolio/`: use `import.meta.env.BASE_URL` for every asset path.

---

## Phase 0 — ship the corrected content today (before any redesign)
The **live** site still shows the old text, including claims that contradict the CV:
"Active MSc research: developing a novel Graph Neural Network (GNN) framework", "~2 years of production engineering
experience", "MSc Data Science candidate", the "Multi-Omics GNN Framework… (MSc Research)" card, Bitcoin ">80%
directional accuracy", and no AstraZeneca entry.
1. Build and deploy the current `Data.ts`.
2. Fix mobile horizontal overflow (measured on the live site at a 390 px viewport): `scrollWidth` is 437 px.
   The hero text column (`div.space-y-4 … flex-grow`) spans x = −47…437 px because the `h1.text-6xl` contains the
   unbreakable word "Andagurunathan" at 60 px, and the flex child has no `min-width: 0`. Fix: `min-w-0` on that
   column, `clamp(2rem, 8vw, 3.75rem)` for the h1, `overflow-wrap: anywhere` on headings.
3. Summary text: the `<p class="whitespace-pre-line">` renders the template literal's line breaks mid-sentence.
   Split the summary into paragraphs and render each as its own `<p>` without `whitespace-pre-line`.

**Check:** on the deployed URL, none of the quoted old claims appear (search the rendered text);
`document.documentElement.scrollWidth === 390` at a 390 px viewport.

---

## Phase 1 — information architecture
### Routes (hash-based, no new dependency)
- `#/` — one scrolling home page with anchor sections:
  Hero → Featured work (4) → Experience → Skills → Education → Certifications → Footer.
- `#/projects` — featured 4 + "More projects" list.
- `#/projects/<slug>` — one case study per page.
- Remove the separate Contact view; the footer holds email, LinkedIn, GitHub. No CV download.
- Header: name (left); links Work · Experience · Skills · Projects (right); theme toggle. Sticky, solid background
  (no blur). Active section highlighted via IntersectionObserver.
- Back button and refresh work on every route; unknown slugs show a small "not found" with a link home.

### Progressive disclosure (show more only when asked)
| Layer | Shows | Limit |
|---|---|---|
| Featured card | title, `outcome` line, up to 3 `stats` chips, 3 tags, "Read case study →" | ≤ 3 lines of text |
| Case study, visible | Problem · Approach · Result + one image | 1 line each |
| Case study, collapsed `<details>` | Key decisions · What I'd do next · Stack · Links | open on click |
| Experience entry | first 2 bullets | rest behind "Show more" |
| More projects | name · one line · category · repo link | collapsed list with filter chips |

### Data model changes (`types.ts`)
- `Project`: add `slug`, `featured: boolean`, `category: 'Data Science' | 'AI Engineering' | 'ML Engineering' |
  'Analytics'`, `outcome?: string`, `stats?: string[]`, `caseStudy?: {...}` (fields from `caseStudies.ts`).
- `PortfolioData`: add `certifications: {name, issuer, date}[]`; remove certifications from `education`.
- `skills`: change to `Record<string, string[]>` (4 groups). Clicking a skill filters `#/projects` to projects whose
  `technologies` include it; show "N projects" next to each skill.

**Check:** every route renders at 390 px and 1440 px; keyboard-only navigation reaches every link, toggle and
`<details>`; screenshots of each route.

---

## Phase 2 — visual system
Direction: **calm, editorial, data-forward** — reads like a well-kept lab notebook, not a template. One accent colour,
lots of whitespace, numbers in a monospace face so they read as data.

### Tokens (CSS variables, light and dark)
| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FAFAF9` | `#0E1013` |
| `--surface` | `#FFFFFF` | `#16191E` |
| `--border` | `#E6E4E0` | `#262A31` |
| `--text` | `#16181D` | `#E8E9EC` |
| `--muted` | `#5B6170` | `#9AA1AE` |
| `--accent` | `#0C53A6` (same blue as the CV) | `#5B9BEA` |
| `--accent-soft` | `#0C53A61A` | `#5B9BEA26` |
Contrast: `--text` and `--muted` must pass WCAG AA (4.5:1) on `--bg` and `--surface` in both themes; report the ratios.

### Type
- Inter for text (weights 400, 500, 700 only). JetBrains Mono (or IBM Plex Mono) 500 for stat chips, dates and tags.
- Scale (rem): 0.875 · 1 · 1.25 · 1.75 · 2.75 (hero name, `clamp(2rem, 6vw, 2.75rem)`).
- Body line length ≤ 70ch; line-height 1.6 body, 1.15 headings.

### Layout
- Content max-width 1080 px; 8 px spacing grid; section gaps 96 px desktop / 64 px mobile.
- Hero: two columns on desktop (text left, 160 px round photo right), stacked on mobile with the photo first and
  smaller (112 px). Summary ≤ 3 short lines.
- Cards: `--surface`, 1 px `--border`, radius 12 px, no shadows at rest.
- Featured grid: 2 × 2 on desktop, 1 column on mobile.
- Experience: simple timeline (2 px `--border` line, 8 px dots); company · role · dates · location on two lines.

**Check:** contrast ratios reported; screenshots light/dark × 390/1440.

---

## Phase 3 — motion (subtle, purposeful, cheap)
| Element | Motion | Timing |
|---|---|---|
| Sections and cards entering view | fade + translateY(12px → 0), **once** (IntersectionObserver, then unobserve) | 240 ms ease-out, 60 ms stagger, max 6 items |
| Stat chips | count up from 0 to the number when first visible (numbers only; "3rd" and "5★" don't count) | 700 ms ease-out |
| Card hover / focus | translateY(-2px) + border becomes `--accent` | 150 ms |
| Links | underline grows left→right | 150 ms |
| Route change | content fades out/in | 150 ms |
| `<details>` open | height via grid-rows `0fr → 1fr` + fade | 200 ms |
| Theme toggle | colour tokens cross-fade | 200 ms |
| **Hero background (optional)** | a faint network graph on `<canvas>`: ~36 nodes drifting slowly, edges drawn between near neighbours (a nod to the GTAI graph work). Opacity ≤ 0.15, 30 fps cap, paused when off-screen or the tab is hidden, not rendered under reduced motion or on screens < 640 px | continuous but tiny |

Remove: `animate-pulse` glow, `scale-105/125` hovers, the skills marquee, all `backdrop-blur`.

**Check:** Chrome Performance recording of a 5 s scroll: no long tasks > 50 ms caused by animation; under
`prefers-reduced-motion` nothing moves.

---

## Phase 4 — quality gate before calling it done
- Lighthouse (mobile, deployed URL): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 — report
  all four numbers.
- `index.html`: `lang="en-GB"`, meta description, Open Graph (`og:title`, `og:description`, `og:image` 1200×630 in
  `public/`, `og:url`), favicon. Paste the deployed URL into a LinkedIn post draft and check the preview card.
- Total transfer size of `#/projects` ≤ 1 MB.
- No horizontal scroll at 320, 390, 768, 1024, 1440 px.
- Every image has alt text; every icon-only button has an `aria-label`.
- README updated: featured projects, stack, how to edit `Data.ts`, how to deploy.
