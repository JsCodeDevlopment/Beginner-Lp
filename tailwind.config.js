import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'background': '#181818',
        'violeta': '#a460f9',
        'other-bg': '#262626'
      },
      spacing: {
        'vh': '1014px',
      },
      fontFamily: {
        'sans': ['Krub', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

