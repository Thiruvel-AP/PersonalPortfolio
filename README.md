# Personal Portfolio: Thiruvel Andagurunathan Pandian

**Live site:** [thiruvel-ap.github.io/PersonalPortfolio](https://thiruvel-ap.github.io/PersonalPortfolio)

A production-deployed, fully type-safe personal portfolio SPA built with **React 19 + TypeScript + Vite**, showcasing experience in Data Science, AI Engineering, and full-stack development. Features a flicker-free dark/light theme, animated skills marquee, and a data-driven architecture where all content  profile, experience, education, projects  is driven from a single typed `Data.ts` source of truth.

> **Stack:** `React 19` · `TypeScript 5.8` · `Vite 6` · `Tailwind CSS (CDN)` · `GitHub Pages`

---

## Live Portfolio

| Section | What you'll find |
|---|---|
| **Home** | Profile, 2-year work timeline (180DC Bristol → Avasoft), education, animated skills marquee |
| **Projects** | Bitcoin LSTM forecasting · Pokémon classification · GridDQN · Stack Overflow EDA |
| **Contact** | Email · Phone · LinkedIn · GitHub |

---

## Architecture

```
PersonalPortfolio/
├── index.html                    # Tailwind CDN config  custom theme tokens, dark mode,
│                                 # fade-in-up + marquee keyframes, Inter font
├── index.tsx                     # React 19 root mount
├── App.tsx                       # Root component  view state, dark/light theme toggle
│                                 # (localStorage persisted), footer with social icons
├── types.ts                      # TypeScript interfaces: PortfolioData, Profile, Experience,
│                                 # Education, Project, Link, View
│
├── PortfolioData/
│   └── Data.ts                   # ← Single source of truth for all portfolio content
│                                 #   initialData: PortfolioData (fully typed)
│
├── components/
│   ├── Header.tsx                # Sticky glassmorphism nav  NavLink with animated
│   │                             # active underline, dark/light toggle button
│   ├── MainView.tsx              # Hero + Work Experience + Education + Skills
│   │                             # Section wrapper with hover gradient icons
│   │                             # TimelineItem: shared Experience/Education renderer
│   │                             # Skills: duplicated array → CSS marquee (pause on hover)
│   ├── ProjectsView.tsx          # Responsive grid  project cards with hover lift,
│   │                             # zoom-on-hover image, tech badge pills, GitHub link
│   ├── ContactView.tsx           # Email / Phone / LinkedIn / GitHub contact cards
│   └── icons/
│       ├── SocialIcons.tsx       # GitHubIcon, LinkedInIcon, MailIcon (inline SVG)
│       └── ContentIcons.tsx      # BriefcaseIcon, GraduationCapIcon, LightbulbIcon,
│                                 # MapPinIcon, PhoneIcon, CheckCircleIcon, SunIcon, MoonIcon
│
├── declarations.d.ts             # Asset type declarations (jpg, png imports)
├── vite.config.ts                # Vite + React plugin, base="/PersonalPortfolio/", port 3000
├── tsconfig.json                 # ES2022, moduleResolution: bundler, jsx: react-jsx
├── package.json                  # gh-pages deploy, React 19, @google/genai dependency
└── metadata.json                 # "Thiruvel's DigitalBoard"  app metadata
```

---

## Key Implementation Details

### 1. Data-Driven Architecture (`PortfolioData/Data.ts`)

All content is defined as a single `initialData: PortfolioData` constant  fully typed against `types.ts` interfaces. Adding a project, updating a role, or changing contact details requires editing exactly one file. No content is hardcoded in component JSX.

**Content schema:**
```typescript
PortfolioData {
  profile:    Profile      // name, title, location, email, phone, summary, links[], imageUrl
  experience: Experience[] // role, company, period, location, description[]
  education:  Education[]  // degree, institution, period, details
  skills:     string[]     // 28 skills  marquee-rendered
  projects:   Project[]    // name, description, technologies[], features[], imageUrl, link
}
```

### 2. Flicker-Free Dark Mode

Dark mode initialisation runs **synchronously in `<head>`** before React mounts  prevents the white flash on page load that async implementations suffer from:

```html
<script>
  if (localStorage.theme === 'dark' || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }
</script>
```

`App.tsx` then manages toggle via `useState` + `useEffect` on the `documentElement.classList`, persisting preference to `localStorage`.

### 3. Custom Tailwind Design Tokens (in-HTML config)

Tailwind is loaded via CDN and configured inline with a custom dark theme:

| Token | Value | Used for |
|---|---|---|
| `primary` | `#0a0a0a` | Dark background |
| `secondary` | `#1a1a1a` | Card backgrounds |
| `accent` | `#ffffff` | Dark mode accent text |
| `text-secondary` | `#a3a3a3` | Subdued text |
| `border-color` | `#2e2e2e` | Card borders |

Custom animations: `fade-in-up` (0.7s ease-out, 20px translateY → 0) and `marquee` (40s linear infinite, 50% translateX).

### 4. Skills Marquee (Pause-on-Hover)

Skills array is **duplicated** (`[...data.skills, ...data.skills]`) before rendering, then scrolled via CSS `animate-marquee` (40s, infinite). The parent div has `group` class; the scrolling div uses `group-hover:[animation-play-state:paused]`  pure CSS, no JavaScript event handlers.

### 5. Shared `TimelineItem` Component

`MainView.tsx` uses a single `TimelineItem` component that handles both `Experience` and `Education` types via a TypeScript discriminant check (`'role' in item`). This eliminates code duplication between the two timeline sections while maintaining full type safety.

### 6. Animated Profile Image

The profile photo uses CSS morphing on hover  alternates between two `border-radius` polygon paths (`hoverDirectionToggle` state):
- State A: `rounded-[40%_60%_70%_30%_/_40%_40%_60%_60%]` + `rotate-2`
- State B: `rounded-[70%_30%_40%_60%_/_60%_60%_40%_40%]` + `-rotate-2`

Toggle fires on `onMouseEnter` so each hover produces a different morph direction.

### 7. Vite + GitHub Pages Deployment

`vite.config.ts` sets `base: "/PersonalPortfolio/"` to match the GitHub Pages subdirectory. `package.json` configures `gh-pages -d dist` as the deploy script. The `predeploy` hook runs `vite build` automatically before deployment.

```bash
npm run deploy   # runs: vite build → gh-pages -d dist
```

---

## Work Experience (from portfolio data)

| Role | Company | Period |
|---|---|---|
| **Data Consultant** | 180DC Bristol | Oct 2025 – Present |
| **Software Engineer** | Avasoft | Jul 2023 – Jan 2025 |
| **iOS App Development Intern** | Avasoft | Mar 2023 – Jun 2023 |
| **Internship Trainee** | Avasoft | Jan 2023 – Feb 2023 |

Notable experience: Flutter expense management app with ISAR offline storage + Plaid bank integration + Twelve Data API + AWS Cognito SSO; iOS SwiftUI/UIKit reusable component libraries; web scraping pipeline in vanilla JS for market intelligence.

---

## Skills (28  rendered in live marquee)

`Python` · `SQL` · `Pandas` · `NumPy` · `SciPy` · `Matplotlib` · `Seaborn` · `Scikit-learn` · `TensorFlow` · `PyTorch` · `AWS` · `FastAPI` · `Docker` · `TensorFlow (GPU)` · `Jupyter Notebook` · `Google Colab` · `Google AI Studio` · `Kaggle` · `Hugging Face API` · `JavaScript` · `React JS` · `Node JS` · `Flutter` · `Dart` · `Swift` · `SwiftUI` · `MongoDB`

---

## Featured Projects (from live portfolio)

| Project | Stack | Links |
|---|---|---|
| **Bitcoin LSTM Forecasting** | Python · TensorFlow GPU · FastAPI · Docker · YFinance | [GitHub](https://github.com/Thiruvel-AP/BitcoinForecasting) |
| **Pokémon Multi-Output Classification** | Python · scikit-learn · Pandas · Kaggle | [GitHub](https://github.com/Thiruvel-AP/Pokemon_Classification) |
| **GridDQN** | Python · TensorFlow · NumPy | [GitHub](https://github.com/Thiruvel-AP/GridDQN) |
| **Stack Overflow EDA 2023** | Python · Pandas · Matplotlib · Seaborn | [GitHub](https://github.com/Thiruvel-AP/DS_Project1) |

---

## Quickstart

```bash
git clone https://github.com/Thiruvel-AP/PersonalPortfolio
cd PersonalPortfolio
npm install
npm run dev        # → http://localhost:3000/PersonalPortfolio/
```

### Update content

All portfolio content lives in one file:

```bash
# Edit profile, experience, education, skills, or projects
vim PortfolioData/Data.ts
```

### Deploy to GitHub Pages

```bash
npm run deploy     # builds → pushes dist/ to gh-pages branch
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 (latest stable) |
| **Language** | TypeScript 5.8  `ES2022` target, `moduleResolution: bundler` |
| **Build tool** | Vite 6  `@vitejs/plugin-react`, `base: "/PersonalPortfolio/"` |
| **Styling** | Tailwind CSS (CDN)  custom dark theme tokens, `darkMode: 'class'` |
| **Fonts** | Inter (Google Fonts)  weights 400–800 |
| **Icons** | Inline SVG components  no icon library dependency |
| **Deployment** | GitHub Pages via `gh-pages` npm package |
| **State** | React `useState` + `useEffect`  no external state library needed |

---

## Sector Applications

| Sector | Relevance |
|---|---|
| **Technology / AI Engineering** | Live public-facing evidence of frontend engineering alongside ML/AI work  demonstrates full-stack capability from PyTorch training to React 19 SPA deployment |
| **Healthcare & Omics Research** | Portfolio directly links to GNN multi-omics MSc research project  giving technical hiring managers one URL to see the full picture |
| **Finance & Quantitative Analysis** | Bitcoin LSTM forecasting project and Stack Overflow EDA linked directly from the live site  recruiters can validate the work without navigating GitHub manually |

---

## Author

**Thiruvel Andagurunathan Pandian**  MSc Data Science, University of Bristol  
📍 Bristol, UK · **Eligible for Skilled Worker Visa sponsorship** · Open to UK roles

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/thiruvel-a-p)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/Thiruvel-AP)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://thiruvel-ap.github.io/PersonalPortfolio)
