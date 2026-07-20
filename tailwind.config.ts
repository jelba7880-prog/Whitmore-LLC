import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        "navy-mid": "#1B2E44",
        "navy-light": "#2C4A6E",
        // Tonal navy variants — one per homepage section that previously
        // shared navy-mid identically. See docs/design-tokens.md.
        "navy-hero": "#081522",
        "navy-deep": "#162B45",
        "navy-industry": "#20344D",
        gold: "#C9A84C",
        "gold-light": "#E8C97A",
        cream: "#F8F5EE",
        parchment: "#EDE8DF",
        "cream-light": "#FCFAF6",
        ink: "#1A1A2E",
        // `muted` is aliased to `muted-on-dark` — the original #6B7A8D was tuned
        // for dark backgrounds but failed WCAG AA (~3.1:1) when reused on the
        // light parchment/cream surfaces. Use `muted-on-light` on light
        // backgrounds and `muted-on-dark` on navy/navy-mid. See docs/design-tokens.md.
        muted: "#9CAFC0",
        "muted-on-light": "#5A6472",
        "muted-on-dark": "#9CAFC0",
        // Warm-neutral border replacing navy-light where navy-light was used
        // as a border color (not a fill/divider) — avoids a blue-tinted
        // border on parchment/cream card surfaces.
        "border-warm": "#DDD3C0",
      },
      fontFamily: {
        display: ["var(--font-display)", '"Cormorant Garamond"', "Georgia", "serif"],
        body: ["var(--font-body)", '"Source Serif 4"', "Georgia", "serif"],
        ui: ["var(--font-ui)", "Jost", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Centralized type-scale tokens (see docs/design-tokens.md → Type Scale).
        // font-weight stays a separate `font-bold` class at each usage site.
        //
        // Sizes use clamp(min, preferred, max) so headings scale down on small
        // screens. The `max` of each clamp equals the canonical desktop px value
        // from design-tokens.md, so desktop (≥ the preferred/vw crossover) renders
        // pixel-identically; only mobile/tablet shrink. Line-height/tracking are
        // unchanged.
        display: ["clamp(2.75rem, 8vw, 80px)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.25rem, 6.5vw, 64px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1-hero": ["clamp(2.5rem, 8vw, 72px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h1-legal": ["clamp(2rem, 5.5vw, 44px)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h1-blog": ["clamp(2rem, 5.5vw, 46px)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["clamp(2rem, 6vw, 56px)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h2-legal": ["28px", { lineHeight: "1.3", letterSpacing: "0" }],
        "h2-blog-card": ["clamp(1.6rem, 4.5vw, 36px)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3-blog-card": ["22px", { lineHeight: "1.25", letterSpacing: "0" }],
      },
      borderRadius: {
        DEFAULT: '0px',
        full: '9999px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
