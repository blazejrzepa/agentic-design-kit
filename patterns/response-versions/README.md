# Response Versions

**ID:** `response-versions`  
**Teardowns:** [Output & artifacts](https://aiuxplayground.com/teardowns/compare/output-artifacts-refinement)  
**Playground:** Response Refinement · non-destructive regenerate  
**Related:** `inline-action`, `controls`, `artifact-pane`

![Kit mockup](../../assets/screenshots/kit/kit-response-versions.jpg)

---

## Purpose

Iterate on an answer **without destroying** prior drafts: `N/N` version navigation, Regenerate / Try again, reshape (Longer / Shorter), and selection-scoped fixes via `inline-action`.

## Do / Don't

**Do:** keep previous versions addressable; label rewrite mode/model; branch on user-message edit.  
**Don't:** overwrite silently; force full regenerate for a one-paragraph fix.

## Snippet

```tsx
export function ResponseVersionBar({
  index,
  total,
  onPrev,
  onNext,
  onRegenerate,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onRegenerate: () => void;
}) {
  return (
    <div className="flex items-center gap-control text-2xs text-ink-muted">
      <button type="button" onClick={onPrev} disabled={index <= 1} className="disabled:opacity-30">
        ‹
      </button>
      <span className="font-mono tabular-nums">
        {index}/{total}
      </span>
      <button type="button" onClick={onNext} disabled={index >= total} className="disabled:opacity-30">
        ›
      </button>
      <button type="button" onClick={onRegenerate} className="ml-control hover:text-ink">
        Regenerate
      </button>
    </div>
  );
}
```
