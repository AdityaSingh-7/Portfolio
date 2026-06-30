import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        // Professional mode - clean slate/navy
        pro: {
          bg: "#fafbfc",
          surface: "#ffffff",
          text: "#1a202c",
          muted: "#64748b",
          accent: "#2563eb",
          "accent-hover": "#1d4ed8",
          border: "#e2e8f0",
        },
        // Chaos mode - warm retro
        chaos: {
          bg: "#1a1110",
          surface: "#2d2220",
          text: "#fde8d8",
          muted: "#c4a882",
          accent: "#ff6b35",
          "accent-hover": "#ff8c5a",
          border: "#4a3728",
          neon: "#ff006e",
          purple: "#8338ec",
          yellow: "#ffbe0b",
          teal: "#06d6a0",
        },
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out",
        "grain": "grain 8s steps(10) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
          "100%": { transform: "translate(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
