# Taxonomy maps — Shape of AI + AI UX Playground

**Agent rule:** Prefer [`INDEX.md`](INDEX.md) for implementation. Open this file only to map an external name → kit ID.

| Map | File |
|-----|------|
| Shape of AI (this file, Part A) | below |
| AI UX Playground **160 patterns 1:1** | [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md) |
| Slug list / URLs | [`assets/references/`](assets/references/) |

---

# Part A — Shape of AI → kit

Complete catalog mirrored from [shapeof.ai](https://www.shapeof.ai/) (Wayfinders, Prompt actions, Tuners, Governors, Trust builders, Identifiers).

| Status | Meaning |
|--------|---------|
| `implemented` | Full `patterns/<id>/README.md` + snippet |
| `composed` | Covered by combining implemented patterns |
| `catalog` | Spec + references here; implement on demand from this row |

**Source images:** [`assets/screenshots/shapeof/`](assets/screenshots/shapeof/) · **Kit mockups:** [`assets/screenshots/kit/`](assets/screenshots/kit/)

---

## Wayfinders

Help users construct their first prompt and get started.

| Shape of AI | Kit ID / mapping | Status | Source |
|-------------|------------------|--------|--------|
| Example gallery | `example-gallery` (catalog) · compose with `suggestions` | catalog | [shapeof](https://www.shapeof.ai/pattern-types/wayfinders) |
| Follow up | `follow-up` (catalog) · often after `suggestions` | catalog | wayfinders |
| Initial CTA | composed → `copilot-input` / open composer | composed | wayfinders |
| Nudges | `nudges` (catalog) | catalog | wayfinders |
| Prompt details | composed → `streaming-thought-state` + `footprints` | composed | wayfinders |
| Randomize | `randomize` (catalog) | catalog | wayfinders |
| Suggestions | `suggestions` | implemented | [patterns/suggestions](https://www.shapeof.ai/patterns/suggestions) |
| Templates | `templates` (catalog) · madlibs-adjacent | catalog | wayfinders |

## Prompt actions

| Shape of AI | Kit ID / mapping | Status | Source |
|-------------|------------------|--------|--------|
| Auto-fill | `auto-fill` (catalog) | catalog | homepage |
| Chained action | composed → `action-plan` + agent run | composed | homepage |
| Describe | `describe` (catalog) | catalog | homepage |
| Lengthen | via `inline-action` presets | composed | homepage |
| Inline Action | `inline-action` | implemented | [patterns/inline-action](https://www.shapeof.ai/patterns/inline-action) |
| Inpainting | `inpainting` (catalog) · media selection | catalog | homepage |
| Madlibs | `madlibs` (catalog) · structured slots | catalog | homepage |
| Open input | composed → `copilot-input` | composed | homepage |
| Regenerate | via `controls` | composed | homepage |
| Restructure / Restyle / Summary / Synthesis / Transform | via `inline-action` action set | composed | homepage |

## Tuners

| Shape of AI | Kit ID / mapping | Status | Source |
|-------------|------------------|--------|--------|
| Attachments | chip row on `copilot-input` / composer | composed | [tuners](https://www.shapeof.ai/pattern-types/tuners) |
| Connectors | `connectors` | implemented | [patterns/connectors](https://www.shapeof.ai/patterns/connectors) |
| Filters | filters on connectors / citations | composed | tuners |
| Model management | model chip on `copilot-input` | composed | tuners |
| Modes | mode chip on `copilot-input` | composed | tuners |
| Parameters | params drawer (catalog) | catalog | tuners |
| Preset styles / Saved styles / Voice and tone | style presets (catalog) | catalog | tuners |
| Prompt enhancer | enhancer control (catalog) | catalog | tuners |

## Governors

| Shape of AI | Kit ID / mapping | Status | Source |
|-------------|------------------|--------|--------|
| Action plan | `action-plan` | implemented | [patterns/action-plan](https://www.shapeof.ai/patterns/action-plan) |
| Branches | `branches` (catalog) · with `footprints` | catalog | [governors](https://www.shapeof.ai/pattern-types/governors) |
| Citations | `citations` | implemented | [patterns/citations](https://www.shapeof.ai/patterns/citations) |
| Controls | `controls` | implemented | [patterns/controls](https://www.shapeof.ai/patterns/controls) |
| Cost estimates | `cost-estimates` | implemented | [patterns/cost-estimates](https://www.shapeof.ai/patterns/cost-estimates) |
| Draft mode | draft flag + cheaper path in `cost-estimates` | composed | governors |
| Memory | memory settings (catalog) | catalog | governors |
| References | compose `citations` + `connectors` | composed | governors |
| Sample response | sample confirm (catalog) · near `mandate-approval-card` | catalog | governors |
| Shared vision | composed → `dual-speed-layout` | composed | [patterns/shared-vision](https://www.shapeof.ai/patterns/shared-vision) |
| Stream of Thought | composed → `streaming-thought-state` | composed | [patterns/stream-of-thought](https://www.shapeof.ai/patterns/stream-of-thought) |
| Variations | variations picker (catalog) | catalog | governors |
| Verification | composed → `mandate-approval-card` | composed | [patterns/verification](https://www.shapeof.ai/patterns/verification) |

## Trust builders

| Shape of AI | Kit ID / mapping | Status | Source |
|-------------|------------------|--------|--------|
| Caveat | caveat banner (catalog) | catalog | [trust-builders](https://www.shapeof.ai/pattern-types/trust-builders) |
| Consent | consent gate (catalog) | catalog | trust-builders |
| Data ownership | data ownership settings (catalog) | catalog | trust-builders |
| Disclosure | `disclosure` | implemented | [patterns/disclosure](https://www.shapeof.ai/patterns/disclosure) |
| Footprints | `footprints` | implemented | [patterns/footprints](https://www.shapeof.ai/patterns/footprints) |
| Incognito Mode | incognito toggle (catalog) | catalog | trust-builders |
| Watermark | watermark (catalog) · media export | catalog | trust-builders |

## Identifiers

Brand-level (usually host design system, not agent runtime UI).

| Shape of AI | Kit guidance | Status |
|-------------|--------------|--------|
| Avatar / Color / Iconography / Name / Personality | Keep dense; use `disclosure` badges; avoid purple “AI slop” palette called out in Footprints | catalog |

---

## Kit core compositions (agent workspaces)

| Product need | Compose |
|--------------|---------|
| Launch agent | `copilot-input` + `model-mode-picker` + `suggestions` + `connectors` + `cost-estimates` |
| Run with oversight | `clarify-before-act` → `action-plan` → `streaming-thought-state` + `controls` / `autonomy-budget` → `mandate-approval-card` |
| Workspace | `dual-speed-layout` + `artifact-pane` + `citations` + `footprints` + `disclosure` |
| Edit in place | `inline-action` + `response-versions` |
| First session | `onboarding-first-value` + `suggestions` |
| Continuity | `memory-personalization` |

---

# Part B — AI UX Playground (summary)

**Full 160-row map:** [`TAXONOMY-PLAYGROUND.md`](TAXONOMY-PLAYGROUND.md)  
Hubs: [patterns](https://aiuxplayground.com/patterns) · [teardowns](https://aiuxplayground.com/teardowns) · [llms.txt](https://aiuxplayground.com/llms.txt)

### 11 categories → kit entrypoints

| Category | Entry kit IDs |
|----------|---------------|
| agents | `autonomy-budget`, `mandate-approval-card`, `checkpoints-restore`, `streaming-thought-state` |
| chatbot | `copilot-input`, `response-versions`, `artifact-pane`, `controls` |
| input | `copilot-input`, `model-mode-picker`, `connectors`, `suggestions` |
| output | `generative-ui`, `response-versions`, `feedback`, `artifact-pane` |
| trust | `citations`, `failure-disclosure`, `human-handoff`, `disclosure`, `footprints` |
| performance | `model-mode-picker`, `cost-estimates`, `rate-limit-meter` |
| onboarding | `onboarding-first-value`, `suggestions` |
| collab | `shared-session`, `smart-diff`, `mandate-approval-card` |
| design | `generative-ui`, `inline-action`, `response-versions` |
| commerce | `agent-payment`, `autonomy-budget` |
| audio | `voice-transcript`, `controls` |

### Teardown themes → kit

| Teardown | Kit |
|----------|-----|
| Composer | `copilot-input`, `model-mode-picker` |
| Output & artifacts | `artifact-pane`, `generative-ui`, `response-versions` |
| Human in the loop | `clarify-before-act`, `mandate-approval-card`, `connectors` |
| Model & mode | `model-mode-picker`, `cost-estimates` |
| Onboarding | `onboarding-first-value` |
| Trust & citations | `citations`, `disclosure` |
| Personalization & memory | `memory-personalization` |
| Pricing & upgrades | `model-mode-picker`, `rate-limit-meter`, `agent-payment` |
