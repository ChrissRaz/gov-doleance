/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#25B099',
        secondary: '#FFCD05',
        background: '#F5F6F8',
        text: '#1F2937',
      },
    },
  },
  plugins: [],
}
