/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'home-main': '#121212',
      'nav-color': '#0F0F0F',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
    },
    extend: {
      backdropBlur: {
        xs: '1.2px',
      },
    },
  },
  plugins: [],
};
