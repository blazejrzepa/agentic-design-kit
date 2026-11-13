# Agentic Design Kit — Pattern Index

> **Agent entrypoint.** Read this file first. Open only the pattern folder you need. Do not crawl the repo.

**Kit:** Agentic Design Kit · **Style:** dense Linear/Raycast · **Stack target:** React + Tailwind  
**Tokens:** [`tokens/tailwind.config.stub.js`](tokens/tailwind.config.stub.js) · **AI protocol:** [`AI-INSTRUCTIONS.md`](AI-INSTRUCTIONS.md) · **Rules:** [`.cursorrules`](.cursorrules)

---

## Core patterns

| ID | Pattern | One-line purpose | Path |
|----|---------|------------------|------|
| `copilot-input` | Copilot Input / Intent Bar | Floating Raycast-style command bar for agent intent, fuzzy actions, and progressive disclosure (`↵` / `⌘K`) | [`patterns/copilot-input/`](patterns/copilot-input/) |
| `mandate-approval-card` | Mandate Approval Card | Human-in-the-loop gate: diff preview, budget slider, approve / edit / reject before irreversible agent actions | [`patterns/mandate-approval-card/`](patterns/mandate-approval-card/) |
| `streaming-thought-state` | Streaming Thought State | Step-by-step agent cognition UI (plan → tools → reason) instead of a generic spinner | [`patterns/streaming-thought-state/`](patterns/streaming-thought-state/) |
| `dual-speed-layout` | Dual-Speed Layout | Split workspace: conversational chat (slow) + live execution surface (fast) | [`patterns/dual-speed-layout/`](patterns/dual-speed-layout/) |

---

## Quick routing (intent → pattern)

| User / product ask | Open |
|--------------------|------|
| Command palette, floating prompt, agent launcher, `@` sources, `/` commands | `copilot-input` |
| Approve tool call, HITL, mandate, budget, diff before act | `mandate-approval-card` |
| Thinking UI, reasoning trace, tool timeline, “Thought for Ns” | `streaming-thought-state` |
| Agent workspace, chat + canvas, transcript + live state | `dual-speed-layout` |

---

## Shape of AI mapping

Aligned with [shapeof.ai](https://www.shapeof.ai/) categories:

| Kit pattern | Shape of AI family |
|-------------|-------------------|
| Copilot Input | Wayfinders · Prompt actions · Tuners |
| Mandate Approval Card | Governors (Action plan / oversight) |
| Streaming Thought State | Trust builders · Footprints · Prompt details |
| Dual-Speed Layout | Composition of conversation + execution governors |

---

## How to consume from another repo

1. Point Cursor / agent rules at this kit (or vendor as a submodule / package).
2. Agent opens **only** `INDEX.md` → matching `patterns/<id>/README.md`.
3. Implement with shared tokens; do not invent spacing, radius, or chatty chrome.
