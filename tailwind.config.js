/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 30px 18px -8px rgba(0, 0, 0, 0.1);',
      }
    },
  },
  plugins: [],
}
