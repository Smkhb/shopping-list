/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: '#242424',
      moonlitAsteroid: {
        100: '#0F2027',
        200: '#203A43',
        300: '#2C5364'
      }
    },
    extend: {},
  },
  plugins: [],
}