# Natural Language Filter

**ID:** `nl-filter`  
**Playground:** [nl-filter](https://aiuxplayground.com/pattern/nl-filter)  **Related:** suggestions, semantic-search

---

![Kit mockup](../../assets/screenshots/kit/kit-search-filters.jpg)

## Purpose

Turn a phrase into editable structured facets (filters) users can correct.

## When to use

Turn a phrase into editable structured facets (filters) users can correct.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function NlFilterChips({ facets, onRemove }: { facets: { id: string; label: string }[]; onRemove: (id: string) => void }) {
  return <div className="flex flex-wrap gap-dense">{facets.map((f) => <button key={f.id} type="button" onClick={() => onRemove(f.id)} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink">{f.label} ×</button>)}</div>;
}
```
