# Agentic Design Kit

AI-optimized design system: centralized UI / AI-native UX patterns for host products (MyOS, macOS shells, web agents).

Built so a coding agent can resolve the right pattern in **one index read + one pattern file** — without burning tokens on a full-repo search.

## Start here

| File | Role |
|------|------|
| [`INDEX.md`](INDEX.md) | Pattern map (always open first) |
| [`CONSUMING.md`](CONSUMING.md) | Wire kit into MyOS / host apps |
| [`GALLERY.md`](GALLERY.md) | All kit screenshot packs |
| [`COMPOSITIONS.md`](COMPOSITIONS.md) | Ready multi-pattern stacks |
| [`TAXONOMY.md`](TAXONOMY.md) | Shape of AI → kit mapping |
| [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) | 160 Playground slugs → kit |
| [`AI-INSTRUCTIONS.md`](AI-INSTRUCTIONS.md) | Agent operating protocol |
| [`.cursorrules`](.cursorrules) | Visual + implementation law |
| [`tokens/tailwind.config.stub.js`](tokens/tailwind.config.stub.js) | Shared design tokens |

## Implemented patterns

See [`INDEX.md`](INDEX.md) — **103** kit folders with README + React/Tailwind snippets.  
**Full Playground coverage:** [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) maps all **160** slugs (`implemented` / `composed`, **0 catalog**).

## References & images

- [shapeof.ai](https://www.shapeof.ai/) · [aiuxplayground.com/patterns](https://aiuxplayground.com/patterns) · [teardowns](https://aiuxplayground.com/teardowns)
- Slug list: [`assets/references/playground-pattern-slugs.txt`](assets/references/playground-pattern-slugs.txt)
- Kit mockups: [`assets/screenshots/kit/`](assets/screenshots/kit/)
- External refs: [`shapeof/`](assets/screenshots/shapeof/) · [`playground/`](assets/screenshots/playground/)

## Live demo (React)

```bash
npm install
npm run demo
```

Opens Vite at `http://localhost:5173` — Dual-Speed + Thought + Clarify + Mandate + Copilot from `@agentic-design-kit/react`.

Components: [`packages/react/src`](packages/react/src)

## Consume from another project

See [`CONSUMING.md`](CONSUMING.md). Point host `AGENTS.md` at `INDEX.md`, merge `tokens/tailwind.config.stub.js`, optionally import `@agentic-design-kit/react`.
