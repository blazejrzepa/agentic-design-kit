# Universal Cart

**ID:** `universal-cart`  
**Playground:** [universal-cart](https://aiuxplayground.com/pattern/universal-cart)  **Related:** agent-payment, merchant

---

## Purpose

Cross-merchant cart assembled by an agent with per-seller checkout paths.

## Snippet

```tsx
export function UniversalCart({ lines }: { lines: { seller: string; item: string; price: string }[] }) {
  return <ul className="divide-y divide-hairline text-xs">{lines.map((l, i) => <li key={i} className="flex justify-between py-control"><span>{l.item} · {l.seller}</span><span className="font-mono">{l.price}</span></li>)}</ul>;
}
```
