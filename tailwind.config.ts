import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        "ink-soft": "#091827",
        surface: "#0b1726",
        surfaceElevated: "#111f32",
        line: "#1d334b",
        lineStrong: "#2f5272",
        cyan: "#22d3ee",
        blue: "#60a5fa",
        mint: "#2dd4bf",
        amber: "#fbbf24",
        red: "#f87171",
        violet: "#8b5cf6",
        severityCritical: "#f87171",
        severityHigh: "#fb923c",
        severityMedium: "#fbbf24",
        detection: "#8b5cf6",
        remediation: "#60a5fa",
        evidence: "#22d3ee"
      },
      fontFamily: {
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(2, 8, 23, 0.38)"
      }
    }
  },
  plugins: []
};

export default config;
