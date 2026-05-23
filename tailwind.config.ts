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
        ink: "#080a0f",
        "ink-soft": "#0d111a",
        surface: "#111722",
        surfaceElevated: "#182131",
        line: "#2a3342",
        lineStrong: "#435166",
        cyan: "#6ee7d8",
        blue: "#8ab4f8",
        mint: "#7dd3c7",
        amber: "#f6c177",
        red: "#ff8a8a",
        violet: "#a78bfa",
        severityCritical: "#ff8a8a",
        severityHigh: "#f59e6c",
        severityMedium: "#f6c177",
        detection: "#a78bfa",
        remediation: "#8ab4f8",
        evidence: "#6ee7d8"
      },
      fontFamily: {
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
