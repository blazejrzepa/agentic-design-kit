# Identifiers

**ID:** `identifiers`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/identifiers  **Related:** disclosure

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/personality)

![personality og.png](../../assets/screenshots/shapeof/personality-og.png)

![personality ex01 cat indentify.webp](../../assets/screenshots/shapeof/personality-ex01-cat-indentify.webp)

![personality ex02 tell me about yourself.png](../../assets/screenshots/shapeof/personality-ex02-tell-me-about-yourself.png)

![personality ex03 personality_chatgpt_sycophanty.webp](../../assets/screenshots/shapeof/personality-ex03-personality_chatgpt_sycophanty.webp)

![personality ex04 gpqgeg beam5lvl.jpeg](../../assets/screenshots/shapeof/personality-ex04-gpqgeg-beam5lvl.jpeg)

![personality ex05 personalization eleven.png](../../assets/screenshots/shapeof/personality-ex05-personalization-eleven.png)

![personality ex06 personal.ai persona.png](../../assets/screenshots/shapeof/personality-ex06-personal.ai-persona.png)

![personality ex07 personality opke.png](../../assets/screenshots/shapeof/personality-ex07-personality-opke.png)

![personality ex08 cleanshot 2025 10 09 at 23.45.15 2x.png](../../assets/screenshots/shapeof/personality-ex08-cleanshot-2025-10-09-at-23.45.15-2x.png)

![personality card.png](../../assets/screenshots/shapeof/personality-card.png)

<!-- shapeof-captures:end -->





![Kit mockup](../../assets/screenshots/kit/kit-misc-chrome.jpg)

## Purpose

Brand-level AI identity: avatar, color, iconography, name, personality — dense, non-slop.

## When to use

Product needs a recognizable AI actor.

## When not to use

Generic utilities with no persona.

## Anatomy

Avatar · name · color/icon rules

## Do / Don't

**Do:** Consistent identity with disclosure badges.  
**Don't:** Purple AI-slop chrome or fake-human avatars in support.

## Snippet

```tsx
export function AiIdentifier({ name }: { name: string }) {
  return <div className="flex items-center gap-control"><span className="flex size-6 items-center justify-center rounded-control bg-accent-muted text-2xs text-accent-ink">AI</span><span className="text-xs font-medium text-ink">{name}</span></div>;
}
```
