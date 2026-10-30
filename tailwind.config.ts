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
        ink: {
          DEFAULT: "#142D3E",
          deep: "#102A3B",
          light: "#1F4259",
        },
        teal: {
          DEFAULT: "#227F95",
          dark: "#0C5871",
          soft: "#3DAEC3",
          light: "#E6F3F5",
        },
        ivory: {
          DEFAULT: "#F8FAF9",
          warm: "#FFFDF9",
        },
        champagne: {
          DEFAULT: "#C3A375",
          light: "#EAD7B7",
        },
        muted: {
          DEFAULT: "#5D7180",
          light: "#8295A2",
          dark: "#455663",
        },
        border: {
          DEFAULT: "#DCE6E8",
          subtle: "#EBF1F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(20, 45, 62, 0.05)",
        elevated: "0 20px 45px -10px rgba(20, 45, 62, 0.08)",
        glow: "0 0 35px rgba(34, 127, 149, 0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
