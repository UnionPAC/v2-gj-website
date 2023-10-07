/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#FAF9F5",
      black: "#050505",
      primary: "#4E6EB3",
      secondary: "#141A35",
      accent: "#9FFF8A",
    },
  },
  plugins: [],
};
