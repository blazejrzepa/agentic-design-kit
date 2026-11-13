# Prompt Enhancer

**ID:** `prompt-enhancer`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/tuners  **Related:** copilot-input, response-versions

---

## Purpose

One-click expand/improve the user prompt before send, with editable preview.

## Snippet

```tsx
export function PromptEnhancer({ onEnhance }: { onEnhance: () => void }) {
  return <button type="button" onClick={onEnhance} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">Enhance prompt</button>;
}
```
