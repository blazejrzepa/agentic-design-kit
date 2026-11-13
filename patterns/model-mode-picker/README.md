# Model & Mode Picker

**ID:** `model-mode-picker`  
**Teardowns:** [Model & mode selection](https://aiuxplayground.com/teardowns/compare/model-mode-selection) · [Composer](https://aiuxplayground.com/teardowns/compare/design-the-composer)  
**Related:** `copilot-input`, `cost-estimates`, `controls`

![Kit mockup](../../assets/screenshots/kit/kit-model-mode-picker.jpg)

---


## Source references (external)

![SaaSFrame · Claude model in composer](../../assets/screenshots/external/saasframe/claude-new-chat.webp)
![SaaSFrame · OpenAI Playground chat](../../assets/screenshots/external/saasframe/openai-playground-chat.webp)
## Purpose

Let users choose **model tier**, **effort/depth**, and **mode** before send — without forcing raw model IDs as the only language. Show spend/latency tradeoffs at the moment of choice.

## Kit default (Claude-leaning)

- Outcome label + version subtext (`Everyday · Sonnet`)  
- Effort Low→Max with plain-language tradeoffs  
- Upgrade locks **inline** with workhorse rows (not a disconnected banner)  
- Same picker path every message  

## Anti-patterns (from teardowns)

- Bar nickname ≠ picker names (Gemini split naming)  
- Menu that is mostly paywall locks (Perplexity Orchestrator free)  
- Hiding limits until after send  

## When to use

Let users choose **model tier**, **effort/depth**, and **mode** before send — without forcing raw model IDs as the only language.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
type Tier = {
  id: string;
  outcome: string;
  version: string;
  locked?: boolean;
};

export function ModelModePicker({
  tiers,
  effort,
  onTier,
  onEffort,
}: {
  tiers: Tier[];
  effort: "low" | "medium" | "high" | "max";
  onTier: (id: string) => void;
  onEffort: (e: "low" | "medium" | "high" | "max") => void;
}) {
  return (
    <div className="w-72 overflow-hidden rounded-panel border border-hairline bg-surface-overlay shadow-bar">
      <ul className="py-dense">
        {tiers.map((t) => (
          <li key={t.id}>
            <button
              type="button"
              disabled={t.locked}
              onClick={() => onTier(t.id)}
              className="flex w-full items-baseline justify-between gap-control px-panel py-control text-left disabled:opacity-40"
            >
              <span className="text-xs text-ink">{t.outcome}</span>
              <span className="font-mono text-2xs text-ink-faint">{t.version}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t border-hairline px-panel py-control">
        <p className="mb-dense text-2xs text-ink-faint">Effort</p>
        <div className="flex gap-dense">
          {(["low", "medium", "high", "max"] as const).map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => onEffort(e)}
              className={`rounded-control px-control py-dense text-2xs capitalize ${
                effort === e ? "bg-accent-muted text-accent-ink" : "text-ink-muted"
              }`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
```
