import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        card: "#141414",
        "card-hover": "#1A1A1A",
        accent: {
          DEFAULT: "#F7931E",
          hover: "#FA9D2E",
          glow: "rgba(247, 147, 30, 0.25)",
          muted: "rgba(247, 147, 30, 0.12)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(247, 147, 30, 0.35)",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        "glow-orange": "0 0 35px -5px rgba(247, 147, 30, 0.3)",
        "glow-card": "0 0 25px -5px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
