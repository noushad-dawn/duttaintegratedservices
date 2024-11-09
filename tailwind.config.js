const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background':'#212738',
        'div':'#121212',
        'button':"#7c90a0",
        'heading':'#ee6b6e',
        // 'subheading':"#FF4B33",
        'text':"#ee6b6e",
        'cards':"#D3D3D3",
        'form':'#1F1F1F',
        primary: {
          500: 'green',
          600: 'blue',
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}