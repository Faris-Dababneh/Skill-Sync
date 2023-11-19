/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      'theme-blue': '#1e70eb',
      'button-blue': '#125ccc',
      'button-blue-shadow': '#053d91',
      'button-blue-hover': '#1e70eb',
      'background-color': '#212426',
      'background-lightened': '#2b2f32',
      'tile': 'rgba(200, 200, 200, 0.3)',
      'tile-hover': 'rgba(200, 200, 200, .8)'
      },
      boxShadow: {
        'button': '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
      },
      dropShadow: {
        'lg': '0 5px 5px rgba(0, 0, 0, .5)',
        'tile': '0 5px 5px rgba(221, 221, 221, 0.76)'
      }
  }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

