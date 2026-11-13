# Agentic Design Kit — Pattern Index

> **Agent entrypoint.** Open only one `patterns/<id>/README.md`.  
> Full maps: [`TAXONOMY.md`](TAXONOMY.md) (Shape of AI) · [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) (**160** Playground patterns)

**Tokens:** [`tokens/tailwind.config.stub.js`](tokens/tailwind.config.stub.js) · **Protocol:** [`AI-INSTRUCTIONS.md`](AI-INSTRUCTIONS.md) · **Rules:** [`.cursorrules`](.cursorrules)

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
| Any Playground slug | [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) |
| Shape of AI name | [`TAXONOMY.md`](TAXONOMY.md) |

---

## Coverage

| Source | Status |
|--------|--------|
| AI UX Playground | **160/160** slugs mapped in `TAXONOMY-PLAYGROUND.md` |
| Shape of AI | Full category map in `TAXONOMY.md` |
| Implemented kit folders | See tables above (~30) |
