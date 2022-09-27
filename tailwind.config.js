/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      dark: '#00040F',
      darkwhite: '#FFFFFFB2',
      white: '#ffffff',
      lightgreen: '#5CE1E6'
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      serif: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
