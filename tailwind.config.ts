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
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};
export default config;
