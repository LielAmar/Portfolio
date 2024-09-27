import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    "bg-frogger",
    "bg-2fa",
    "bg-voluntime",
    "bg-languagefix",
    "bg-partygames",
    "hover:bg-frogger",
    "hover:bg-2fa",
    "hover:bg-voluntime",
    "hover:bg-languagefix",
    "hover:bg-partygames",
    "group-hover:bg-frogger",
    "group-hover:bg-2fa",
    "group-hover:bg-voluntime",
    "group-hover:bg-languagefix",
    "group-hover:bg-partygames",
    "border-frogger",
    "border-2fa",
    "border-voluntime",
    "border-languagefix",
    "border-partygames",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0.25rem)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-0.25rem)",
            animationTimingFunction: "ease-in-out",
          },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "background-from": "var(--background-from)",
        "background-to": "var(--background-to)",

        "widget-bg": "var(--background-from)",

        instagram: "#F56040",
        youtube: "#FF0000",
        github: "#2b3137",
        twitter: "#1DA1F2",
        linkedin: "#0a66c2",
        spigotmc: "#FFDB3D",

        "tech-icon": "#bbf7d0",

        frogger: "#D9FFB7",
        "2fa": "#FFF8B7",
        voluntime: "#FFB7F5",
        languagefix: "#B7D8FF",
        partygames: "#FFB7B7",
      },
    },
  },
  plugins: [],
};

export default config;
