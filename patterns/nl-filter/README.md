# Natural Language Filter

**ID:** `nl-filter`  
**Playground:** [nl-filter](https://aiuxplayground.com/pattern/nl-filter)  **Related:** suggestions, semantic-search

---

![Kit mockup](../../assets/screenshots/kit/kit-search-filters.jpg)

## Purpose

Turn a phrase into editable structured facets (filters) users can correct.

## Snippet

```tsx
export function NlFilterChips({ facets, onRemove }: { facets: { id: string; label: string }[]; onRemove: (id: string) => void }) {
  return <div className="flex flex-wrap gap-dense">{facets.map((f) => <button key={f.id} type="button" onClick={() => onRemove(f.id)} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink">{f.label} ×</button>)}</div>;
}
```
