/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      colors:{
        neutral: 'rgb(251, 251, 251)',
        primary: 'rgb(3, 37, 65)',
        accent:  'rgb(22, 183, 219)',
        copy:    'rgb(37, 37, 37)',
      },
    }, 
  },
  plugins: [],
}
