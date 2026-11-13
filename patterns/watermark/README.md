# Watermark

**ID:** `watermark`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/trust-builders  **Related:** disclosure, footprints

---

## Purpose

Human/machine-readable identifiers on AI-generated media at export.

## Snippet

```tsx
export function WatermarkToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return <label className="flex items-center gap-dense text-2xs text-ink-muted"><input type="checkbox" checked={on} onChange={onToggle} /> Watermark exports</label>;
}
```
