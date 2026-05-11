/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        catalog: {
          ink: '#050510',
          panel: '#080b19',
          line: '#39f7ff',
          hot: '#ff38ca',
          glow: '#ffe42d',
          paper: '#f8f5ff',
          muted: '#aeb8d6',
        },
      },
      boxShadow: {
        neon: '0 0 24px rgba(255,56,202,.38)',
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
