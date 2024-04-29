/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Serif Display', 'sans-serif'],
        yellowtail: ['Yellowtail', 'Static']
      },
    },
  },
  plugins: [
  ],
}