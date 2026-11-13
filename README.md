# Agentic Design Kit

AI-optimized design system: centralized UI / AI-native UX patterns for host products (MyOS, macOS shells, web agents).

Built so a coding agent can resolve the right pattern in **one index read + one pattern file** — without burning tokens on a full-repo search.

## Start here

| File | Role |
|------|------|
| [`INDEX.md`](INDEX.md) | Pattern map (always open first) |
| [`TAXONOMY.md`](TAXONOMY.md) | Full [shapeof.ai](https://www.shapeof.ai/) → kit mapping |
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

## Consume from another project

Point host `AGENTS.md` / `.cursorrules` at this kit’s `INDEX.md`, then implement snippets with the shared Tailwind stub (merge tokens into the host config).
