import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080C15",
        foreground: "#F8FAFC",
        obsidian: "#080C15",
        obsidianDark: "#050811",
        cyanAccent: "#00F0FF",
        violetAccent: "#6366F1",
        cardGlass: "rgba(13, 20, 36, 0.75)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "var(--font-tamil)", "serif"],
        sans: ["var(--font-sans)", "var(--font-tamil)", "sans-serif"],
        mono: ["monospace"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px rgba(0, 240, 255, 0.25)",
        "cyan-glow-lg": "0 0 45px rgba(0, 240, 255, 0.4)",
        "violet-glow": "0 0 25px rgba(99, 102, 241, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
