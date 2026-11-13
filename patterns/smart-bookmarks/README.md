# Smart Bookmarks

**ID:** `smart-bookmarks`  
**Playground:** [smart-bookmarks](https://aiuxplayground.com/pattern/smart-bookmarks)  **Related:** footprints, message-pinning

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-recs-code.jpg)

## Purpose

AI-suggested bookmarks/anchors in long outputs or sessions.

## When to use

AI-suggested bookmarks/anchors in long outputs or sessions.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function SmartBookmark({ label, onJump }: { label: string; onJump: () => void }) {
  return <button type="button" onClick={onJump} className="text-left text-2xs text-accent-ink hover:underline">{label}</button>;
}
```
