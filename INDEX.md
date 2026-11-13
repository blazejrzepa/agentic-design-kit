# Agentic Design Kit — Pattern Index

> **Agent entrypoint.** Open only one `patterns/<id>/README.md`.  
> Full maps: [`TAXONOMY.md`](TAXONOMY.md) (Shape of AI) · [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) (**160** Playground) · [`TAXONOMY-EXTERNAL.md`](TAXONOMY-EXTERNAL.md) (**AI SDK · CopilotKit · SaaSFrame · AI Design Guide**)

**Tokens:** [`tokens/tailwind.config.stub.js`](tokens/tailwind.config.stub.js) · **Protocol:** [`AI-INSTRUCTIONS.md`](AI-INSTRUCTIONS.md) · **Rules:** [`.cursorrules`](.cursorrules)  
**React:** [`packages/react`](packages/react) · **Demo:** `npm run demo`

---

## Workspace & composer

| ID | Purpose | Path |
|----|---------|------|
| `copilot-input` | Intent / command / chat composer | [`patterns/copilot-input/`](patterns/copilot-input/) |
| `model-mode-picker` | Model + effort before send | [`patterns/model-mode-picker/`](patterns/model-mode-picker/) |
| `dual-speed-layout` | Chat + live execution | [`patterns/dual-speed-layout/`](patterns/dual-speed-layout/) |
| `artifact-pane` | Deliverable split pane | [`patterns/artifact-pane/`](patterns/artifact-pane/) |
| `generative-ui` | Interactive UI in the answer | [`patterns/generative-ui/`](patterns/generative-ui/) |
| `streaming-thought-state` | Thought / tool timeline | [`patterns/streaming-thought-state/`](patterns/streaming-thought-state/) |
| `voice-transcript` | Live voice + barge-in | [`patterns/voice-transcript/`](patterns/voice-transcript/) |

## HITL, spend & limits

| ID | Purpose | Path |
|----|---------|------|
| `clarify-before-act` | Questions / handoff before acting | [`patterns/clarify-before-act/`](patterns/clarify-before-act/) |
| `mandate-approval-card` | Diff + budget approve/edit/reject | [`patterns/mandate-approval-card/`](patterns/mandate-approval-card/) |
| `action-plan` | Plan before run | [`patterns/action-plan/`](patterns/action-plan/) |
| `controls` | Stop / pause / queue | [`patterns/controls/`](patterns/controls/) |
| `cost-estimates` | Credits / $ / tokens | [`patterns/cost-estimates/`](patterns/cost-estimates/) |
| `autonomy-budget` | Action/time/spend ceilings | [`patterns/autonomy-budget/`](patterns/autonomy-budget/) |
| `rate-limit-meter` | Remaining requests + live meters | [`patterns/rate-limit-meter/`](patterns/rate-limit-meter/) |
| `agent-payment` | Approve agent spend / virtual card | [`patterns/agent-payment/`](patterns/agent-payment/) |
| `checkpoints-restore` | Named snapshots + restore | [`patterns/checkpoints-restore/`](patterns/checkpoints-restore/) |

## Output, trust & collab

| ID | Purpose | Path |
|----|---------|------|
| `response-versions` | Non-destructive N/N regenerate | [`patterns/response-versions/`](patterns/response-versions/) |
| `inline-action` | Selection-scoped edit | [`patterns/inline-action/`](patterns/inline-action/) |
| `smart-diff` | Accept/reject model changes | [`patterns/smart-diff/`](patterns/smart-diff/) |
| `citations` | Source chips / panel | [`patterns/citations/`](patterns/citations/) |
| `connectors` | External tools + consent | [`patterns/connectors/`](patterns/connectors/) |
| `disclosure` | Label AI actor / content | [`patterns/disclosure/`](patterns/disclosure/) |
| `failure-disclosure` | Can’t / tool failed + next step | [`patterns/failure-disclosure/`](patterns/failure-disclosure/) |
| `human-handoff` | Escalate to human with context | [`patterns/human-handoff/`](patterns/human-handoff/) |
| `footprints` | Replay / audit trail | [`patterns/footprints/`](patterns/footprints/) |
| `feedback` | Helpful / not helpful | [`patterns/feedback/`](patterns/feedback/) |
| `shared-session` | Share link + permissions | [`patterns/shared-session/`](patterns/shared-session/) |

## First value & preference

| ID | Purpose | Path |
|----|---------|------|
| `suggestions` | Starters / follow-ups | [`patterns/suggestions/`](patterns/suggestions/) |
| `onboarding-first-value` | Role / wizard / point-of-work | [`patterns/onboarding-first-value/`](patterns/onboarding-first-value/) |
| `memory-personalization` | Tone, memory, off-ramps | [`patterns/memory-personalization/`](patterns/memory-personalization/) |

## Agent runtime & surfaces (external AI sources)

| ID | Purpose | Path |
|----|---------|------|
| `copilot-surface` | Chat / sidebar / popup shell | [`patterns/copilot-surface/`](patterns/copilot-surface/) |
| `context-chip` | What the agent can see | [`patterns/context-chip/`](patterns/context-chip/) |
| `ghost-text` | Tab-accept inline suggestion | [`patterns/ghost-text/`](patterns/ghost-text/) |
| `suggested-reply` | Draft beside live task | [`patterns/suggested-reply/`](patterns/suggested-reply/) |
| `generation-lifecycle` | Queued → partial → complete | [`patterns/generation-lifecycle/`](patterns/generation-lifecycle/) |
| `tool-render-states` | GenUI tool part phases | [`patterns/tool-render-states/`](patterns/tool-render-states/) |
| `scoped-approval` | Yes / don’t-ask-again for scope | [`patterns/scoped-approval/`](patterns/scoped-approval/) |
| `autonomy-modes` | Plan / ask / auto | [`patterns/autonomy-modes/`](patterns/autonomy-modes/) |
| `steer-queue` | Queue or steer while running | [`patterns/steer-queue/`](patterns/steer-queue/) |
| `agent-inbox` | Needs input / working / done | [`patterns/agent-inbox/`](patterns/agent-inbox/) |
| `background-agent` | Cloud session + notify | [`patterns/background-agent/`](patterns/background-agent/) |
| `agent-takeover` | Take control of agent browser | [`patterns/agent-takeover/`](patterns/agent-takeover/) |
| `deep-research-feed` | Long research activity timeline | [`patterns/deep-research-feed/`](patterns/deep-research-feed/) |
| `best-of-n` | Pick from parallel attempts | [`patterns/best-of-n/`](patterns/best-of-n/) |
| `project-instructions` | Loaded AGENTS.md / CLAUDE.md | [`patterns/project-instructions/`](patterns/project-instructions/) |

---

## Quick routing

| Ask | Open |
|-----|------|
| Composer / ⌘K / chips | `copilot-input` |
| Model / effort / DeepThink | `model-mode-picker` |
| Artifacts / gen UI | `artifact-pane` / `generative-ui` |
| Clarify / Send gate / tools Allow | `clarify-before-act` / `mandate-approval-card` / `connectors` |
| Agent spend / money | `agent-payment` |
| Rate limits / live tokens | `rate-limit-meter` |
| Restore checkpoint / smart diff | `checkpoints-restore` / `smart-diff` |
| Can’t answer / escalate | `failure-disclosure` / `human-handoff` |
| Voice listening | `voice-transcript` |
| Share thread | `shared-session` |
| Copilot sidebar / popup | `copilot-surface` |
| Queue while running / Plan mode | `steer-queue` / `autonomy-modes` |
| Cloud agent / agent inbox | `background-agent` / `agent-inbox` |
| AI SDK tool UI / GenUI states | `tool-render-states` / `generative-ui` |
| Any Playground slug | [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) |
| Shape of AI name | [`TAXONOMY.md`](TAXONOMY.md) |
| SaaSFrame / CopilotKit / AI SDK / AI Design Guide | [`TAXONOMY-EXTERNAL.md`](TAXONOMY-EXTERNAL.md) |

---

## Coverage

| Source | Status |
|--------|--------|
| AI UX Playground | **160/160** in [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) — **0 catalog**; direct + composed |
| Shape of AI | Wayfinders / tuners / governors / trust / identifiers folded into kit folders |
| External AI (SDK · CopilotKit · SaaSFrame · AI Design Guide) | Mapped in [`TAXONOMY-EXTERNAL.md`](TAXONOMY-EXTERNAL.md) — **15** new runtime patterns |
| Collect UI · Landbook · Lapa | Visual ref only (not agent patterns) — Part F in external taxonomy |
| Kit folders | **118** under `patterns/` (core + runtime + extended catalog) |
| Screenshots | **54** kit mockups + **52** SaaSFrame AI captures — wired into **45** pattern READMEs ([`GALLERY.md`](GALLERY.md) · `assets/screenshots/external/saasframe/`) |
| README depth | All patterns include When / Purpose / Snippet (+ Do-Don't) |

Extended IDs: `TAXONOMY-PLAYGROUND.md` · `TAXONOMY-EXTERNAL.md` · matching slug.
