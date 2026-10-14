import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: [
        "JetBrains Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "monospace",
      ],
    },
    // Tighter corners: terminal / IDE feel instead of soft pills.
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "4px",
      md: "4px",
      lg: "6px",
      xl: "6px",
      "2xl": "8px",
      full: "9999px",
    },
    extend: {
      colors: {
        // Neutral zinc replaces bluish slate; single emerald accent
        // replaces blue/purple so every existing utility retheme at once.
        slate: colors.zinc,
        blue: colors.emerald,
        purple: colors.emerald,
        accent: {
          1: "#f4f4f5",
        },
        dark: {
          1: "#09090b",
          2: "#111113",
          3: "#1e1e22",
        },
      },
    },
  },
  plugins: [],
};
