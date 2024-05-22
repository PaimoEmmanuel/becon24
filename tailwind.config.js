/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
