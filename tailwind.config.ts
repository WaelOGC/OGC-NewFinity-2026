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
        brand: {
          orange: "#F97316",
          "orange-dark": "#EA580C",
          "orange-light": "#FB923C",
          bg: "#0D0D0D",
          "bg-card": "#141414",
          "bg-hover": "#1A1A1A",
          border: "#2A2A2A",
          "border-hover": "#F97316",
          text: "#FFFFFF",
          muted: "#A3A3A3",
          dim: "#525252",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Georgia", "serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
        "orange-glow":
          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(249,115,22,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        pulse2: "pulse2 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        typing: "typing 1s steps(1) infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        typing: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
