/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cooper-std': ['Cooper Std', 'sans'],
      },
    },
  },
  plugins: [],
}