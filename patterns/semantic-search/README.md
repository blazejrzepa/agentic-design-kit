# Semantic Search

**ID:** `semantic-search`  
**Playground:** [semantic-search](https://aiuxplayground.com/pattern/semantic-search)  **Related:** nl-filter, citations

---

## Purpose

Meaning-based retrieval across catalog/docs with relevance cues and facet refine.

## Snippet

```tsx
export function SemanticHit({ title, score }: { title: string; score: number }) {
  return <div className="flex justify-between py-dense text-xs"><span className="text-ink">{title}</span><span className="font-mono text-2xs text-ink-faint">{score.toFixed(2)}</span></div>;
}
```
