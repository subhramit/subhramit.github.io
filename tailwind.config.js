/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
}
