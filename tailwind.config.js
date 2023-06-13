/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        indigo: {
          1000: '#040128',
        },
      },
      width:{
        '101': '85rem',
        '96a': '30rem',
        '97': '45rem',
        '98': '85rem',
      }
    },
  },
  plugins: [],
}

