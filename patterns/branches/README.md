# Branches

**ID:** `branches`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/governors  **Related:** footprints, response-versions, thread-branch

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/branches)

![branches og.png](../../assets/screenshots/shapeof/branches-og.png)

![branches ex01 gov category.png](../../assets/screenshots/shapeof/branches-ex01-gov-category.png)

![branches ex02 firefly.png](../../assets/screenshots/shapeof/branches-ex02-firefly.png)

![branches ex03 character.png](../../assets/screenshots/shapeof/branches-ex03-character.png)

![branches ex04 openai.png](../../assets/screenshots/shapeof/branches-ex04-openai.png)

![branches ex05 branch_flora.webp](../../assets/screenshots/shapeof/branches-ex05-branch_flora.webp)

![branches ex06 chained_action_rivet3.webp](../../assets/screenshots/shapeof/branches-ex06-chained_action_rivet3.webp)

![branches ex07 typing mind branch.png](../../assets/screenshots/shapeof/branches-ex07-typing-mind-branch.png)

![branches card.webp](../../assets/screenshots/shapeof/branches-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-branches-variations.jpg)

## Purpose

Iterative prompting with retained footprints back to the original (Shape of AI Governors).

## When to use

Explore alternate paths without losing the trunk.

## When not to use

Linear FAQ bots.

## Anatomy

Branch chip · tree / list · jump to node

## Do / Don't

**Do:** Keep footprints; label branch intent.  
**Don't:** Fork silently on every regenerate.

## Snippet

```tsx
export function BranchChip({ label, onOpen }: { label: string; onOpen: () => void }) {
  return <button type="button" onClick={onOpen} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">Branch · {label}</button>;
}
```
