/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      dropShadow: {
        'xl': '0 35px 35px #4D5BCE'
      }
    },
  },
  plugins: [],
}

