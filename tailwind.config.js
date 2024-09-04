/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        whiteAlpha: "rgba(255,255,255,1)",
        darkCF: "rgba(30,33,40,1);",
        coolGray: "rgba(189, 193, 202, 1)",
        darkCyan: "rgba(2,101,167,1); ",
        bgbutton: "rgba(3,101,167,1)",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
