/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'uno': '#331D2C',
        'dos': '#3F2E3E',
        'tres': '#A78295',
        'quad': '#EFE1D1'

      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(uno|dos|tres|quad)/,
    },
  ],
}

