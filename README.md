# Agentic Design Kit

AI-optimized design system: centralized UI / AI-native UX patterns for host products (MyOS, macOS shells, web agents).

Built so a coding agent can resolve the right pattern in **one index read + one pattern file** — without burning tokens on a full-repo search.

## Start here

| File | Role |
|------|------|
| [`INDEX.md`](INDEX.md) | Pattern map (always open first) |
| [`AI-INSTRUCTIONS.md`](AI-INSTRUCTIONS.md) | Agent operating protocol |
| [`.cursorrules`](.cursorrules) | Visual + implementation law |
| [`tokens/tailwind.config.stub.js`](tokens/tailwind.config.stub.js) | Shared design tokens |

## Patterns

| Pattern | Path |
|---------|------|
| Copilot Input | [`patterns/copilot-input/`](patterns/copilot-input/) |
| Mandate Approval Card | [`patterns/mandate-approval-card/`](patterns/mandate-approval-card/) |
| Streaming Thought State | [`patterns/streaming-thought-state/`](patterns/streaming-thought-state/) |
| Dual-Speed Layout | [`patterns/dual-speed-layout/`](patterns/dual-speed-layout/) |

## References

Market UX alignment: [shapeof.ai](https://www.shapeof.ai/), Raycast command bar, Linear density, Vercel AI SDK UI, Supabase-style operator consoles. Visual captures live in [`assets/screenshots/`](assets/screenshots/).

## Consume from another project

Point host `AGENTS.md` / `.cursorrules` at this kit’s `INDEX.md`, then implement snippets with the shared Tailwind stub (merge tokens into the host config).
