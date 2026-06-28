import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1A33",
          50: "#EEF1F6",
          100: "#D7DEEA",
          200: "#AFBED5",
          300: "#869EBF",
          400: "#5E7DAA",
          500: "#3B5C8C",
          600: "#23446F",
          700: "#162F52",
          800: "#0F2140",
          900: "#0B1A33",
          950: "#070F1F",
        },
        ivory: {
          DEFAULT: "#FAF7F0",
          50: "#FFFFFF",
          100: "#FAF7F0",
          200: "#F3EEE1",
        },
        gold: {
          DEFAULT: "#C8A24D",
          50: "#FBF6E9",
          100: "#F3E5BC",
          200: "#E9D293",
          300: "#DCBE6E",
          400: "#C8A24D",
          500: "#B08A38",
          600: "#8C6D2B",
          700: "#6A5220",
        },
        stone: {
          50: "#F8F8F7",
          100: "#F0EFEC",
          200: "#E2E0DA",
          300: "#C9C6BD",
          400: "#A8A498",
          500: "#827E72",
          600: "#605C52",
          700: "#454239",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(11, 26, 51, 0.06)",
        card: "0 8px 30px rgba(11, 26, 51, 0.08)",
        lift: "0 20px 50px rgba(11, 26, 51, 0.14)",
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
