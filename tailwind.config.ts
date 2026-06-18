import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef6ff",
          100: "#d9ebff",
          500: "#0c4174",
          700: "#092f56",
          900: "#06213d",
        },
        mint: {
          50: "#ecfff8",
          100: "#d3ffef",
          500: "#04c984",
          600: "#00a96d",
        },
        surface: "#f4f8fc",
        ink: "#172033",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(6, 33, 61, 0.08)",
        card: "0 14px 40px rgba(6, 33, 61, 0.09)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
