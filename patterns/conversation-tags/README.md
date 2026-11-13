# Conversation Tags

**ID:** `conversation-tags`  
**Playground:** [conversation-tags](https://aiuxplayground.com/pattern/conversation-tags)  **Related:** auto-tag, footprints, conversation-search

---

## Purpose

User or AI tags on threads for organization, routing, and later retrieval.

## Snippet

```tsx
export function ThreadTags({ tags }: { tags: string[] }) {
  return <div className="flex flex-wrap gap-dense">{tags.map((t) => <span key={t} className="rounded-control bg-surface-overlay px-dense-2 py-px text-2xs text-ink-muted">{t}</span>)}</div>;
}
```
