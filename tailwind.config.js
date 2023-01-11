/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'gray-bg': '#E9E9EF',
        'gray-head': '#F3F4F6',
        'black-text': '#131313',
        'green-status': '#BBF7D0',
        'blue-button': '#0066B3',
      },
    },
  },
  plugins: [],
}
