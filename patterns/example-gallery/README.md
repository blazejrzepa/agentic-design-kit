# Example Gallery

**ID:** `example-gallery`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/wayfinders  **Related:** suggestions, onboarding-first-value

---

![Kit mockup](../../assets/screenshots/kit/kit-wayfinders.jpg)

## Purpose

Share sample generations, prompts, and parameters to educate and inspire first use.

## Snippet

```tsx
export function ExampleGallery({ items, onUse }: { items: { id: string; title: string }[]; onUse: (id: string) => void }) {
  return <div className="grid grid-cols-2 gap-control">{items.map((i) => <button key={i.id} type="button" onClick={() => onUse(i.id)} className="rounded-panel border border-hairline p-panel text-left text-xs text-ink">{i.title}</button>)}</div>;
}
```
