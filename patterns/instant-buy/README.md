# Instant Buy

**ID:** `instant-buy`  
**Playground:** [instant-buy](https://aiuxplayground.com/pattern/instant-buy)  **Related:** agent-payment, mandate-approval-card

---

![Kit mockup](../../assets/screenshots/kit/kit-commerce-pack.jpg)

## Purpose

One-tap purchase from AI recommendation with explicit price, seller, and confirmation.

## When to use

AI recommends a purchase with one confirmed tap.

## When not to use

Browse-only discovery.

## Anatomy

Price · seller · Buy · receipt path

## Do / Don't

**Do:** Show merchant of record; confirm once.  
**Don't:** One-tap buy without price visibility.

## Snippet

```tsx
export function InstantBuy({ price, seller, onBuy }: { price: string; seller: string; onBuy: () => void }) {
  return (
    <button type="button" onClick={onBuy} className="rounded-control bg-accent px-panel py-control-2 text-xs text-accent-ink">Buy {price} · {seller}</button>
  );
}
```
