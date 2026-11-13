# Templates

**ID:** `templates`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/wayfinders  **Related:** suggestions, madlibs, copilot-input

---

![Kit mockup](../../assets/screenshots/kit/kit-madlibs-templates.jpg)

## Purpose

Structured prompt templates fillable by user or pre-filled by AI (Madlibs-adjacent).

## Snippet

```tsx
export function TemplateCard({ name, onUse }: { name: string; onUse: () => void }) {
  return <button type="button" onClick={onUse} className="rounded-panel border border-hairline px-panel py-control text-left text-xs text-ink">{name}</button>;
}
```
