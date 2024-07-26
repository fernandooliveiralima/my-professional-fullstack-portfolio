/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      '2xl':  {'min': '1920px'} ,
      // => @media (min-width: 1920px) { ... }

      'xl':  [{'min':'1200px' ,'max': '1919px'}],
      // => @media (max-width: 1919px) { ... }

      'lg':  [{'min':'992px' ,'max': '1199px'}],
      // => @media (max-width: 1199px) { ... }

      'md':  [{'min':'768px', 'max': '991px'}],
      // => @media (max-width: 991px) { ... }

      'sm': { 'max': '480px' },
      // => @media (max-width: 480px) { ... }

    }
  },
  plugins: [require('flowbite/plugin')],
}

