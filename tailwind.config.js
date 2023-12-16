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
      },
    },
  },
  plugins: [],
};
