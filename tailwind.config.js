/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1F1F1F',
        'secondary': '#5424FD',
      },

      fontFamily: {
        'os-light': 'open-sans-light',
        'os-regular': 'open-sans-regular',
        'os-medium': 'open-sans-medium',
        'os-semibold': 'open-sans-semiBold',
        'os-bold': 'open-sans-bold',
        'os-extrabold': 'open-sans-ExtraBold',
      }
    },
  },
  plugins: [],
}

