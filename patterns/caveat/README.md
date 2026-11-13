# Caveat

**ID:** `caveat`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/trust-builders  **Related:** disclosure, failure-disclosure

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/caveat)

![caveat og.png](../../assets/screenshots/shapeof/caveat-og.png)

![caveat ex01 trust.jpg](../../assets/screenshots/shapeof/caveat-ex01-trust.jpg)

![caveat ex02 caveats_adobe_pdf.webp](../../assets/screenshots/shapeof/caveat-ex02-caveats_adobe_pdf.webp)

![caveat ex03 caveats_character.webp](../../assets/screenshots/shapeof/caveat-ex03-caveats_character.webp)

![caveat ex04 caveats_github_copilot2.webp](../../assets/screenshots/shapeof/caveat-ex04-caveats_github_copilot2.webp)

![caveat ex05 caveats_notion.webp](../../assets/screenshots/shapeof/caveat-ex05-caveats_notion.webp)

![caveat card.png](../../assets/screenshots/shapeof/caveat-card.png)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-trust-consent.jpg)

## Purpose

Inform users about model/tech shortcomings or risks inline.

## When to use

Known model/domain limits affect trust.

## When not to use

Every casual message.

## Anatomy

Inline banner · link to details · dismiss optional

## Do / Don't

**Do:** Specific, actionable caveats.  
**Don't:** Generic legal wallpaper.

## Snippet

```tsx
export function CaveatBanner({ text }: { text: string }) {
  return <p className="rounded-control border border-hairline bg-surface-overlay px-control py-dense text-2xs text-ink-muted">{text}</p>;
}
```
