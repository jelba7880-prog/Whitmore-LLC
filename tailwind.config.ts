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
        gold: "#C9A84C",
        "gold-light": "#E8C97A",
        cream: "#F8F5EE",
        parchment: "#EDE8DF",
        ink: "#1A1A2E",
        muted: "#6B7A8D",
      },
      fontFamily: {
        display: ["var(--font-display)", '"Cormorant Garamond"', "Georgia", "serif"],
        body: ["var(--font-body)", '"Source Serif 4"', "Georgia", "serif"],
        ui: ["var(--font-ui)", "Jost", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Centralized type-scale tokens (see docs/design-tokens.md → Type Scale).
        // font-weight stays a separate `font-bold` class at each usage site.
        display: ["80px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        h1: ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1-hero": ["72px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h1-legal": ["44px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h1-blog": ["46px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["56px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h2-legal": ["28px", { lineHeight: "1.3", letterSpacing: "0" }],
        "h2-blog-card": ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
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
