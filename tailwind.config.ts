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
        // Primary — Forest Green (from Family & Care logo)
        forest: {
          50:  "#f0f7f0",
          100: "#dceedd",
          200: "#bbdebe",
          300: "#8ec692",
          400: "#5ea865",
          500: "#3d8c44",
          600: "#2e7034",
          700: "#265a2b",
          800: "#214825",
          900: "#1c3c1f",
          950: "#0e2011",
        },
        // Secondary — Warm Earth / Ochre
        earth: {
          50:  "#fdf8ed",
          100: "#f9edd3",
          200: "#f2d9a5",
          300: "#e9bf6e",
          400: "#dfa340",
          500: "#d48a25",
          600: "#b96e1b",
          700: "#985219",
          800: "#7c421b",
          900: "#673719",
          950: "#3b1c09",
        },
        // Neutral — Warm Cream / Off-white
        cream: {
          50:  "#fdfcf8",
          100: "#f8f5ec",
          200: "#f0e9d3",
          300: "#e5d7b5",
          400: "#d5be8c",
          500: "#c4a469",
          600: "#b08d52",
          700: "#937544",
          800: "#785f3a",
          900: "#624f32",
          950: "#352918",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1c3c1f 0%, #265a2b 50%, #3d8c44 100%)",
        "earth-gradient": "linear-gradient(135deg, #3b1c09 0%, #7c421b 100%)",
        "leaf-texture": "url('/images/leaf-texture.svg')",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
