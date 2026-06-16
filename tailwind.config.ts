import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        primary: "#1e63c6",
        "primary-dark": "#1955a8",
        accent: "#22d3ee",
        "dark-navy": "#0b1d3a",
        "light-navy": "#1a3a52",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1f2937",
          },
        },
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.5)",
        "glow-lg": "0 0 50px rgba(34, 211, 238, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
