/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily:  {
        'gotham-ultra': ['Gotham-Ultra', 'sans-serif'],
        'gotham-black': ['Gotham-Black', 'sans-serif'],
        'gotham-bold': ['Gotham-Bold', 'sans-serif'],
        'gotham-book': ['Gotham-Book', 'sans-serif'],
        'gotham-light': ['Gotham-Light', 'sans-serif'],
        'gotham-medium': ['Gotham-Medium', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '4rem',
    },
  },
  plugins: [],
}