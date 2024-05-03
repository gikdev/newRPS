/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.js"],
  theme: {
    extend: {
      fontFamily: {
        en: ['Poppins', 'sans-serif'],
        fa: ['Mikhak', 'sans-serif'],
      },
    },
  },
  plugins: [],
}