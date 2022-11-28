/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Heleness: ["helenehessregular", "sans-serif"],
        kings_caslon: ["kings_caslonregular", "sans-serif"],
      },
    },
  },
  plugins: [],
}