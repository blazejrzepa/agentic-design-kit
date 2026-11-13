# Personalized Checkout

**ID:** `personalized-checkout`  
**Playground:** [personalized-checkout](https://aiuxplayground.com/pattern/personalized-checkout)  **Related:** agent-payment, memory-personalization, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-commerce-pack.jpg)

## Purpose

AI-tailored checkout fields/offers with disclosure and easy decline of personalization.

## When to use

AI-tailored checkout fields/offers with disclosure and easy decline of personalization.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function CheckoutPersonalization({ offer, onAccept, onDecline }: { offer: string; onAccept: () => void; onDecline: () => void }) {
  return (
    <div className="rounded-panel border border-hairline p-panel text-xs">
      <p className="text-ink">{offer}</p>
      <div className="mt-control flex gap-control">
        <button type="button" onClick={onAccept} className="text-accent-ink">Use</button>
        <button type="button" onClick={onDecline} className="text-ink-faint">No thanks</button>
      </div>
    </div>
  );
}
```
