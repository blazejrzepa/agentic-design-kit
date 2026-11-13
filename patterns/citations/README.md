# Citations

**ID:** `citations` · **Shape of AI:** Governors · [source](https://www.shapeof.ai/patterns/citations)  
**Related:** `connectors`, `footprints`, `disclosure`

![Kit mockup](../../assets/screenshots/kit/kit-citations.jpg)

![Shape of AI reference](../../assets/screenshots/shapeof/citations-og.png)

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/references)

![references og.png](../../assets/screenshots/shapeof/references-og.png)

![references ex01 gov category.png](../../assets/screenshots/shapeof/references-ex01-gov-category.png)

![references ex02 tuners_sources_bing.webp](../../assets/screenshots/shapeof/references-ex02-tuners_sources_bing.webp)

![references ex03 tuners_sources_chatgpt_tab.webp](../../assets/screenshots/shapeof/references-ex03-tuners_sources_chatgpt_tab.webp)

![references ex04 tuners_sources_chatgpt_search.webp](../../assets/screenshots/shapeof/references-ex04-tuners_sources_chatgpt_search.webp)

![references ex05 tuners_sources_chatgpt_panel.webp](../../assets/screenshots/shapeof/references-ex05-tuners_sources_chatgpt_panel.webp)

![references ex06 citations_copy.webp](../../assets/screenshots/shapeof/references-ex06-citations_copy.webp)

![references ex07 tuners_sources_dia.webp](../../assets/screenshots/shapeof/references-ex07-tuners_sources_dia.webp)

![references ex08 citations_fincopilot.webp](../../assets/screenshots/shapeof/references-ex08-citations_fincopilot.webp)

![references card.webp](../../assets/screenshots/shapeof/references-card.webp)

<!-- shapeof-captures:end -->

<!-- playground-captures:start -->
**AI UX Playground teardowns** · [hub](https://aiuxplayground.com/teardowns)

![chatgpt__citations__chatgpt__citations__inline-citation-chips.webp](../../assets/screenshots/playground/chatgpt__citations__chatgpt__citations__inline-citation-chips.webp)

![chatgpt__citations__chatgpt__citations__citation-popover.webp](../../assets/screenshots/playground/chatgpt__citations__chatgpt__citations__citation-popover.webp)

![chatgpt__citations__chatgpt__citations__multi-source-nav.webp](../../assets/screenshots/playground/chatgpt__citations__chatgpt__citations__multi-source-nav.webp)

![chatgpt__citations__chatgpt__citations__sources-sidebar.webp](../../assets/screenshots/playground/chatgpt__citations__chatgpt__citations__sources-sidebar.webp)

![compare__trust-privacy-settings__chatgpt__citations__inline-citation-chips.webp](../../assets/screenshots/playground/compare__trust-privacy-settings__chatgpt__citations__inline-citation-chips.webp)

![compare__trust-privacy-settings__perplexity__citations__inline-citation-chips.webp](../../assets/screenshots/playground/compare__trust-privacy-settings__perplexity__citations__inline-citation-chips.webp)

![perplexity__citations__perplexity__citations__inline-citation-chips.webp](../../assets/screenshots/playground/perplexity__citations__perplexity__citations__inline-citation-chips.webp)

![perplexity__citations__perplexity__citations__research-transparency.webp](../../assets/screenshots/playground/perplexity__citations__perplexity__citations__research-transparency.webp)

<!-- playground-captures:end -->

<!-- aidesign-captures:start -->
**AI Design Guide** · [Agentic UX Patterns](https://www.aidesign.guide/agentic-ux-patterns)

![citations-sources-panel_notebooklm.webp](../../assets/screenshots/external/aidesign/citations-sources-panel_notebooklm.webp)

<!-- aidesign-captures:end -->





## Source references (external)

![SaaSFrame · Front sources on suggested reply](../../assets/screenshots/external/saasframe/front-ai-suggested-reply.webp)
![SaaSFrame · Front collaborative source review](../../assets/screenshots/external/saasframe/front-collaborative-review-of-ai-reply.webp)

### Source notes (SaaSFrame Citations)

- Source list ≠ claim-level citation — name which you show.
- Place evidence access next to the content under review (Front: Sources on the draft card).
- Citations enable inspection; they do not auto-prove correctness.

## Purpose

Ground claims in sources (PDF, web, DB, transcript). Support verify-in-place (hover quote) and explore (panel with metadata).

## Forms

| Form | Use |
|------|-----|
| Inline chips `[n]` | Sentence-level claims |
| Quote preview on hover | Fast verify without leaving answer |
| Multi-source panel | Search / research aggregation |
| End links | Lightweight transparency |

## Do / Don't

**Do:** deep-link to passage/timestamp; show favicon + title; mark missing sources explicitly.  
**Don't:** fake citations; overwhelm with full URLs inline; hide broken refs.

## When to use

Ground claims in sources (PDF, web, DB, transcript).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function CitationChip({
  n,
  title,
  quote,
}: {
  n: number;
  title: string;
  quote?: string;
}) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        className="mx-px rounded-control bg-accent-muted px-dense py-px font-mono text-2xs text-accent-ink"
        aria-label={`Source ${n}: ${title}`}
      >
        {n}
      </button>
      {quote && (
        <span className="pointer-events-none absolute bottom-full left-0 z-10 mb-dense hidden w-64 rounded-control border border-hairline bg-surface-overlay p-control text-2xs text-ink-muted shadow-bar group-hover:block">
          <span className="mb-dense block font-medium text-ink">{title}</span>
          “{quote}”
        </span>
      )}
    </span>
  );
}
```
