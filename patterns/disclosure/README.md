# Disclosure

**ID:** `disclosure` · **Shape of AI:** Trust builders · [source](https://www.shapeof.ai/patterns/disclosure)  
**Related:** `footprints`, identifiers (avatar/name)

![Shape of AI reference](../../assets/screenshots/shapeof/disclosure-og.png)

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/disclosure)

![disclosure og.png](../../assets/screenshots/shapeof/disclosure-og.png)

![disclosure ex01 trust.jpg](../../assets/screenshots/shapeof/disclosure-ex01-trust.jpg)

![disclosure ex02 identifiers_name_fin.webp](../../assets/screenshots/shapeof/disclosure-ex02-identifiers_name_fin.webp)

![disclosure ex03 cleanshot 2024 02 28 at 15.10.28 2x.png](../../assets/screenshots/shapeof/disclosure-ex03-cleanshot-2024-02-28-at-15.10.28-2x.png)

![disclosure ex04 disclosure_character.webp](../../assets/screenshots/shapeof/disclosure-ex04-disclosure_character.webp)

![disclosure ex05 cleanshot 2024 05 19 at 09.01.00 2x.png](../../assets/screenshots/shapeof/disclosure-ex05-cleanshot-2024-05-19-at-09.01.00-2x.png)

![disclosure ex06 disclosure_productboard_linked.webp](../../assets/screenshots/shapeof/disclosure-ex06-disclosure_productboard_linked.webp)

![disclosure ex07 disclosure_tactiq.webp](../../assets/screenshots/shapeof/disclosure-ex07-disclosure_tactiq.webp)

![disclosure ex08 disclosure_tiktok_ai_policy.webp](../../assets/screenshots/shapeof/disclosure-ex08-disclosure_tiktok_ai_policy.webp)

![disclosure card.png](../../assets/screenshots/shapeof/disclosure-card.png)

<!-- shapeof-captures:end -->


## Source references (external)

![SaaSFrame · Front AI draft labeled Suggested reply](../../assets/screenshots/external/saasframe/front-ai-suggested-reply.webp)
## Purpose

Label AI actors and AI-authored/edited content so users never mistake bots for humans or synthetic text for human authorship (Fin “AI” badge, iA Writer opacity affordance).

## Forms

- Message sender badge (`AI` / assistant name)  
- Verb chips: `Summarized with AI`, `Rewrote with AI`  
- Synthetic media watermark / platform label  

## Do / Don't

**Do:** name the actor every time; persist badges across human handoff; allow opt-out of AI.  
**Don't:** fake human support; generic sparkle without saying what AI did.

## When to use

Label AI actors and AI-authored/edited content so users never mistake bots for humans or synthetic text for human authorship (Fin “AI” badge, iA Writer opacity affordance).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function AiDisclosureBadge({
  verb = "AI",
}: {
  verb?: string;
}) {
  return (
    <span className="inline-flex items-center rounded-control border border-hairline bg-surface-overlay px-dense-2 py-px text-2xs font-medium uppercase tracking-wide text-ink-muted">
      {verb}
    </span>
  );
}
```
