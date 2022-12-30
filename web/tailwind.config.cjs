/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#fb8500",
          50: "#fffbec",
          100: "#fff5d3",
          200: "#ffe8a5",
          300: "#ffd56d",
          400: "#ffb732",
          500: "#ff9f0a",
          600: "#fb8500",
          700: "#cc6302",
          800: "#a14c0b",
          900: "#82400c",
        },
        error: {
          default: "#f87171",
        },
      },
      maxWidth: {
        container: "1536px",
      },
      aria: {
        invalid: 'invalid="true"',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
