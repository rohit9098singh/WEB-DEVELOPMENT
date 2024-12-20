/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants:{
    extend:{
      transitionProperty: {
        'transform': 'transform',
      },
    }
  }
}
