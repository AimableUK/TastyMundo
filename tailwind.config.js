/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#ff7000',
        getStartedpriColor: '#181234',
        getStartedsecColor: '#3f1f55',
        primaryBody: '#06071b'
      },
      fontFamily: {
        poppins: ['poppins'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),require("@tailwindcss/typography")],
}

