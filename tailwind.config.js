const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['SkyTextMedium', 'Roboto', '-apple-system', 'BlinkMacSystemFont'],
    },
    extend: {
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
