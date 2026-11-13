# Generative UI

**ID:** `generative-ui`  
**Playground:** [gen-ui](https://aiuxplayground.com/pattern/gen-ui) · gen-chart · prompt-ui · ChatGPT Intelligent UI  
**Related:** `artifact-pane`, `inline-action`, `mandate-approval-card`

---

<!-- playground-captures:start -->
**AI UX Playground teardowns** · [hub](https://aiuxplayground.com/teardowns)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__parts-list.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__parts-list.webp)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__sourced-photo.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__sourced-photo.webp)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__flow-card.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__flow-card.webp)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__gear-table.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__gear-table.webp)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__bill-splitter.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__bill-splitter.webp)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__clarifying-form.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__clarifying-form.webp)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__checklist-state.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__checklist-state.webp)

![chatgpt__intelligent-ui__chatgpt__intelligent-ui__layout-controls.webp](../../assets/screenshots/playground/chatgpt__intelligent-ui__chatgpt__intelligent-ui__layout-controls.webp)

<!-- playground-captures:end -->

<!-- aidesign-captures:start -->
**AI Design Guide** · [Agentic UX Patterns](https://www.aidesign.guide/agentic-ux-patterns)

![generative-ui-inline-chart_langdock.webp](../../assets/screenshots/external/aidesign/generative-ui-inline-chart_langdock.webp)

![generative-ui-preference-card_chatgpt.webp](../../assets/screenshots/external/aidesign/generative-ui-preference-card_chatgpt.webp)

![generated-interactive-report_rox.webp](../../assets/screenshots/external/aidesign/generated-interactive-report_rox.webp)

![in-chat-app-widgets_chatgpt-apps-sdk.webp](../../assets/screenshots/external/aidesign/in-chat-app-widgets_chatgpt-apps-sdk.webp)

<!-- aidesign-captures:end -->


![Kit mockup](../../assets/screenshots/kit/kit-generative-ui.jpg)


## Source references (external)

![SaaSFrame · Glide AI analysis conversation](../../assets/screenshots/external/saasframe/glide-ai-business-analysis-conversation.webp)
![SaaSFrame · EigenPal agent conversation](../../assets/screenshots/external/saasframe/eigenpal-test-an-ai-agent-conversation.webp)
## Purpose

Render **interactive components** (tables, calculators, forms, charts) inside the answer — not only markdown. Prefer promoting rich UIs into `artifact-pane` when users will edit/reuse them.

## Do / Don't

**Do:** typed component registry; edit affordance; sandbox untrusted UI.  
**Don't:** free-form HTML from the model without a allowlist.

## When to use

Render **interactive components** (tables, calculators, forms, charts) inside the answer — not only markdown.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
type GenBlock =
  | { type: "metric"; label: string; value: string }
  | { type: "actions"; items: { id: string; label: string }[] };

export function GenerativeUiBlock({
  blocks,
  onAction,
}: {
  blocks: GenBlock[];
  onAction?: (id: string) => void;
}) {
  return (
    <div className="space-y-control rounded-panel border border-hairline bg-surface p-panel">
      {blocks.map((b, i) =>
        b.type === "metric" ? (
          <div key={i} className="flex items-baseline justify-between text-xs">
            <span className="text-ink-muted">{b.label}</span>
            <span className="font-mono text-ink">{b.value}</span>
          </div>
        ) : (
          <div key={i} className="flex flex-wrap gap-dense">
            {b.items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => onAction?.(it.id)}
                className="rounded-control bg-accent-muted px-control py-dense text-2xs text-accent-ink"
              >
                {it.label}
              </button>
            ))}
          </div>
        )
      )}
    </div>
  );
}
```
