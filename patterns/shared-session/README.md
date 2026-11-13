# Shared Session

**ID:** `shared-session`  
**Playground:** [shared-session-link](https://aiuxplayground.com/pattern/shared-session-link) · live-presence · inline-comment-thread  
**Related:** `disclosure`, `smart-diff`, `footprints`

---

![Kit mockup](../../assets/screenshots/kit/kit-shared-session.jpg)


## Source references (external)

![SaaSFrame · Claude recent chats](../../assets/screenshots/external/saasframe/claude-recent-chats.webp)
## Purpose

Share an AI session URL with **permission tiers** (view / comment / edit), expiry, and optional live presence. AI threads often contain confidential uploads — make visibility explicit.

## When to use

Share an AI session URL with **permission tiers** (view / comment / edit), expiry, and optional live presence.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function SharedSessionLink({
  url,
  permission,
  onCopy,
  onPermission,
}: {
  url: string;
  permission: "view" | "comment" | "edit";
  onCopy: () => void;
  onPermission: (p: "view" | "comment" | "edit") => void;
}) {
  return (
    <div className="flex items-center gap-control rounded-panel border border-hairline bg-surface px-panel py-control">
      <code className="min-w-0 flex-1 truncate font-mono text-2xs text-ink-muted">{url}</code>
      <select
        value={permission}
        onChange={(e) => onPermission(e.target.value as typeof permission)}
        className="rounded-control border border-hairline bg-canvas px-dense text-2xs text-ink"
      >
        <option value="view">View</option>
        <option value="comment">Comment</option>
        <option value="edit">Edit</option>
      </select>
      <button type="button" onClick={onCopy} className="text-2xs text-accent-ink">
        Copy
      </button>
    </div>
  );
}
```
