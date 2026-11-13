# Real-Time Translation

**ID:** `real-time-translation`  
**Playground:** [real-time-translation](https://aiuxplayground.com/pattern/real-time-translation)  **Related:** voice-transcript, lang-toggle

---

## Purpose

Live translate speech/text with source/target labels and interrupt.

## Snippet

```tsx
export function LiveTranslation({ source, target }: { source: string; target: string }) {
  return (
    <div className="grid grid-cols-2 gap-control text-xs">
      <p className="rounded-control bg-surface p-control text-ink-muted">{source}</p>
      <p className="rounded-control bg-accent-muted p-control text-accent-ink">{target}</p>
    </div>
  );
}
```
