/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out ",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(360deg)",
          },
        },
      },
      transitionProperty: {
        delay: "delay",
      },
    },
  },
  plugins: [],
};
