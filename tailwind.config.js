module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', '"sans - serif"'],
        'Raleway': ['"Raleway"', '"san - serif"'],
        'Assistant': ['"Assistant"', '"san - serif"'],
        'Quicksand': ['"Quicksand"', '"san - serif"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
