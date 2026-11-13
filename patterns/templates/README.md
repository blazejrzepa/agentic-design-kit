# Templates

**ID:** `templates`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/wayfinders  **Related:** suggestions, madlibs, copilot-input

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/templates)

![templates og.png](../../assets/screenshots/shapeof/templates-og.png)

![templates ex01 coda template.jpeg](../../assets/screenshots/shapeof/templates-ex01-coda-template.jpeg)

![templates ex02 62ab3353dc11277708b39deb_jasper repetitive content.png](../../assets/screenshots/shapeof/templates-ex02-62ab3353dc11277708b39deb_jasper-repetitive-content.png)

![templates ex03 writer.png](../../assets/screenshots/shapeof/templates-ex03-writer.png)

![templates ex04 cleanshot 2024 02 28 at 13.09.01 2x.png](../../assets/screenshots/shapeof/templates-ex04-cleanshot-2024-02-28-at-13.09.01-2x.png)

![templates card.webp](../../assets/screenshots/shapeof/templates-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-madlibs-templates.jpg)

## Purpose

Structured prompt templates fillable by user or pre-filled by AI (Madlibs-adjacent).

## When to use

Repeatable jobs with known slots (briefs, tickets, emails).

## When not to use

Open-ended research chat.

## Anatomy

Template list · slots · Apply to composer

## Do / Don't

**Do:** Name the outcome; prefill smart defaults.  
**Don't:** Huge forms disguised as templates.

## Snippet

```tsx
export function TemplateCard({ name, onUse }: { name: string; onUse: () => void }) {
  return <button type="button" onClick={onUse} className="rounded-panel border border-hairline px-panel py-control text-left text-xs text-ink">{name}</button>;
}
```
