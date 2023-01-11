/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: [
    ".swiper-pagination-bullet",
    "flex-center",
    "flex-start",
    "flex-end",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat,Montserrat Fallback"],
      },
      colors: {
        primary: {
          default: "#006d77",
          50: "#edffff",
          100: "#c2feff",
          200: "#84fbff",
          300: "#3ff8ff",
          400: "#08f3f9",
          500: "#00d5dc",
          600: "#00a8b2",
          700: "#00848d",
          800: "#006d77",
          900: "#06545b",
        },
        primaryLight: {
          default: "#83c5be",
          50: "#f3faf8",
          100: "#d8efeb",
          200: "#b2ddd7",
          300: "#83c5be",
          400: "#59a8a2",
          500: "#3f8d88",
          600: "#31706e",
          700: "#2a5b5a",
          800: "#254a49",
          900: "#233e3e",
        },
        secondary: {
          default: "#e29578",
          50: "#fcf6f4",
          100: "#faebe6",
          200: "#f7dbd1",
          300: "#f0c2b1",
          400: "#e29578",
          500: "#d67e5d",
          600: "#c26440",
          700: "#a25133",
          800: "#87462d",
          900: "#713e2b",
        },
        secondaryLight: {
          default: "#ffddd2",
          50: "#fef5f2",
          100: "#ffe8e1",
          200: "#ffddd2",
          300: "#feb9a3",
          400: "#fb906e",
          500: "#f26c41",
          600: "#e05022",
          700: "#bc4119",
          800: "#9b3919",
          900: "#81341b",
        },
        error: {
          default: "#f87171",
        },
        black: {
          default: "#303030",
        },
      },
      maxWidth: {
        container: "1536px",
      },
      aria: {
        invalid: 'invalid="true"',
      },
      typography: ({ theme }) => {
        const fontSize = (size) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };

        const lineHeight = (size) => {
          const result = theme(`fontSize.${size}`);

          return Array.isArray(result) ? result[1]["lineHeight"] : "1.5";
        };

        const letterSpacing = (size) => {
          const result = theme(`fontSize.${size}`);

          return Array.isArray(result) ? result[1]["letterSpacing"] : "normal";
        };
        return {
          DEFAULT: {
            css: {
              "--tw-prose-headings": theme("colors.black.default"),
              "--tw-prose-body": theme("colors.black.default"),
              h1: {
                fontWeight: 500,
                fontSize: fontSize("5xl"),
                lineHeight: lineHeight("5xl"),
                letterSpacing: letterSpacing("5xl"),
              },
              h2: {
                fontWeight: 500,
                fontSize: fontSize("4xl"),
                lineHeight: lineHeight("4xl"),
                letterSpacing: letterSpacing("4xl"),
              },
              h3: {
                fontWeight: 500,
                fontSize: fontSize("3xl"),
                lineHeight: lineHeight("3xl"),
                letterSpacing: letterSpacing("3xl"),
              },
              h4: {
                fontWeight: 500,
                fontSize: fontSize("2xl"),
                lineHeight: lineHeight("2xl"),
                letterSpacing: letterSpacing("2xl"),
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
