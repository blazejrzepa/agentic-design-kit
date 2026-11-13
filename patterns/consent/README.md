# Consent

**ID:** `consent`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/trust-builders  **Related:** disclosure, voice-cloning, connectors

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/consent)

![consent og.png](../../assets/screenshots/shapeof/consent-og.png)

![consent ex01 trust.jpg](../../assets/screenshots/shapeof/consent-ex01-trust.jpg)

![consent ex02 cleanshot 2025 09 01 at 13.33.36 2x.png](../../assets/screenshots/shapeof/consent-ex02-cleanshot-2025-09-01-at-13.33.36-2x.png)

![consent ex03 fireflies.webp](../../assets/screenshots/shapeof/consent-ex03-fireflies.webp)

![consent ex04 gong.webp](../../assets/screenshots/shapeof/consent-ex04-gong.webp)

![consent ex05 cleanshot 2025 08 31 at 13.56.56 2x.png](../../assets/screenshots/shapeof/consent-ex05-cleanshot-2025-08-31-at-13.56.56-2x.png)

![consent ex06 limitless.webp](../../assets/screenshots/shapeof/consent-ex06-limitless.webp)

![consent ex07 notion consent.png](../../assets/screenshots/shapeof/consent-ex07-notion-consent.png)

![consent card.webp](../../assets/screenshots/shapeof/consent-card.webp)

<!-- shapeof-captures:end -->

<!-- aidesign-captures:start -->
**AI Design Guide** · [Agentic UX Patterns](https://www.aidesign.guide/agentic-ux-patterns)

![agent-behavior-settings_clay.webp](../../assets/screenshots/external/aidesign/agent-behavior-settings_clay.webp)

![agent-consent-screen-view_quicken.webp](../../assets/screenshots/external/aidesign/agent-consent-screen-view_quicken.webp)

<!-- aidesign-captures:end -->


![Kit mockup](../../assets/screenshots/kit/kit-trust-consent.jpg)

## Purpose

Capture informed permission before recording, training, or processing others’ data.

## When to use

Recording, training, or third-party data capture.

## When not to use

Ordinary prompt sends already covered by ToS.

## Anatomy

Plain-language ask · Agree · decline path

## Do / Don't

**Do:** Name what is stored and for how long.  
**Don't:** Pre-checked consent buried in settings.

## Snippet

```tsx
export function ConsentGate({ text, onAccept }: { text: string; onAccept: () => void }) {
  return (
    <div className="rounded-panel border border-hairline p-panel text-xs">
      <p className="text-ink-muted">{text}</p>
      <button type="button" onClick={onAccept} className="mt-control rounded-control bg-accent px-panel py-control-2 text-accent-ink">I agree</button>
    </div>
  );
}
```
