/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#333333',
        'accent-1': '#77DDF9',
        'accent-2' : '#B6E5D8'
      }
    },
  },
  plugins: [],
}

