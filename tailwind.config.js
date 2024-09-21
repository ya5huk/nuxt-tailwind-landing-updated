const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        accent: "#111827",
        warn: "#ef4444"
      },
      boxShadow: {
        primary: '0 4px 14px 0 rgba(0, 118, 255, 0.39)'
      }
    },
  },
  plugins: [],
}


