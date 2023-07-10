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
      },
      spacing: {
        '61':'242px',
        '62': '245px',
        '63':'250px',
      }

    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(uno|dos|tres|quad)/,
      pattern:
        /(px|py|pt|pb|pl|pr)-(61|62|63)/
    },
  ],
}

