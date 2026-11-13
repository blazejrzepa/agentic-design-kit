# Message Pinning

**ID:** `message-pinning`  
**Playground:** [message-pinning](https://aiuxplayground.com/pattern/message-pinning)  **Related:** footprints, dual-speed-layout

---

## Purpose

Pin key AI/user messages to a sticky rail for long threads.

## Snippet

```tsx
export function PinnedRail({ items }: { items: string[] }) {
  return <aside className="space-y-dense border-b border-hairline bg-surface px-panel py-control">{items.map((t, i) => <p key={i} className="truncate text-2xs text-ink-muted">{t}</p>)}</aside>;
}
```
