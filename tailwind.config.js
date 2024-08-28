/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',  // Scans all files with these extensions in the src folder
    './public/**/*.html',               // Scans all HTML files in the public folder
    './components/**/*.{html,js,ts,jsx,tsx}', // Scans files in a components folder if you have one
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend Deca'],
        'bigshoulders': ['Big Shoulders Display']
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',

        'max-sm': { 'max': '639px' },  
        'max-md': { 'max': '767px' },  
        'max-lg': { 'max': '1023px' }, 
        'max-xl': { 'max': '1279px' }, 
        'max-2xl': { 'max': '1535px' } 
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
};