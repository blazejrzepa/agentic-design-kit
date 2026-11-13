# Madlibs

**ID:** `madlibs`  
**Shape of AI:** https://www.shapeof.ai/  **Related:** templates, copilot-input

---

![Kit mockup](../../assets/screenshots/kit/kit-madlibs-templates.jpg)

## Purpose

Slot-based generative forms that preserve format/accuracy across runs.

## Snippet

```tsx
export function MadlibSlot({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return <label className="inline-flex items-center gap-dense text-xs text-ink">{label}<input value={value} onChange={(e) => onChange(e.target.value)} className="h-7 w-28 border-b border-hairline bg-transparent px-dense outline-none" /></label>;
}
```
