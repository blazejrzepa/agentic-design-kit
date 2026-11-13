# Ambient Presence Displays

**ID:** `ambient-presence-displays`  
**Playground:** [ambient-presence-displays](https://aiuxplayground.com/pattern/ambient-presence-displays)  **Related:** disclosure, dual-speed-layout, voice-transcript

---

![Kit mockup](../../assets/screenshots/kit/kit-misc-chrome.jpg)

## Purpose

Subtle always-on cues that AI is watching/listening/acting without stealing focus (glow, status LED, edge rail).

## When to use

Subtle always-on cues that AI is watching/listening/acting without stealing focus (glow, status LED, edge rail).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function AmbientPresence({ active, label = "AI active" }: { active: boolean; label?: string }) {
  return (
    <div className={`pointer-events-none fixed inset-2 rounded-overlay border ${active ? "border-accent/40" : "border-transparent"}`} aria-hidden={!active}>
      {active && <span className="absolute right-panel top-panel rounded-control bg-accent-muted px-dense-2 py-px text-2xs text-accent-ink">{label}</span>}
    </div>
  );
}
```
