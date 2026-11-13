# Style Presets

**ID:** `style-presets`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/tuners  **Related:** memory-personalization, style-transfer

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/preset-styles)

![preset styles og.png](../../assets/screenshots/shapeof/preset-styles-og.png)

![preset styles ex01 tuner bg.webp](../../assets/screenshots/shapeof/preset-styles-ex01-tuner-bg.webp)

![preset styles ex02 cleanshot 2024 07 02 at 12.25.34 2x p 1600.png](../../assets/screenshots/shapeof/preset-styles-ex02-cleanshot-2024-07-02-at-12.25.34-2x-p-1600.png)

![preset styles ex03 eleven style gallery.png](../../assets/screenshots/shapeof/preset-styles-ex03-eleven-style-gallery.png)

![preset styles ex04 style gallery gamma.png](../../assets/screenshots/shapeof/preset-styles-ex04-style-gallery-gamma.png)

![preset styles ex05 styleg allery udio2.png](../../assets/screenshots/shapeof/preset-styles-ex05-styleg-allery-udio2.png)

![preset styles card.webp](../../assets/screenshots/shapeof/preset-styles-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-parameters-style.jpg)

## Purpose

Preset and saved styles for tone/aesthetic reuse (Shape of AI Tuners).

## When to use

Tone/aesthetic must be reusable.

## When not to use

One-off restyles (use inline-action).

## Anatomy

Preset chips · save current · manage list

## Do / Don't

**Do:** Named presets; scope (session vs account).  
**Don't:** Invisible style that surprises later turns.

## Snippet

```tsx
export function StylePresets({ presets, active, onPick }: { presets: string[]; active: string; onPick: (p: string) => void }) {
  return <div className="flex flex-wrap gap-dense">{presets.map((p) => <button key={p} type="button" onClick={() => onPick(p)} className={`rounded-control px-control py-dense text-2xs ${active === p ? "bg-accent-muted text-accent-ink" : "text-ink-muted"}`}>{p}</button>)}</div>;
}
```
