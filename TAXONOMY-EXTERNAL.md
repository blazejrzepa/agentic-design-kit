# External sources → kit (AI-first)

**Agent rule:** Prefer [`INDEX.md`](INDEX.md). Open this file only to map an external name → kit ID.

| Source | Priority | File / section |
|--------|----------|----------------|
| AI Design Guide · Agentic UX (39) | **P0 — AI** | [Part A](#part-a--ai-design-guide--agentic-ux-patterns) |
| Vercel AI SDK UI / Feature Exploration | **P0 — AI** | [Part B](#part-b--vercel-ai-sdk) |
| CopilotKit + AG-UI | **P0 — AI** | [Part C](#part-c--copilotkit--ag-ui) |
| SaaSFrame · AI patterns | **P0 — AI** | [Part D](#part-d--saasframe-ai-patterns) |
| AI Design Guide · Resources / Anti-patterns | **P1 — AI ops** | [Part E](#part-e--ai-design-guide-resources) |
| Collect UI · Landbook · Lapa Ninja | **P2 — visual ref only** | [Part F](#part-f--visual-inspiration-not-agent-patterns) |

**Status**

| Status | Meaning |
|--------|---------|
| `implemented` | `patterns/<id>/README.md` |
| `composed` | Combine listed kit IDs |
| `catalog` | Mapped; implement on demand |

**Visuals**

| Kind | Path |
|------|------|
| Kit mockups (doctrine) | [`assets/screenshots/kit/`](assets/screenshots/kit/) · [`GALLERY.md`](GALLERY.md) |
| **Real SaaSFrame AI captures** | [`assets/screenshots/external/saasframe/`](assets/screenshots/external/saasframe/) — linked from pattern READMEs |
| Source OG cards | [`assets/screenshots/external/`](assets/screenshots/external/) (AI Design Guide / AI SDK / CopilotKit) |

**Gap:** AI Design Guide’s 74 Mobbin screenshots are account-gated — use guide text + SaaSFrame equivalents until a licensed export is available.

---

## Part A — AI Design Guide · Agentic UX Patterns

Source: [aidesign.guide/agentic-ux-patterns](https://www.aidesign.guide/agentic-ux-patterns) · 39 patterns · 7 families · updated 2026-10-11

### 12 to learn first

| # | External | Kit ID / mapping | Status |
|---|----------|------------------|--------|
| 1 | Live plan / to-do checklist | `action-plan` + `streaming-thought-state` | composed |
| 2 | Collapsible tool-call / action log | `streaming-thought-state` · `footprints` | composed |
| 3 | Scoped approval (“Yes, and don't ask again”) | `scoped-approval` | implemented |
| 4 | Autonomy modes: plan / accept edits / auto | `autonomy-modes` | implemented |
| 5 | Take control of the agent's browser | `agent-takeover` | implemented |
| 6 | Agent inbox: Needs input / Working / Completed | `agent-inbox` | implemented |
| 7 | Background/cloud agent + PR status | `background-agent` | implemented |
| 8 | Generative UI / in-chat widgets | `generative-ui` | implemented |
| 9 | Per-hunk diff review | `smart-diff` | implemented |
| 10 | Checkpoints and rollback | `checkpoints-restore` | implemented |
| 11 | “Thought for N s” disclosure | `streaming-thought-state` | implemented |
| 12 | Hybrid ⌘K: Ask AI or navigate | `copilot-input` | implemented |

### Entry points (01–05)

| External | Kit | Status |
|----------|-----|--------|
| Sparkle ✨ inline generate → Replace / Refine | `inline-action` · `suggested-reply` | composed |
| Hybrid ⌘K palette | `copilot-input` | implemented |
| Docked side-panel + context chip | `copilot-surface` · `context-chip` | implemented |
| Ghost text / Next Edit Suggestions | `ghost-text` | implemented |
| Prompt starters / follow-ups | `suggestions` · `onboarding-first-value` | composed |

### Composer & context (06–10)

| External | Kit | Status |
|----------|-----|--------|
| @-mentions + context chips | `context-chip` · `connectors` | composed |
| “+” tools / connectors / mode chips | `connectors` · `model-mode-picker` | composed |
| Model picker + effort / tiers | `model-mode-picker` · `cost-estimates` | composed |
| Context-window + cost meter | `rate-limit-meter` · `cost-estimates` | composed |
| Voice orb + live transcript | `voice-transcript` · `controls` | composed |

### Agent transparency (11–17)

| External | Kit | Status |
|----------|-----|--------|
| Live plan checklist | `action-plan` | implemented |
| Collapsible tool-call rows | `streaming-thought-state` | implemented |
| Thought for N s | `streaming-thought-state` | implemented |
| Inline citations + sources panel | `citations` | implemented |
| Deep-research activity feed | `deep-research-feed` | implemented |
| Playful status + interrupt hint | `streaming-thought-state` · `controls` | composed |
| Agent computer pane / replay | `dual-speed-layout` · `footprints` · `agent-takeover` | composed |

### HITL & autonomy (18–24)

| External | Kit | Status |
|----------|-----|--------|
| Scoped approval prompt | `scoped-approval` | implemented |
| Structured clarifying questions | `clarify-before-act` | implemented |
| Steer or queue while running | `steer-queue` | implemented |
| Autonomy modes | `autonomy-modes` | implemented |
| Take control of agent browser | `agent-takeover` | implemented |
| Hand off to human | `human-handoff` | implemented |
| Agent consent / behaviour settings | `consent` · `memory-personalization` | composed |

### Async / multi-agent (25–31)

| External | Kit | Status |
|----------|-----|--------|
| Background/cloud agent + PR | `background-agent` | implemented |
| Assign agent like a teammate | `agent-inbox` · `disclosure` | composed |
| Notify me when done | `background-agent` · `controls` | composed |
| Check in from phone | `background-agent` · `shared-session` | composed |
| Agent inbox statuses | `agent-inbox` | implemented |
| Subagents / harness picker | `agent-inbox` · `model-mode-picker` | composed |
| Scheduled actions | `scheduled-tasks` | implemented |

### Outputs & review (32–36)

| External | Kit | Status |
|----------|-----|--------|
| Canvas / artifact + versions | `artifact-pane` · `response-versions` | composed |
| Generative UI widgets | `generative-ui` | implemented |
| Best-of-N parallel attempts | `best-of-n` | implemented |
| Per-hunk Keep / Undo | `smart-diff` | implemented |
| Checkpoints / rollback | `checkpoints-restore` | implemented |

### Memory & instructions (37–39)

| External | Kit | Status |
|----------|-----|--------|
| User-visible memory manager | `memory-personalization` | implemented |
| Connectors / MCP catalog | `connectors` | implemented |
| Project instruction files loaded | `project-instructions` | implemented |

---

## Part B — Vercel AI SDK

Sources: [ai-sdk.dev/docs/introduction](https://ai-sdk.dev/docs/introduction) · [AI SDK UI](https://ai-sdk.dev/docs/ai-sdk-ui/overview) · [Generative UI](https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces)

| AI SDK surface | Kit | Status |
|----------------|-----|--------|
| `useChat` message stream | `copilot-input` · `streaming-thought-state` · `controls` | composed |
| `useCompletion` | `ghost-text` · `inline-action` | composed |
| `useObject` structured stream | `generative-ui` | composed |
| Tool parts: `input-available` | `generation-lifecycle` · `streaming-thought-state` | composed |
| Tool parts: `output-available` → component | `generative-ui` · `tool-render-states` | composed |
| Tool parts: `output-error` | `failure-disclosure` · `tool-render-states` | composed |
| Feature Exploration templates | map per demo → `generative-ui` / `copilot-input` | catalog |
| MCP Apps UI | `generative-ui` · `connectors` | composed |
| HarnessAgent streams | `streaming-thought-state` · `dual-speed-layout` | composed |

**Implement note:** Host wires AI SDK hooks at the boundary; kit components stay presentational.

---

## Part C — CopilotKit + AG-UI

Sources: [docs.copilotkit.ai](https://docs.copilotkit.ai/) · [github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) · [generative-ui](https://github.com/CopilotKit/generative-ui)

| CopilotKit / AG-UI | Kit | Status |
|--------------------|-----|--------|
| `CopilotChat` inline pane | `copilot-surface` (`chat`) | implemented |
| `CopilotSidebar` docked | `copilot-surface` (`sidebar`) · `dual-speed-layout` | composed |
| `CopilotPopup` floating | `copilot-surface` (`popup`) | implemented |
| Threads drawer | `shared-session` · `branches` | composed |
| Controlled GenUI (`useFrontendTool` / `useComponent`) | `generative-ui` · `tool-render-states` | composed |
| Declarative GenUI (A2UI / Open-JSON-UI) | `generative-ui` | catalog |
| Open GenUI (sandboxed HTML) | `generative-ui` · caution: sandbox | catalog |
| Human-in-the-loop approvals | `mandate-approval-card` · `scoped-approval` · `clarify-before-act` | composed |
| AG-UI stream reconnect / catch-up | `generation-lifecycle` · `shared-session` | composed |
| Automatic learning → skills | `memory-personalization` · `templates` | composed |
| Shared agent ↔ app state | `dual-speed-layout` · `context-chip` | composed |

---

## Part D — SaaSFrame AI patterns

Source: [saasframe.io/patterns](https://www.saasframe.io/patterns) — AI-tagged subset only

| SaaSFrame | Kit | Status |
|-----------|-----|--------|
| AI Chat | `dual-speed-layout` · `copilot-input` · `suggestions` | composed |
| AI Copilot | `suggested-reply` · `copilot-surface` · `citations` | composed |
| AI Generation State | `generation-lifecycle` · `streaming-thought-state` · `controls` | composed |
| Prompt Input | `copilot-input` · `context-chip` · `model-mode-picker` | composed |
| Citations & Sources | `citations` | implemented |
| Chat Feed | `dual-speed-layout` (chat column) | composed |
| Command Palette | `copilot-input` | implemented |
| Workflow Builder | `workflow-builder` | implemented |
| Empty State (AI) | `suggestions` · `onboarding-first-value` | composed |
| Usage Indicator | `rate-limit-meter` | implemented |
| Upgrade Prompt | `rate-limit-meter` · `model-mode-picker` | composed |
| Third-Party Connection | `connectors` | implemented |
| Confirmation Dialog | `mandate-approval-card` · `scoped-approval` | composed |
| Activity / Audit Log | `footprints` | implemented |
| Keyboard Shortcuts | doctrine in `.cursorrules` | composed |
| Template | `templates` | implemented |

Non-AI SaaSFrame patterns (Modal, Table, Pricing…) stay **out of kit** unless an agent surface needs them.

---

## Part E — AI Design Guide resources

Source: [aidesign.guide/resources](https://www.aidesign.guide/resources) · [agents](https://www.aidesign.guide/agents)

| Resource | Kit use |
|----------|---------|
| Agentic UX Patterns (39) | Part A above |
| Five Patterns for Agentic UI | → `scoped-approval`, `streaming-thought-state`, `project-instructions`, `copilot-input`, `failure-disclosure` |
| Trust Levels (Observer→Autonomous) | → `autonomy-modes` · `autonomy-budget` |
| AI Anti-Patterns Gallery | Reinforces kit visual doctrine (no purple AI chrome) |
| Agentic Design System Defaults / CLAUDE.md packs | Host wiring via `CONSUMING.md` · `project-instructions` |
| Design inspiration bookmarks | Part F only |

---

## Part F — Visual inspiration (not agent patterns)

These galleries are **landing / marketing / general UI**. Do **not** invent kit patterns from them. Use only for rare host marketing pages — kit doctrine still bans soft SaaS / purple AI chrome in agent surfaces.

| Source | Role |
|--------|------|
| [collectui.com/categories](https://collectui.com/categories) | General UI category screenshots |
| [land-book.com](https://land-book.com/) | Landing inspiration (filter Industry → AI for product sites) |
| [lapa.ninja/elements](https://www.lapa.ninja/elements/) | Landing section crops (Hero, Pricing, CTA…) |

---

## Quick external → kit

| Ask / quote | Open |
|-------------|------|
| SaaSFrame “AI Copilot” / Front suggested reply | `suggested-reply` |
| SaaSFrame “AI Generation State” | `generation-lifecycle` |
| CopilotSidebar / Popup | `copilot-surface` |
| AI SDK tool part states | `tool-render-states` |
| “Yes, don't ask again for npm test *” | `scoped-approval` |
| Plan / Agent / Ask modes | `autonomy-modes` |
| Queue while agent runs | `steer-queue` |
| Needs input / Working / Completed | `agent-inbox` |
| Cloud agent + PR ready | `background-agent` |
| Take control of browser | `agent-takeover` |
| Ghost text / Tab accept | `ghost-text` |
| Context chip “Current file + 1” | `context-chip` |
| Deep research activity | `deep-research-feed` |
| Best-of-N / variations pick | `best-of-n` |
| Using: 2 AGENTS.md | `project-instructions` |
