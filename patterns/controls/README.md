# Controls

**ID:** `controls` · **Shape of AI:** Governors · [source](https://www.shapeof.ai/patterns/controls)  
**Related:** `streaming-thought-state`, `action-plan`, `cost-estimates`

![Shape of AI reference](../../assets/screenshots/shapeof/controls-og.png)

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/controls)

![controls og.png](../../assets/screenshots/shapeof/controls-og.png)

![controls ex01 gov category.png](../../assets/screenshots/shapeof/controls-ex01-gov-category.png)

![controls ex02 controls_bolt.webp](../../assets/screenshots/shapeof/controls-ex02-controls_bolt.webp)

![controls ex03 controls_chatgpt_running.webp](../../assets/screenshots/shapeof/controls-ex03-controls_chatgpt_running.webp)

![controls ex04 controls_claude.webp](../../assets/screenshots/shapeof/controls-ex04-controls_claude.webp)

![controls ex05 controls_julius.webp](../../assets/screenshots/shapeof/controls-ex05-controls_julius.webp)

![controls ex06 controls_perplexity.webp](../../assets/screenshots/shapeof/controls-ex06-controls_perplexity.webp)

![controls ex07 controls_cleanshot_2025 09 20_at_11_32_02_2x_copy.webp](../../assets/screenshots/shapeof/controls-ex07-controls_cleanshot_2025-09-20_at_11_32_02_2x_copy.webp)

![controls ex08 controls_replit_queue_2.webp](../../assets/screenshots/shapeof/controls-ex08-controls_replit_queue_2.webp)

![controls card.webp](../../assets/screenshots/shapeof/controls-card.webp)

<!-- shapeof-captures:end -->


## Source references (external)

![SaaSFrame · Profound generation wait](../../assets/screenshots/external/saasframe/profound-loading-screen.webp)
## Purpose

Keep the human in the driver’s seat during generation: **Stop**, **Pause/Resume**, **Queue** next tasks without canceling current work (Cursor / Replit pattern).

## Anatomy

| Control | Semantics |
|---------|-----------|
| Stop | Abort; work may be partial/lost |
| Pause | Freeze progress; resumable |
| Queue | Append tasks to plan while running |
| Fast-forward / continue | Confirm long chains |

## Do / Don't

**Do:** fixed Stop position; graceful pause; queue editable.  
**Don't:** hide Stop during stream; regenerate by overwriting without versioning.

## When to use

Keep the human in the driver’s seat during generation: **Stop**, **Pause/Resume**, **Queue** next tasks without canceling current work (Cursor / Replit pattern).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function RunControls({
  running,
  paused,
  queueCount,
  onStop,
  onPause,
  onResume,
}: {
  running: boolean;
  paused: boolean;
  queueCount: number;
  onStop: () => void;
  onPause: () => void;
  onResume: () => void;
}) {
  if (!running && !paused) return null;
  return (
    <div className="flex items-center gap-dense-2">
      <button type="button" onClick={onStop} className="rounded-control px-control py-dense text-2xs text-danger hover:bg-danger-muted">
        Stop
      </button>
      <button
        type="button"
        onClick={paused ? onResume : onPause}
        className="rounded-control px-control py-dense text-2xs text-ink-muted hover:bg-surface-overlay"
      >
        {paused ? "Resume" : "Pause"}
      </button>
      {queueCount > 0 && (
        <span className="font-mono text-2xs text-ink-faint">queue {queueCount}</span>
      )}
    </div>
  );
}
```
