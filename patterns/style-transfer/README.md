# Style Transfer

**ID:** `style-transfer`  
**Playground:** [style-transfer](https://aiuxplayground.com/pattern/style-transfer)  **Shape of AI:** https://www.shapeof.ai/  **Related:** inline-action, style-interpolation

---

## Purpose

Apply a reference style to content without changing structure (Shape of AI Restyle).

## Snippet

```tsx
export function StyleTransferPick({ styles, onPick }: { styles: string[]; onPick: (s: string) => void }) {
  return <div className="flex flex-wrap gap-dense">{styles.map((s) => <button key={s} type="button" onClick={() => onPick(s)} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">{s}</button>)}</div>;
}
```
