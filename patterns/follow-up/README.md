# Follow Up

**ID:** `follow-up`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/wayfinders  **Related:** clarify-before-act, suggestions

---

![Kit mockup](../../assets/screenshots/kit/kit-follow-up-feedback.jpg)

## Purpose

Ask for missing info when the initial prompt is insufficient (Shape of AI Wayfinder).

## Snippet

```tsx
export function FollowUpPrompt({ question, onAnswer }: { question: string; onAnswer: (v: string) => void }) {
  return (
    <div className="rounded-panel border border-hairline p-panel">
      <p className="text-xs text-ink">{question}</p>
      <input onKeyDown={(e) => e.key === "Enter" && onAnswer((e.target as HTMLInputElement).value)} className="mt-control h-8 w-full rounded-control border border-hairline bg-canvas px-control text-xs" placeholder="Your answer…" />
    </div>
  );
}
```
