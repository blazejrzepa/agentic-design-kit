# Smart Recommendations

**ID:** `smart-recommendations`  
**Playground:** [smart-recommendations](https://aiuxplayground.com/pattern/smart-recommendations)  **Related:** suggestions, feedback

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-recs-code.jpg)

## Purpose

Ranked AI recommendations with reason chips and dismiss/feedback.

## When to use

Ranked AI recommendations with reason chips and dismiss/feedback.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function RecCard({ title, why, onOpen }: { title: string; why: string; onOpen: () => void }) {
  return <button type="button" onClick={onOpen} className="w-full rounded-panel border border-hairline p-panel text-left"><p className="text-xs text-ink">{title}</p><p className="mt-dense text-2xs text-ink-faint">{why}</p></button>;
}
```
