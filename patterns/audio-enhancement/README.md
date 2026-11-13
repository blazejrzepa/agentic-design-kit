# Audio Enhancement

**ID:** `audio-enhancement`  
**Playground:** [audio-enhancement](https://aiuxplayground.com/pattern/audio-enhancement)  **Related:** voice-transcript, multimodal

---

## Purpose

Controls to denoise, normalize, or enhance uploaded/recorded audio before AI processing.

## Snippet

```tsx
export function AudioEnhancement({ onEnhance }: { onEnhance: (preset: string) => void }) {
  return (
    <div className="flex gap-dense">
      {["Denoise", "Normalize", "Boost voice"].map((p) => (
        <button key={p} type="button" onClick={() => onEnhance(p)} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted hover:text-ink">{p}</button>
      ))}
    </div>
  );
}
```
