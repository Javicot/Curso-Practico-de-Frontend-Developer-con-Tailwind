/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./componentes/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryLightPink: "#c7c7c7",
        textInput: "#f7f7f7",
        white: "#ffffff",
        black: "#000000",
        hospitalGreen: "#acd9b2",
        hospitalGreenL: "#68c374",
      },
      screens: {
        xs: "475px",
        xxs: { max: "639px" },
      },
    },
  },
  plugins: [],
};
