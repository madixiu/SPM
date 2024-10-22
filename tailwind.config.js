/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue : '#1673aa',
        secondaryBlue: '#1295bf',
        primaryGray: '#6a6a6a',
        secondaryGray: '#ececec',
        tertiaryGray: '#9d9d9d',
        primaryOrange: '#e68031',
        secondaryOrange: '#dd6c15',
      },
      width: {
        'a4': '210mm',
      },
      height: {
        'a4': '297mm',
      },
    },
  },
  plugins: [],
}

