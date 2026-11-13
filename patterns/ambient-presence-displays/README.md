# Ambient Presence Displays

**ID:** `ambient-presence-displays`  
**Playground:** [ambient-presence-displays](https://aiuxplayground.com/pattern/ambient-presence-displays)  **Related:** disclosure, dual-speed-layout, voice-transcript

---

## Purpose

Subtle always-on cues that AI is watching/listening/acting without stealing focus (glow, status LED, edge rail).

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
