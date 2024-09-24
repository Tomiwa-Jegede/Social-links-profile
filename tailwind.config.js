/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        defultGreen: "hsl(75, 94%, 57%)",
        defultWhite: "hsl(0, 0%, 100%)",
        defultGrey700: "hsl(0, 0%, 20%)",
        defultGrey800: "hsl(0, 0%, 12%)",
        defultGrey900: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        defultFont: ['"Inter", sans-serif;']
      },
    },
  },
  plugins: [],
}

