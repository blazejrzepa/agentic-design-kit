/**
 * Agentic Design Kit — Tailwind token stub
 *
 * Merge `theme.extend` into the host app's tailwind.config.
 * CSS variables can be mirrored in :root for non-Tailwind surfaces (SwiftUI bridges, etc.).
 *
 * Density doctrine: Linear / Raycast — compact controls, hairline borders, restrained chroma.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Surfaces
        canvas: "var(--adk-canvas, #0c0d0f)",
        surface: "var(--adk-surface, #12141a)",
        "surface-raised": "var(--adk-surface-raised, #181b22)",
        "surface-overlay": "var(--adk-surface-overlay, #1e222b)",
        hairline: "var(--adk-hairline, rgba(255,255,255,0.08))",
        "hairline-strong": "var(--adk-hairline-strong, rgba(255,255,255,0.14))",

        // Ink
        ink: "var(--adk-ink, #eceef2)",
        "ink-muted": "var(--adk-ink-muted, #9aa3b2)",
        "ink-faint": "var(--adk-ink-faint, #6b7380)",

        // Accents (single decisive accent — not purple marketing gradients)
        accent: "var(--adk-accent, #5b8cff)",
        "accent-muted": "var(--adk-accent-muted, rgba(91,140,255,0.16))",
        "accent-ink": "var(--adk-accent-ink, #d7e4ff)",

        // Semantic
        ok: "var(--adk-ok, #3ecf8e)",
        "ok-muted": "var(--adk-ok-muted, rgba(62,207,142,0.14))",
        warn: "var(--adk-warn, #e6b84d)",
        "warn-muted": "var(--adk-warn-muted, rgba(230,184,77,0.14))",
        danger: "var(--adk-danger, #f07178)",
        "danger-muted": "var(--adk-danger-muted, rgba(240,113,120,0.14))",

        // Diff
        "diff-add": "var(--adk-diff-add, rgba(62,207,142,0.12))",
        "diff-del": "var(--adk-diff-del, rgba(240,113,120,0.12))",
      },

      fontFamily: {
        sans: [
          "var(--adk-font-sans)",
          "ui-sans-serif",
          "Inter Variable",
          "SF Pro Text",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--adk-font-mono)",
          "ui-monospace",
          "SF Mono",
          "JetBrains Mono",
          "Menlo",
          "monospace",
        ],
      },

      fontSize: {
        // Dense type scale (px / line-height)
        "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.02em" }],
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["13px", { lineHeight: "18px" }],
        base: ["14px", { lineHeight: "20px" }],
        md: ["15px", { lineHeight: "22px" }],
        lg: ["16px", { lineHeight: "24px" }],
      },

      spacing: {
        // Named density steps (prefer these over arbitrary values)
        dense: "4px",
        "dense-2": "6px",
        control: "8px",
        "control-2": "10px",
        panel: "12px",
        section: "16px",
        "section-2": "20px",
      },

      borderRadius: {
        control: "6px",
        panel: "10px",
        overlay: "12px",
        pill: "9999px", // use sparingly — badges only, not primary chrome
      },

      boxShadow: {
        overlay:
          "0 0 0 1px var(--adk-hairline, rgba(255,255,255,0.08)), 0 16px 48px rgba(0,0,0,0.45)",
        bar: "0 0 0 1px var(--adk-hairline, rgba(255,255,255,0.08)), 0 8px 24px rgba(0,0,0,0.35)",
      },

      maxWidth: {
        intent: "640px",
        mandate: "480px",
        "dual-chat": "420px",
      },

      zIndex: {
        intent: "60",
        mandate: "70",
        toast: "80",
      },

      transitionDuration: {
        snappy: "120ms",
        soft: "180ms",
      },

      keyframes: {
        "adk-pulse-soft": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        "adk-step-in": {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-soft": "adk-pulse-soft 1.2s ease-in-out infinite",
        "step-in": "adk-step-in 160ms ease-out both",
      },
    },
  },
};

/**
 * Optional :root mirror for non-Tailwind hosts
 *
 * :root {
 *   --adk-canvas: #0c0d0f;
 *   --adk-surface: #12141a;
 *   --adk-surface-raised: #181b22;
 *   --adk-ink: #eceef2;
 *   --adk-ink-muted: #9aa3b2;
 *   --adk-accent: #5b8cff;
 *   --adk-ok: #3ecf8e;
 *   --adk-warn: #e6b84d;
 *   --adk-danger: #f07178;
 * }
 */
