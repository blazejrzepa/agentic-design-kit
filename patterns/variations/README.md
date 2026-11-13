# Variations

**ID:** `variations`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/governors  **Related:** response-versions, component-variants

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/variations)

![variations og.png](../../assets/screenshots/shapeof/variations-og.png)

![variations ex01 gov category.png](../../assets/screenshots/shapeof/variations-ex01-gov-category.png)

![variations ex02 cleanshot 2025 10 12 at 14.35.00 2x.png](../../assets/screenshots/shapeof/variations-ex02-cleanshot-2025-10-12-at-14.35.00-2x.png)

![variations ex03 cleanshot 2024 05 24 at 10.27.55 2x.png](../../assets/screenshots/shapeof/variations-ex03-cleanshot-2024-05-24-at-10.27.55-2x.png)

![variations ex04 file wimi9cs403.png](../../assets/screenshots/shapeof/variations-ex04-file-wimi9cs403.png)

![variations ex05 variants.png](../../assets/screenshots/shapeof/variations-ex05-variants.png)

![variations ex06 cleanshot 2024 02 26 at 22.04.25 2x p 1600.png](../../assets/screenshots/shapeof/variations-ex06-cleanshot-2024-02-26-at-22.04.25-2x-p-1600.png)

![variations ex07 flora.png](../../assets/screenshots/shapeof/variations-ex07-flora.png)

![variations ex08 grammarly.png](../../assets/screenshots/shapeof/variations-ex08-grammarly.png)

![variations card.webp](../../assets/screenshots/shapeof/variations-card.webp)

<!-- shapeof-captures:end -->


![Kit mockup](../../assets/screenshots/kit/kit-branches-variations.jpg)

## Purpose

Trace multiple result variations and choose the best (Shape of AI Governors).

## When to use

User must pick among N generations.

## When not to use

Single deterministic tools.

## Anatomy

1…N nav · compare · select winner

## Do / Don't

**Do:** Keep losers addressable briefly; mark selected.  
**Don't:** Drop non-selected forever with no undo.

## Snippet

```tsx
export function VariationsNav({ index, total, onSelect }: { index: number; total: number; onSelect: (i: number) => void }) {
  return <div className="flex gap-dense">{Array.from({ length: total }, (_, i) => <button key={i} type="button" onClick={() => onSelect(i + 1)} className={`size-6 rounded-control text-2xs ${index === i + 1 ? "bg-accent-muted text-accent-ink" : "text-ink-faint"}`}>{i + 1}</button>)}</div>;
}
```
