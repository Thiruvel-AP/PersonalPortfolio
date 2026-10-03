# Personal Portfolio

Portfolio site for Thiruvel Andagurunathan Pandian, Data Scientist and AI Engineer based in Bristol, UK.
Live at https://thiruvel-ap.github.io/PersonalPortfolio/

## Featured projects

Each has a case-study page at `#/projects/<slug>`:

| Project | URL |
|---|---|
| GeneTraceAI Cell Line Finder: LLM Agent for Cancer Research (AstraZeneca-affiliated) | `#/projects/genetraceai-cell-line-finder` |
| GTAI Graph PoC: Cancer Cell-Line Omics Graph | `#/projects/gtai-graph-poc` |
| AgenticFriend: Real-Time Voice AI Agent | `#/projects/agenticfriend-voice-agent` |
| MCP Search Agent: Open-Weight LLM with Web Search and a GraphQL Data Layer | `#/projects/mcp-search-agent` |

The remaining projects appear as a text list on `#/projects`.

## Stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 4 (compiled at build time through `@tailwindcss/vite`)
- Hash-based routing (`#/`, `#/projects`, `#/projects/<slug>`, `#/contact`), no router dependency
- Deployed to GitHub Pages with `gh-pages`

## Editing content

All content lives in `PortfolioData/Data.ts`, typed by `types.ts`.

- Mark a project `featured: true` (maximum 4) and give it a `caseStudy` to get a case-study page.
- To add a project image, put the file in `public/projects/` (WebP, 800px wide or less) and set `image: { src, alt, width, height }` on the project. Projects without an `image` show none.
- `caseStudy.improve` is optional; the "What I would improve" section only appears when it is set.
- `public/og-image.png` (1200x630) is the social-share image; `public/favicon.svg` is the favicon.

## Commands

```bash
npm install
npm run dev       # local dev server on http://localhost:3000
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run deploy    # build and publish dist/ to GitHub Pages
```
