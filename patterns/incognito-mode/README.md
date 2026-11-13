# Incognito Mode

**ID:** `incognito-mode`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/trust-builders  **Related:** memory-personalization, disclosure

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/incognito-mode)

![incognito mode og.png](../../assets/screenshots/shapeof/incognito-mode-og.png)

![incognito mode ex01 trust.jpg](../../assets/screenshots/shapeof/incognito-mode-ex01-trust.jpg)

![incognito mode ex02 incognito_chatgpt.webp](../../assets/screenshots/shapeof/incognito-mode-ex02-incognito_chatgpt.webp)

![incognito mode ex03 incognito_dia.webp](../../assets/screenshots/shapeof/incognito-mode-ex03-incognito_dia.webp)

![incognito mode ex04 incognito_google.webp](../../assets/screenshots/shapeof/incognito-mode-ex04-incognito_google.webp)

![incognito mode ex05 incognito_perplexity.webp](../../assets/screenshots/shapeof/incognito-mode-ex05-incognito_perplexity.webp)

![incognito mode ex06 incognito_perplexity2.webp](../../assets/screenshots/shapeof/incognito-mode-ex06-incognito_perplexity2.webp)

![incognito mode card.webp](../../assets/screenshots/shapeof/incognito-mode-card.webp)

<!-- shapeof-captures:end -->

![Kit mockup](../../assets/screenshots/kit/kit-trust-consent.jpg)

## Purpose

Interact with AI outside of memory — clear toggle and session badge.

## When to use

User needs a turn outside memory.

## When not to use

Default for all enterprise threads without policy.

## Anatomy

Toggle · session badge · what is excluded

## Do / Don't

**Do:** Visible badge while on; clear what still logs.  
**Don't:** Silent memory writes in incognito.

## Snippet

```tsx
export function IncognitoToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return <button type="button" onClick={onToggle} className={`rounded-control px-control py-dense text-2xs ${on ? "bg-warn-muted text-warn" : "text-ink-muted"}`}>{on ? "Incognito on" : "Incognito"}</button>;
}
```
