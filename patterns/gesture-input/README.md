# Gesture Input

**ID:** `gesture-input`  
**Playground:** [gesture-input](https://aiuxplayground.com/pattern/gesture-input)  **Related:** copilot-input, multimodal

---

![Kit mockup](../../assets/screenshots/kit/kit-variants-theme-gesture.jpg)

## Purpose

Capture gestures/strokes as AI input (canvas, AR, mobile) with clear recognition feedback.

## When to use

Capture gestures/strokes as AI input (canvas, AR, mobile) with clear recognition feedback.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function GesturePad({ hint }: { hint: string }) {
  return <div className="flex h-32 items-center justify-center rounded-panel border border-dashed border-hairline text-2xs text-ink-faint">{hint}</div>;
}
```
