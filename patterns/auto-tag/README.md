# Auto Tag

**ID:** `auto-tag`  
**Playground:** [auto-tag](https://aiuxplayground.com/pattern/auto-tag)  **Related:** suggestions, smart-diff, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-recs-code.jpg)

## Purpose

AI suggests tags/labels on content; user confirms or edits before they stick.

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
