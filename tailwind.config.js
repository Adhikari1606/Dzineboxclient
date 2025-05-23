/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        colors: {
          'tealcustom': '#01C2CC',
          'purplecustom': '#7830E6',
          'bluecustom': '#0000FF',
          'redcustom': '#9E581D',
        },
        backgroundColor: {
          'tealcustom': '#01C2CC',
          'purplecustom': '#7830E6',
          'bluecustom': '#0000FF',
          'redcustom': '#9E581D',
        },
      },
    },
  },
  plugins: [],
} 