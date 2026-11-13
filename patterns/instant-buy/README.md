# Instant Buy

**ID:** `instant-buy`  
**Playground:** [instant-buy](https://aiuxplayground.com/pattern/instant-buy)  **Related:** agent-payment, mandate-approval-card

---

## Purpose

One-tap purchase from AI recommendation with explicit price, seller, and confirmation.

## Snippet

```tsx
export function InstantBuy({ price, seller, onBuy }: { price: string; seller: string; onBuy: () => void }) {
  return (
    <button type="button" onClick={onBuy} className="rounded-control bg-accent px-panel py-control-2 text-xs text-accent-ink">Buy {price} · {seller}</button>
  );
}
```
