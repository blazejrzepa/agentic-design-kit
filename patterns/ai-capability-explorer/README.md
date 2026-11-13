# AI Capability Explorer

**ID:** `ai-capability-explorer`  
**Playground:** [ai-capability-explorer](https://aiuxplayground.com/pattern/ai-capability-explorer)  **Related:** onboarding-first-value, suggestions, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-canvas-graph.jpg)

## Purpose

Interactive map of what the AI can do (modes, tools, limits) for onboarding and discovery.

## Snippet

```tsx
export function CapabilityExplorer({ items, onPick }: { items: { id: string; label: string }[]; onPick: (id: string) => void }) {
  return (
    <ul className="grid grid-cols-2 gap-control">
      {items.map((i) => (
        <li key={i.id}><button type="button" onClick={() => onPick(i.id)} className="w-full rounded-panel border border-hairline px-control py-panel text-left text-xs text-ink hover:border-hairline-strong">{i.label}</button></li>
      ))}
    </ul>
  );
}
```
