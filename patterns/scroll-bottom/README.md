# Scroll to Bottom

**ID:** `scroll-bottom`  
**Playground:** [scroll-bottom](https://aiuxplayground.com/pattern/scroll-bottom)  **Related:** dual-speed-layout, controls

---

![Kit mockup](../../assets/screenshots/kit/kit-misc-chrome.jpg)

## Purpose

Jump-to-latest control when the user scrolled up during streaming chat.

## When to use

Jump-to-latest control when the user scrolled up during streaming chat.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function ScrollBottomButton({ onClick, visible }: { onClick: () => void; visible: boolean }) {
  if (!visible) return null;
  return <button type="button" onClick={onClick} className="rounded-pill border border-hairline bg-surface px-control py-dense text-2xs text-ink-muted shadow-bar">Latest ↓</button>;
}
```
