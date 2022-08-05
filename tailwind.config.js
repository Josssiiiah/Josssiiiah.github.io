module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1450px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
