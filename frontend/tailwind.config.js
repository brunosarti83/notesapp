/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sonsie': ["Sonsie One", "sans"],
        'vietnam': ["Be Vietnam Pro", "sans"],
      },
    },
  },
  plugins: [],
}

