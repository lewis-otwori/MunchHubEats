/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(../src/images/background4.webp)',
      },
      fontFamily:{
        dancing :['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

