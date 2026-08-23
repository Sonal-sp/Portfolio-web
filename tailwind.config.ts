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
        cosmos: {
          950: "#020408",
          900: "#030712",
          850: "#080e1e",
          800: "#0f172a",
          700: "#1e293b",
          600: "#334155",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          glow: "rgba(245, 158, 11, 0.2)",
        },
        starlight: {
          100: "#f8fafc",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.12) 0%, rgba(3, 7, 18, 0) 70%)",
        "gold-glow": "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, rgba(3, 7, 18, 0) 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite alternate",
        "glow-orbit": "glowOrbit 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
        glowOrbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
