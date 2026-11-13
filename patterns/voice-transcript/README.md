# Voice Transcript

**ID:** `voice-transcript`  
**Playground:** [live-transcript](https://aiuxplayground.com/pattern/live-transcript) · voice-visualizer · interruptibility · voice-commands  
**Related:** `controls`, `copilot-input`, `mandate-approval-card`

---

<!-- playground-captures:start -->
**AI UX Playground teardowns** · [hub](https://aiuxplayground.com/teardowns)

![ai-meeting-notes__granola__meeting-notes__notepad-first.png](../../assets/screenshots/playground/ai-meeting-notes__granola__meeting-notes__notepad-first.png)

![ai-meeting-notes__granola__meeting-notes__no-bot-pill.webp](../../assets/screenshots/playground/ai-meeting-notes__granola__meeting-notes__no-bot-pill.webp)

![ai-meeting-notes__granola__meeting-notes__what-it-is.png](../../assets/screenshots/playground/ai-meeting-notes__granola__meeting-notes__what-it-is.png)

![granola__meeting-notes__granola__meeting-notes__what-it-is.png](../../assets/screenshots/playground/granola__meeting-notes__granola__meeting-notes__what-it-is.png)

![granola__meeting-notes__granola__meeting-notes__android-notes.png](../../assets/screenshots/playground/granola__meeting-notes__granola__meeting-notes__android-notes.png)

![granola__meeting-notes__granola__meeting-notes__no-bot-pill.webp](../../assets/screenshots/playground/granola__meeting-notes__granola__meeting-notes__no-bot-pill.webp)

![granola__meeting-notes__granola__meeting-notes__no-bot-humans.webp](../../assets/screenshots/playground/granola__meeting-notes__granola__meeting-notes__no-bot-humans.webp)

![granola__meeting-notes__granola__meeting-notes__notepad-first.png](../../assets/screenshots/playground/granola__meeting-notes__granola__meeting-notes__notepad-first.png)

<!-- playground-captures:end -->

<!-- aidesign-captures:start -->
**AI Design Guide** · [Agentic UX Patterns](https://www.aidesign.guide/agentic-ux-patterns)

![voice-mode-live-transcript_meta-ai-ios.webp](../../assets/screenshots/external/aidesign/voice-mode-live-transcript_meta-ai-ios.webp)

![voice-mode-orb_chatgpt-ios.webp](../../assets/screenshots/external/aidesign/voice-mode-orb_chatgpt-ios.webp)

<!-- aidesign-captures:end -->


![Kit mockup](../../assets/screenshots/kit/kit-voice-transcript.jpg)


## Source references (external)

![SaaSFrame · Hume AI TTS playground](../../assets/screenshots/external/saasframe/hume-ai-text-to-speech-playground.webp)

### Source notes

- Voice / TTS playgrounds still need Stop + live transcript; keep modality controls next to the composer.

## Purpose

Show **listening / processing / speaking** state with a live transcript and a single barge-in control. Confirm destructive voice commands; always offer text fallback.

## When to use

Show **listening / processing / speaking** state with a live transcript and a single barge-in control.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function VoiceTranscript({
  state,
  lines,
  onStop,
}: {
  state: "listening" | "processing" | "speaking";
  lines: string[];
  onStop: () => void;
}) {
  return (
    <section className="rounded-panel border border-hairline bg-surface">
      <header className="flex h-8 items-center justify-between px-panel">
        <span className="text-2xs uppercase tracking-wide text-ink-faint">{state}</span>
        <button type="button" onClick={onStop} className="text-2xs text-danger">
          Stop
        </button>
      </header>
      <div className="max-h-40 overflow-auto border-t border-hairline px-panel py-control text-xs text-ink">
        {lines.map((l, i) => (
          <p key={i} className="py-dense">
            {l}
          </p>
        ))}
      </div>
    </section>
  );
}
```
