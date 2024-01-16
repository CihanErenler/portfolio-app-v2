/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
    },
    extend: {
      colors: {
        accent: {
          1: "#f4f4f4",
        },
        dark: {
          1: "#02040a",
          2: "#0e1117",
          3: "#21262c",
        },
      },
    },
  },
  plugins: [],
};
