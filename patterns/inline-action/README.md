# Inline Action

**ID:** `inline-action` · **Shape of AI:** Prompt actions · [source](https://www.shapeof.ai/patterns/inline-action)  
**Related:** `mandate-approval-card` (high-stakes edits), `disclosure`

![Kit mockup](../../assets/screenshots/kit/kit-inline-action.jpg)

![Shape of AI reference](../../assets/screenshots/shapeof/inline-action-og.png)

---

## Purpose

Target a selection (text, block, canvas node) with preset actions — shorten, expand, rewrite, tone, transform — without regenerating the whole document. Preview as a suggestion layer; commit only on Accept.

## Do / Don't

**Do:** scope word→block; contextual action ranking; preview before overwrite.  
**Don't:** dump 20 generic actions; silent replace of factual claims.

## When to use

Target a selection (text, block, canvas node) with preset actions — shorten, expand, rewrite, tone, transform — without regenerating the whole document.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
const DEFAULTS = ["Shorten", "Expand", "Rewrite", "Tone", "Translate"] as const;

export function InlineActionBar({
  onAction,
  onAccept,
  onReject,
  preview,
}: {
  onAction: (a: (typeof DEFAULTS)[number]) => void;
  onAccept?: () => void;
  onReject?: () => void;
  preview?: string;
}) {
  return (
    <div className="inline-flex flex-col gap-dense">
      <div className="flex gap-dense rounded-control border border-hairline bg-surface-overlay p-dense shadow-bar">
        {DEFAULTS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => onAction(a)}
            className="rounded-control px-control py-dense text-2xs text-ink-muted hover:bg-accent-muted hover:text-accent-ink"
          >
            {a}
          </button>
        ))}
      </div>
      {preview != null && (
        <div className="max-w-md rounded-control border border-hairline bg-accent-muted/40 px-panel py-control text-xs text-ink">
          {preview}
          <div className="mt-control flex gap-dense">
            <button type="button" onClick={onAccept} className="text-2xs text-ok">Accept ↵</button>
            <button type="button" onClick={onReject} className="text-2xs text-ink-faint">Reject</button>
          </div>
        </div>
      )}
    </div>
  );
}
```
