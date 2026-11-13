# Auto Fill

**ID:** `auto-fill`  
**Shape of AI:** https://www.shapeof.ai/  **Related:** smart-fill, clarify-before-act

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/auto-fill)

![auto fill og.png](../../assets/screenshots/shapeof/auto-fill-og.png)

![auto fill ex01 pattern action.webp](../../assets/screenshots/shapeof/auto-fill-ex01-pattern-action.webp)

![auto fill ex02 inputs_auto_fill_attio.avif](../../assets/screenshots/shapeof/auto-fill-ex02-inputs_auto_fill_attio.avif)

![auto fill ex03 inputs_auto_fill_clearfeed.avif](../../assets/screenshots/shapeof/auto-fill-ex03-inputs_auto_fill_clearfeed.avif)

![auto fill ex04 inputs_auto_fill_linear.avif](../../assets/screenshots/shapeof/auto-fill-ex04-inputs_auto_fill_linear.avif)

![auto fill ex05 inputs_auto_fill_logicgate.avif](../../assets/screenshots/shapeof/auto-fill-ex05-inputs_auto_fill_logicgate.avif)

![auto fill ex06 inputs_auto_fill_relay.avif](../../assets/screenshots/shapeof/auto-fill-ex06-inputs_auto_fill_relay.avif)

![auto fill card.webp](../../assets/screenshots/shapeof/auto-fill-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-batch-queue.jpg)

## Purpose

Extend one prompt across multiple fields/inputs at once (Shape of AI).

## When to use

One intent maps to many fields.

## When not to use

Single-field prompts.

## Anatomy

Banner count · preview diffs · Accept per field / all

## Do / Don't

**Do:** Per-field accept; show source of fill.  
**Don't:** Silent overwrite of user-typed values.

## Snippet

```tsx
export function AutoFillBanner({ count, onFill }: { count: number; onFill: () => void }) {
  return <button type="button" onClick={onFill} className="text-2xs text-accent-ink">Auto-fill {count} fields</button>;
}
```
