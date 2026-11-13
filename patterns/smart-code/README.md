# Smart Code

**ID:** `smart-code`  
**Playground:** [smart-code](https://aiuxplayground.com/pattern/smart-code)  **Related:** artifact-pane, inline-action, smart-diff

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-recs-code.jpg)

## Purpose

Code-aware AI assists (explain, test, fix) scoped to selection with preview.

## When to use

Code-aware AI assists (explain, test, fix) scoped to selection with preview.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function SmartCodeActions({ onAction }: { onAction: (a: string) => void }) {
  return <div className="flex gap-dense">{["Explain", "Test", "Fix"].map((a) => <button key={a} type="button" onClick={() => onAction(a)} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">{a}</button>)}</div>;
}
```
