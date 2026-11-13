# Dynamic Pricing

**ID:** `dynamic-pricing`  
**Playground:** [dynamic-pricing](https://aiuxplayground.com/pattern/dynamic-pricing)  **Related:** agent-payment, mandate-approval-card, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-risk-bias-fraud.jpg)

## Purpose

Show AI-influenced price suggestions with rationale and human override before publish.

## When to use

Show AI-influenced price suggestions with rationale and human override before publish.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function DynamicPriceSuggest({ price, reason, onAccept }: { price: string; reason: string; onAccept: () => void }) {
  return (
    <div className="rounded-panel border border-hairline bg-surface p-panel">
      <p className="text-sm text-ink">{price}</p>
      <p className="mt-dense text-2xs text-ink-muted">{reason}</p>
      <button type="button" onClick={onAccept} className="mt-control text-2xs text-accent-ink">Apply</button>
    </div>
  );
}
```
