/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        paper: '#111111',
        accent: '#00F0FF',
        primary: '#FAFAFA',
        muted: '#A1A1AA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
