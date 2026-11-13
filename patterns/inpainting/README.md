# Inpainting

**ID:** `inpainting`  
**Playground:** [inpainting](https://aiuxplayground.com/pattern/inpainting)  **Shape of AI:** https://www.shapeof.ai/  **Related:** inline-action, smart-diff

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/inpainting)

![inpainting og.png](../../assets/screenshots/shapeof/inpainting-og.png)

![inpainting ex01 pattern action.webp](../../assets/screenshots/shapeof/inpainting-ex01-pattern-action.webp)

![inpainting ex02 frame 90.png](../../assets/screenshots/shapeof/inpainting-ex02-frame-90.png)

![inpainting ex03 tuners_inpainting_adobe.avif](../../assets/screenshots/shapeof/inpainting-ex03-tuners_inpainting_adobe.avif)

![inpainting ex04 tuners_inpainting_jira.jpeg](../../assets/screenshots/shapeof/inpainting-ex04-tuners_inpainting_jira.jpeg)

![inpainting ex05 tuners_inpainting_elevenlabs.avif](../../assets/screenshots/shapeof/inpainting-ex05-tuners_inpainting_elevenlabs.avif)

![inpainting ex06 tuners_inpainting_grammarly.avif](../../assets/screenshots/shapeof/inpainting-ex06-tuners_inpainting_grammarly.avif)

![inpainting ex07 tuners_inpainting_lovable.avif](../../assets/screenshots/shapeof/inpainting-ex07-tuners_inpainting_lovable.avif)

![inpainting ex08 tuners_inpainting_midjourney.avif](../../assets/screenshots/shapeof/inpainting-ex08-tuners_inpainting_midjourney.avif)

![inpainting card.webp](../../assets/screenshots/shapeof/inpainting-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-inpainting-magic.jpg)

## Purpose

Mask a region and regenerate only that area; preview before apply (Shape of AI + Playground).

## When to use

Regional image regenerate without full redo.

## When not to use

Global restyle (use style-transfer).

## Anatomy

Mask · prompt · preview · Apply

## Do / Don't

**Do:** Before/after; undo; mask visible.  
**Don't:** Invisible mask edits.

## Snippet

```tsx
export function InpaintBar({ onGenerate }: { onGenerate: () => void }) {
  return (
    <div className="flex gap-control rounded-control border border-hairline bg-surface-overlay p-dense">
      <span className="text-2xs text-ink-muted">Mask selected</span>
      <button type="button" onClick={onGenerate} className="rounded-control bg-accent px-control py-dense text-2xs text-accent-ink">Inpaint</button>
    </div>
  );
}
```
