# Prompt Enhancer

**ID:** `prompt-enhancer`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/tuners  **Related:** copilot-input, response-versions

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/prompt-enhancer)

![prompt enhancer og.png](../../assets/screenshots/shapeof/prompt-enhancer-og.png)

![prompt enhancer ex01 tuner bg.webp](../../assets/screenshots/shapeof/prompt-enhancer-ex01-tuner-bg.webp)

![prompt enhancer ex02 frame 122.png](../../assets/screenshots/shapeof/prompt-enhancer-ex02-frame-122.png)

![prompt enhancer ex03 horizontal resource claude.png](../../assets/screenshots/shapeof/prompt-enhancer-ex03-horizontal-resource-claude.png)

![prompt enhancer ex04 firefly enhance2 copy.png](../../assets/screenshots/shapeof/prompt-enhancer-ex04-firefly-enhance2-copy.png)

![prompt enhancer ex05 enhance prompt bolt.png](../../assets/screenshots/shapeof/prompt-enhancer-ex05-enhance-prompt-bolt.png)

![prompt enhancer ex06 cleanshot 2025 09 12 at 17.15.31 2x copy.png](../../assets/screenshots/shapeof/prompt-enhancer-ex06-cleanshot-2025-09-12-at-17.15.31-2x-copy.png)

![prompt enhancer ex07 frame 108.png](../../assets/screenshots/shapeof/prompt-enhancer-ex07-frame-108.png)

![prompt enhancer ex08 florafauna.png](../../assets/screenshots/shapeof/prompt-enhancer-ex08-florafauna.png)

![prompt enhancer card.webp](../../assets/screenshots/shapeof/prompt-enhancer-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-parameters-style.jpg)

## Purpose

One-click expand/improve the user prompt before send, with editable preview.

## When to use

Short prompts that need specificity before spend.

## When not to use

Already long system+user stacks.

## Anatomy

Enhance · diff preview · Replace / Insert

## Do / Don't

**Do:** Show before/after; keep original recoverable.  
**Don't:** Auto-send enhanced prompt.

## Snippet

```tsx
export function PromptEnhancer({ onEnhance }: { onEnhance: () => void }) {
  return <button type="button" onClick={onEnhance} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">Enhance prompt</button>;
}
```
