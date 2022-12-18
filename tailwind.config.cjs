/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    colors: {
      black: '#333333',
      blue: '#2973b7',
      gray: '#666666',
      green: '#42b983',
      white: '#ffffff',
    },
    screens: {
      sm: { max: '500px' },
      md: { max: '1200px' },
      lg: { min: '1201px' },
    },
    extend: {
      fontSize: {
        '11xl': '11rem',
      },
    },
  },
};
