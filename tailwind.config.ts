import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".content": {
          marginInline: "auto",
          width: "100%",
          maxWidth: "70ch",
        },
      });
    },
  ],
};

export default config;
