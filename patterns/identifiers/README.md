# Identifiers

**ID:** `identifiers`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/identifiers  **Related:** disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-misc-chrome.jpg)

## Purpose

Brand-level AI identity: avatar, color, iconography, name, personality — dense, non-slop.

## Snippet

```tsx
export function AiIdentifier({ name }: { name: string }) {
  return <div className="flex items-center gap-control"><span className="flex size-6 items-center justify-center rounded-control bg-accent-muted text-2xs text-accent-ink">AI</span><span className="text-xs font-medium text-ink">{name}</span></div>;
}
```
