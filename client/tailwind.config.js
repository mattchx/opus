/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        destructive: {
          DEFAULT: '#ef4444',
          dark: '#dc2626',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}