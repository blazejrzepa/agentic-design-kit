# Voice Cloning

**ID:** `voice-cloning`  
**Playground:** [voice-cloning](https://aiuxplayground.com/pattern/voice-cloning)  **Related:** voice-transcript, consent, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-audio-lang.jpg)

## Purpose

Consent-gated voice clone setup with sample playback and clear disclosure.

## When to use

Product offers custom TTS voices.

## When not to use

Default system voices.

## Anatomy

Consent · sample · enroll · manage/delete

## Do / Don't

**Do:** Explicit consent; easy delete.  
**Don't:** Clone without clear ownership UI.

## Snippet

```tsx
export function VoiceCloneConsent({ onAgree }: { onAgree: () => void }) {
  return <button type="button" onClick={onAgree} className="rounded-control border border-hairline px-panel py-control text-xs text-ink">I consent to clone my voice</button>;
}
```
