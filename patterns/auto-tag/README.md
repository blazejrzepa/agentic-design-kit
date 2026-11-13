# Auto Tag

**ID:** `auto-tag`  
**Playground:** [auto-tag](https://aiuxplayground.com/pattern/auto-tag)  **Related:** suggestions, smart-diff, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-recs-code.jpg)

## Purpose

AI suggests tags/labels on content; user confirms or edits before they stick.

## When to use

AI suggests tags/labels on content; user confirms or edits before they stick.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function AutoTagRow({ tags, onToggle }: { tags: { id: string; label: string; on: boolean }[]; onToggle: (id: string) => void }) {
  return (
    <div className="flex flex-wrap gap-dense">
      {tags.map((t) => (
        <button key={t.id} type="button" onClick={() => onToggle(t.id)} className={`rounded-control px-control py-dense text-2xs ${t.on ? "bg-accent-muted text-accent-ink" : "border border-hairline text-ink-muted"}`}>{t.label}</button>
      ))}
    </div>
  );
}
```
