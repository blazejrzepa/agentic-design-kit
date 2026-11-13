# Checkpoints & Restore

**ID:** `checkpoints-restore`  
**Playground:** [checkpoints-and-restore](https://aiuxplayground.com/pattern/checkpoints-and-restore)  
**Related:** `footprints`, `mandate-approval-card`, `autonomy-budget`, `smart-diff`

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-diff.jpg)

## Purpose

Named snapshots before destructive agent steps. One-click **Restore here** with a clear label of what state returns. Pairs with reversibility marking on high-blast-radius tools.

## Snippet

```tsx
type Checkpoint = { id: string; label: string; at: string };

export function CheckpointList({
  items,
  onRestore,
}: {
  items: Checkpoint[];
  onRestore: (id: string) => void;
}) {
  return (
    <ul className="divide-y divide-hairline rounded-panel border border-hairline bg-surface">
      {items.map((c) => (
        <li key={c.id} className="flex items-center gap-control px-panel py-control text-xs">
          <span className="font-mono text-2xs text-ink-faint">{c.at}</span>
          <span className="min-w-0 flex-1 truncate text-ink">{c.label}</span>
          <button
            type="button"
            onClick={() => onRestore(c.id)}
            className="shrink-0 text-2xs text-accent-ink hover:underline"
          >
            Restore
          </button>
        </li>
      ))}
    </ul>
  );
}
```
