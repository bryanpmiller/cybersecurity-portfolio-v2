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
        ink: "#080b3f",
        "ink-soft": "#f8fcff",
        surface: "#ffffff",
        surfaceElevated: "#f6fbfe",
        line: "#d8e8f5",
        lineStrong: "#4a8bdf",
        cyan: "#4a8bdf",
        blue: "#4a8bdf",
        mint: "#2c7fba",
        amber: "#6c72b8",
        red: "#a0006d",
        violet: "#a0006d",
        severityCritical: "#a0006d",
        severityHigh: "#6d4fb0",
        severityMedium: "#4a8bdf",
        detection: "#243b8f",
        remediation: "#2c7fba",
        evidence: "#243b8f",
        slate: {
          50: "#080b3f",
          100: "#11164f",
          200: "#1f2c68",
          300: "#33415f",
          400: "#526078",
          500: "#677489",
          600: "#4d5a70",
          700: "#39465b",
          800: "#253145",
          900: "#111936",
          950: "#080b3f"
        }
      },
      fontFamily: {
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        soft: "0 18px 42px rgba(8, 11, 63, 0.08)",
        raised: "0 24px 60px rgba(8, 11, 63, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
