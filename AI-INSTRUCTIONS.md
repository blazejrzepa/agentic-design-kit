# AI Instructions — Agentic Design Kit

Operational protocol for Cursor (and any coding agent) consuming this kit.

---

## 0. Goal

Ship AI-native UI that feels like **Linear / Raycast density**, not marketing chrome. Every pattern here is an implementation contract: anatomy, states, keyboard, tokens, and a React + Tailwind snippet.

---

## 1. Mandatory lookup protocol

When the user asks to **design, build, or refine** an AI UI element:

1. **Open [`INDEX.md`](INDEX.md) first** — never start by grepping the whole tree.
2. **Match intent** using the Quick routing table (or pattern ID).
3. **Open only** `patterns/<id>/README.md` for that match.
4. **Read** anatomy, states, do/don't, snippet, and linked preview images if doing visual QA.
5. **Apply** [`tokens/tailwind.config.stub.js`](tokens/tailwind.config.stub.js) and [`.cursorrules`](.cursorrules).
6. **Implement** in the host app (MyOS, macOS shell, web). Prefer adapting the snippet over inventing a parallel component.
7. For multi-surface jobs, check [`COMPOSITIONS.md`](COMPOSITIONS.md) before inventing a new stack.

If the user names a **Shape of AI** pattern: open [`TAXONOMY.md`](TAXONOMY.md) Part A once.  
If the user names an **AI UX Playground** slug/teardown: open [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) once (or Part B summary in `TAXONOMY.md`), map to kit ID(s), then implement.

If no pattern fits: say so, propose the closest pattern, or ask before inventing a new folder under `patterns/`.

---

## 2. Token budget rules

| Do | Don't |
|----|-------|
| Read `INDEX.md` (~1 screen) then one pattern README | Crawl all `patterns/**` “just in case” |
| Copy token class names / CSS vars from the stub | Invent new purple gradients, soft cards, or loose padding |
| Keep snippets as the source of visual truth | Paste large unrelated files into context |
| Ask for a screenshot only if visual QA is required | Dump `assets/screenshots/` into the prompt blindly |

**Rule of thumb:** one index + one pattern README should be enough to generate production UI.

---

## 3. Translation: pattern → React + Tailwind

1. Map pattern **anatomy** → named subcomponents (e.g. `IntentBar`, `ResultRow`, `ActionPanel`).
2. Map **states** → explicit props (`status`, `streaming`, `interrupt`, `budget`).
3. Use **token classes** from the stub (`bg-surface`, `text-ink`, `rounded-control`, `gap-dense`).
4. Prefer **composition** over mega-components; host apps own data fetching / AI SDK wiring.
5. Wire real streams (Vercel AI SDK `useChat` / `useObject`, LangGraph interrupts, etc.) at the boundary — patterns stay presentational + interaction-complete.

### Snippet contract

Each `patterns/*/README.md` includes a **canonical snippet**. Treat it as:

- Default visual density and hierarchy
- Keyboard affordances (`↵`, `⌘K`, `Esc`, `⌘↵`)
- Accessibility baselines (roles, focus order)

Host apps may restyle via tokens, not by loosening density.

---

## 4. Decision checklist (before coding)

- [ ] Did I open `INDEX.md`?
- [ ] Did I open exactly one pattern README?
- [ ] Am I using kit tokens (not ad-hoc spacing/color)?
- [ ] Is the UI dense, keyboard-first, and information-rich?
- [ ] Are HITL / irreversible actions gated (Mandate Approval Card)?
- [ ] Is “thinking” shown as structured steps (not a spinner)?

---

## 5. Adding a new pattern

1. Create `patterns/<kebab-id>/README.md` with: Purpose · When to use · Anatomy · States · Do/Don't · Snippet · References.
2. Add one row to `INDEX.md` (ID, name, one-liner, path).
3. Add a Quick routing row.
4. Keep README scannable; agents must not need a second file to implement.

---

## 6. Host project wiring

See [`CONSUMING.md`](CONSUMING.md) and [`host-templates/AGENTS.snippet.md`](host-templates/AGENTS.snippet.md).

```text
Host app (.cursorrules or AGENTS.md)
  → “AI UI: consult Agentic Design Kit INDEX.md first”
  → path: vendor/agentic-design-kit or ../agentic-design-kit
```

Prefer submodule, monorepo package, or documented absolute path — not copy-paste drift.
