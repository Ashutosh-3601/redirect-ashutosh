/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#0f1524",
        lightGray: "#1c2333",
        littleBlue: "#2b3245",
        moreBlue: "#0052a7",
        darkBlue: "#0078f3",
      },
      fontFamily: {
        hack: ["Hack", "monospace"],
      },
    },
  },
  plugins: [],
}