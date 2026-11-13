# Conversation Tags

**ID:** `conversation-tags`  
**Playground:** [conversation-tags](https://aiuxplayground.com/pattern/conversation-tags)  **Related:** auto-tag, footprints, conversation-search

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-recs-code.jpg)

## Purpose

User or AI tags on threads for organization, routing, and later retrieval.

## When to use

User or AI tags on threads for organization, routing, and later retrieval.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function ThreadTags({ tags }: { tags: string[] }) {
  return <div className="flex flex-wrap gap-dense">{tags.map((t) => <span key={t} className="rounded-control bg-surface-overlay px-dense-2 py-px text-2xs text-ink-muted">{t}</span>)}</div>;
}
```
