/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        products: "#3A3A3A",
        customBrown: "#B88E2F",
        customGray: "#898989",
        customGray1: "#9F9F9F",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        appear: "appear duration-1000",
      },
    },
  },
  plugins: [],
};
