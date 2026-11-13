# Footprints

**ID:** `footprints` · **Shape of AI:** Trust builders · [source](https://www.shapeof.ai/patterns/footprints)  
**Related:** `streaming-thought-state`, `citations`, `action-plan`, `disclosure`

![Shape of AI reference](../../assets/screenshots/shapeof/footprints-og.png)

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/footprints)

![footprints og.png](../../assets/screenshots/shapeof/footprints-og.png)

![footprints ex01 trust.jpg](../../assets/screenshots/shapeof/footprints-ex01-trust.jpg)

![footprints ex02 cleanshot 2024 05 27 at 16.57.29 2x.png](../../assets/screenshots/shapeof/footprints-ex02-cleanshot-2024-05-27-at-16.57.29-2x.png)

![footprints ex03 footprints_bolt.webp](../../assets/screenshots/shapeof/footprints-ex03-footprints_bolt.webp)

![footprints ex04 footprints_chatgpt.webp](../../assets/screenshots/shapeof/footprints-ex04-footprints_chatgpt.webp)

![footprints ex05 footprints_chatgptagent.webp](../../assets/screenshots/shapeof/footprints-ex05-footprints_chatgptagent.webp)

![footprints ex06 footprints_flora.webp](../../assets/screenshots/shapeof/footprints-ex06-footprints_flora.webp)

![footprints ex07 footprints_firefly.webp](../../assets/screenshots/shapeof/footprints-ex07-footprints_firefly.webp)

![footprints ex08 footprints_midjourney.webp](../../assets/screenshots/shapeof/footprints-ex08-footprints_midjourney.webp)

![footprints card.png](../../assets/screenshots/shapeof/footprints-card.png)

<!-- shapeof-captures:end -->

## Purpose

Visible + machine-readable trail of how AI participated: prompts, params, tools, sources, approvals, model version. Enables **branch / replay** (generative) and **audit** (verifying).

## Layers

| Layer | Examples |
|-------|----------|
| Interface | Badges, expandable panels, “reuse prompt” |
| System | Logs: model, safety mode, cost, latency, approvals |
| Media | Content credentials / watermarks on export |

## Do / Don't

**Do:** one-click replay into composer; consistent affordances; retention controls.  
**Don't:** strip provenance on export without notice; leak sensitive metadata publicly.

## When to use

Visible + machine-readable trail of how AI participated: prompts, params, tools, sources, approvals, model version.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
type Footprint = {
  id: string;
  at: string;
  summary: string;
  prompt?: string;
};

export function FootprintRow({
  item,
  onReplay,
}: {
  item: Footprint;
  onReplay: (prompt: string) => void;
}) {
  return (
    <div className="flex items-center gap-control border-b border-hairline py-control text-xs">
      <time className="w-16 shrink-0 font-mono text-2xs text-ink-faint">{item.at}</time>
      <span className="min-w-0 flex-1 truncate text-ink-muted">{item.summary}</span>
      {item.prompt && (
        <button
          type="button"
          onClick={() => onReplay(item.prompt!)}
          className="shrink-0 text-2xs text-accent-ink hover:underline"
        >
          Replay
        </button>
      )}
    </div>
  );
}
```
