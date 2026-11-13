# Personalized Checkout

**ID:** `personalized-checkout`  
**Playground:** [personalized-checkout](https://aiuxplayground.com/pattern/personalized-checkout)  **Related:** agent-payment, memory-personalization, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-commerce-pack.jpg)

## Purpose

AI-tailored checkout fields/offers with disclosure and easy decline of personalization.

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
