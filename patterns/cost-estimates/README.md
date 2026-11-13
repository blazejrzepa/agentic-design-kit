# Cost Estimates

**ID:** `cost-estimates` · **Shape of AI:** Governors · [source](https://www.shapeof.ai/patterns/cost-estimates)  
**Related:** `action-plan`, `mandate-approval-card` (budget slider), `controls`

![Shape of AI reference](../../assets/screenshots/shapeof/cost-estimates-og.png)

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/cost-estimates)

![cost estimates og.png](../../assets/screenshots/shapeof/cost-estimates-og.png)

![cost estimates ex01 gov category.png](../../assets/screenshots/shapeof/cost-estimates-ex01-gov-category.png)

![cost estimates ex02 cost_transparency_adobefirefly.webp](../../assets/screenshots/shapeof/cost-estimates-ex02-cost_transparency_adobefirefly.webp)

![cost estimates ex03 cost_transparency_console_gallery.webp](../../assets/screenshots/shapeof/cost-estimates-ex03-cost_transparency_console_gallery.webp)

![cost estimates ex04 cost_transparency_elevenlabs.webp](../../assets/screenshots/shapeof/cost-estimates-ex04-cost_transparency_elevenlabs.webp)

![cost estimates ex05 cost_transparency_florafauna.webp](../../assets/screenshots/shapeof/cost-estimates-ex05-cost_transparency_florafauna.webp)

![cost estimates ex06 cost_transparency_klingai.webp](../../assets/screenshots/shapeof/cost-estimates-ex06-cost_transparency_klingai.webp)

![cost estimates ex07 cost_transparency_krea.webp](../../assets/screenshots/shapeof/cost-estimates-ex07-cost_transparency_krea.webp)

![cost estimates ex08 cost_transparency_udio.webp](../../assets/screenshots/shapeof/cost-estimates-ex08-cost_transparency_udio.webp)

![cost estimates card.webp](../../assets/screenshots/shapeof/cost-estimates-card.webp)

<!-- shapeof-captures:end -->


## Source references (external)

![SaaSFrame · Dust trial message meter](../../assets/screenshots/external/saasframe/dust-chat-interface.webp)
## Purpose

Show estimated spend **where decisions are made** (prompt, model picker, plan steps). Lift the black box of metered AI usage.

## Drivers to surface

Model · context length · expected output · plan steps · tool loops · draft vs final mode

## Do / Don't

**Do:** explicit unit (credits / $ / tokens); ranges for unknowns; update live while streaming.  
**Don't:** bury estimate in settings; show $ only to non-technical users without credit mapping.

## When to use

Show estimated spend **where decisions are made** (prompt, model picker, plan steps).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function CostEstimate({
  label = "Est.",
  low,
  high,
  unit = "credits",
}: {
  label?: string;
  low: number;
  high: number;
  unit?: string;
}) {
  const text = low === high ? `${low} ${unit}` : `${low}–${high} ${unit}`;
  return (
    <span className="inline-flex items-center gap-dense font-mono text-2xs text-ink-muted">
      <span className="text-ink-faint">{label}</span>
      {text}
    </span>
  );
}
```
