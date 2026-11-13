# Describe

**ID:** `describe`  
**Shape of AI:** https://www.shapeof.ai/  **Related:** streaming-thought-state, suggestions

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/describe)

![describe og.png](../../assets/screenshots/shapeof/describe-og.png)

![describe ex01 pattern action.webp](../../assets/screenshots/shapeof/describe-ex01-pattern-action.webp)

![describe ex02 frame 121.png](../../assets/screenshots/shapeof/describe-ex02-frame-121.png)

![describe ex03 decompose_openai.webp](../../assets/screenshots/shapeof/describe-ex03-decompose_openai.webp)

![describe ex04 decompose_chatgpt.webp](../../assets/screenshots/shapeof/describe-ex04-decompose_chatgpt.webp)

![describe ex05 decompose_ideogram.webp](../../assets/screenshots/shapeof/describe-ex05-decompose_ideogram.webp)

![describe ex06 decompose_leonardo.webp](../../assets/screenshots/shapeof/describe-ex06-decompose_leonardo.webp)

![describe ex07 decompose_midjourney2.webp](../../assets/screenshots/shapeof/describe-ex07-decompose_midjourney2.webp)

![describe card.webp](../../assets/screenshots/shapeof/describe-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-auth-describe-analytics.jpg)

## Purpose

Decompose content into fundamental tokens/suggested prompt structure.

## When to use

User needs structure extracted from messy content.

## When not to use

Already-structured schemas.

## Anatomy

Token/chip decomposition · optional reassemble prompt

## Do / Don't

**Do:** Editable tokens; link back to source spans.  
**Don't:** Black-box rewrite with no tokens visible.

## Snippet

```tsx
export function DescribeTokens({ tokens }: { tokens: string[] }) {
  return <div className="flex flex-wrap gap-dense">{tokens.map((t) => <span key={t} className="rounded-control bg-surface-overlay px-dense-2 py-px font-mono text-2xs text-ink-muted">{t}</span>)}</div>;
}
```
