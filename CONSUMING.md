# Consuming Agentic Design Kit from a host project

Wire this kit so Cursor (and other agents) resolve AI UI in **one INDEX read + one pattern file**.

---

## 1. Add the kit to the host

Pick one:

```bash
# Git submodule (recommended)
git submodule add https://github.com/blazejrzepa/agentic-design-kit.git vendor/agentic-design-kit

# Or sibling clone
git clone https://github.com/blazejrzepa/agentic-design-kit.git ../agentic-design-kit
```

Merge tokens from `tokens/tailwind.config.stub.js` into the host Tailwind config (or import `theme.extend`).

---

## 2. Host agent rules (paste into `AGENTS.md` or `.cursorrules`)

```text
## Agentic Design Kit

When designing or implementing AI / agent UI:

1. Open vendor/agentic-design-kit/INDEX.md (adjust path).
2. Open only the matched patterns/<id>/README.md.
3. Use kit tokens (tailwind stub) — dense Linear/Raycast, no soft SaaS / purple AI chrome.
4. If the user names a Shape of AI or AI UX Playground pattern, open TAXONOMY.md or TAXONOMY-PLAYGROUND.md once, then implement the mapped kit ID.
5. HITL: irreversible / paid / write tools → mandate-approval-card (or clarify-before-act first).
6. Never represent agent work with a lone spinner → streaming-thought-state.
```

Optional Cursor rule file: copy kit `.cursorrules` lookup section into `.cursor/rules/agentic-design-kit.mdc` with `globs` for `**/*.{tsx,jsx,vue,swift}`.

---

## 3. Composition defaults (agent workspaces)

| Job | Compose |
|-----|---------|
| Launcher / composer | `copilot-input` + `model-mode-picker` + `suggestions` + `connectors` |
| Oversight run | `clarify-before-act` → `action-plan` → `streaming-thought-state` + `controls` / `autonomy-budget` → `mandate-approval-card` |
| Workspace | `dual-speed-layout` + `artifact-pane` + `citations` + `disclosure` |
| Spend | `agent-payment` + `cost-estimates` + `rate-limit-meter` |

---

## 4. React package (optional)

```ts
import {
  DualSpeedLayout,
  MandateApprovalCard,
  StreamingThoughtState,
  CopilotInput,
} from "@agentic-design-kit/react";
import "@agentic-design-kit/react/styles.css";
```

Path via workspace / submodule: `vendor/agentic-design-kit/packages/react`.

Run the kit demo: `npm install && npm run demo` in the kit root.

## 5. Verify

Ask the host agent: “Build a HITL approval card for sending email” — it should open `INDEX.md` → `mandate-approval-card` only, not crawl the whole kit.
