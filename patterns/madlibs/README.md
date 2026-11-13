# Madlibs

**ID:** `madlibs`  
**Shape of AI:** https://www.shapeof.ai/  **Related:** templates, copilot-input

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/madlibs)

![madlibs og.png](../../assets/screenshots/shapeof/madlibs-og.png)

![madlibs ex01 pattern action.webp](../../assets/screenshots/shapeof/madlibs-ex01-pattern-action.webp)

![madlibs ex02 workflow madlib.png](../../assets/screenshots/shapeof/madlibs-ex02-workflow-madlib.png)

![madlibs ex03 chat template.png](../../assets/screenshots/shapeof/madlibs-ex03-chat-template.png)

![madlibs ex04 inputs_madlibs_coda.avif](../../assets/screenshots/shapeof/madlibs-ex04-inputs_madlibs_coda.avif)

![madlibs ex05 inputs_madlibs_copy_ai.avif](../../assets/screenshots/shapeof/madlibs-ex05-inputs_madlibs_copy_ai.avif)

![madlibs ex06 inputs_madlibs_concept.avif](../../assets/screenshots/shapeof/madlibs-ex06-inputs_madlibs_concept.avif)

![madlibs ex07 inputs_madlibs_jasper.avif](../../assets/screenshots/shapeof/madlibs-ex07-inputs_madlibs_jasper.avif)

![madlibs ex08 relay.png](../../assets/screenshots/shapeof/madlibs-ex08-relay.png)

![madlibs card.webp](../../assets/screenshots/shapeof/madlibs-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-madlibs-templates.jpg)

## Purpose

Slot-based generative forms that preserve format/accuracy across runs.

## When to use

Format must stay fixed across runs.

## When not to use

Freeform creative chat.

## Anatomy

Sentence with slots · validate · Generate

## Do / Don't

**Do:** Inline slots; preserve skeleton.  
**Don't:** Break format silently on regenerate.

## Snippet

```tsx
export function MadlibSlot({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return <label className="inline-flex items-center gap-dense text-xs text-ink">{label}<input value={value} onChange={(e) => onChange(e.target.value)} className="h-7 w-28 border-b border-hairline bg-transparent px-dense outline-none" /></label>;
}
```
