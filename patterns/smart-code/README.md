# Smart Code

**ID:** `smart-code`  
**Playground:** [smart-code](https://aiuxplayground.com/pattern/smart-code)  **Related:** artifact-pane, inline-action, smart-diff

---

## Purpose

Code-aware AI assists (explain, test, fix) scoped to selection with preview.

## Snippet

```tsx
export function SmartCodeActions({ onAction }: { onAction: (a: string) => void }) {
  return <div className="flex gap-dense">{["Explain", "Test", "Fix"].map((a) => <button key={a} type="button" onClick={() => onAction(a)} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">{a}</button>)}</div>;
}
```
