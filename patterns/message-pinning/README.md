# Message Pinning

**ID:** `message-pinning`  
**Playground:** [message-pinning](https://aiuxplayground.com/pattern/message-pinning)  **Related:** footprints, dual-speed-layout

---

![Kit mockup](../../assets/screenshots/kit/kit-misc-chrome.jpg)

## Purpose

Pin key AI/user messages to a sticky rail for long threads.

## When to use

Pin key AI/user messages to a sticky rail for long threads.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function PinnedRail({ items }: { items: string[] }) {
  return <aside className="space-y-dense border-b border-hairline bg-surface px-panel py-control">{items.map((t, i) => <p key={i} className="truncate text-2xs text-ink-muted">{t}</p>)}</aside>;
}
```
