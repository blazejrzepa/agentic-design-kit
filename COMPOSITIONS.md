# Ready compositions

Copy-paste recipes for host products. Each line is an ordered kit ID stack.

| Product surface | Compose |
|-----------------|---------|
| Global agent launcher | `copilot-input` → `suggestions` → `model-mode-picker` → `connectors` → `cost-estimates` |
| Chat home (consumer) | `onboarding-first-value` / `example-gallery` → `copilot-input` → `nudges` |
| Research chat | `copilot-input` + mode chips → `streaming-thought-state` → `citations` → `response-versions` |
| Coding agent IDE | `dual-speed-layout` → `streaming-thought-state` → `artifact-pane` → `smart-diff` → `checkpoints-restore` → `controls` |
| HITL send / write | `clarify-before-act` → `mandate-approval-card` (+ `smart-diff` if files) |
| Contractual multi-step | `action-plan` → `autonomy-budget` → `streaming-thought-state` → `mandate-approval-card` |
| Permissions-first agent | `connectors` (read vs write Allow) → run → `footprints` |
| Form copilots | `smart-fill` / `auto-fill` → per-field accept → `disclosure` |
| Doc edit | `inline-action` → preview → `smart-diff` / Accept |
| Image edit | `inpainting` / `magic-edit` → preview → Apply |
| Image gen studio | `text-to-image-controls` → `parameters` → `style-presets` → `variations` → `watermark` |
| Commerce agent | `smart-recommendations` → `instant-buy` / `agent-payment` → `activity` via `footprints` |
| Voice session | `voice-transcript` → `controls` barge-in → `mandate-approval-card` on destructive commands |
| Support bot | `disclosure` → `failure-disclosure` → `human-handoff` → `feedback` |
| Shared review | `shared-session` → `smart-diff` → `footprints` |
| Memory settings | `memory-personalization` → `incognito-mode` → `consent` |
| Workflow builder | `workflow-builder` → `conditional-logic` → HITL node = `mandate-approval-card` |
| Blank → first value | `suggestions` + `templates` / `madlibs` → optional `prompt-enhancer` → send |

Prefer these stacks over inventing new chrome.
