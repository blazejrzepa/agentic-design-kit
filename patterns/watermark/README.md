# Watermark

**ID:** `watermark`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/trust-builders  **Related:** disclosure, footprints

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/watermark)

![watermark og.png](../../assets/screenshots/shapeof/watermark-og.png)

![watermark ex01 trust.jpg](../../assets/screenshots/shapeof/watermark-ex01-trust.jpg)

![watermark ex02 cleanshot 2024 06 29 at 16.47.01 2x 1.png](../../assets/screenshots/shapeof/watermark-ex02-cleanshot-2024-06-29-at-16.47.01-2x-1.png)

![watermark ex03 ai nutrition label 1 p 1600.webp](../../assets/screenshots/shapeof/watermark-ex03-ai-nutrition-label-1-p-1600.webp)

![watermark ex04 tiktok ai label.webp](../../assets/screenshots/shapeof/watermark-ex04-tiktok-ai-label.webp)

![watermark ex05 aiux footprints trust.png](../../assets/screenshots/shapeof/watermark-ex05-aiux-footprints-trust.png)

![watermark ex06 watermark shuttstock.png](../../assets/screenshots/shapeof/watermark-ex06-watermark-shuttstock.png)

![watermark ex07 cleanshot 2024 06 29 at 16.27.37 2x.png](../../assets/screenshots/shapeof/watermark-ex07-cleanshot-2024-06-29-at-16.27.37-2x.png)

![watermark card.webp](../../assets/screenshots/shapeof/watermark-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-trust-consent.jpg)

## Purpose

Human/machine-readable identifiers on AI-generated media at export.

## When to use

Exporting synthetic media that could be mistaken as real.

## When not to use

Internal drafts never leaving the tool.

## Anatomy

Export toggle · visible + metadata mark

## Do / Don't

**Do:** Persist in file metadata; say so in UI.  
**Don't:** Easy strip without warning.

## Snippet

```tsx
export function WatermarkToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return <label className="flex items-center gap-dense text-2xs text-ink-muted"><input type="checkbox" checked={on} onChange={onToggle} /> Watermark exports</label>;
}
```
