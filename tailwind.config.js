/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        neutral: 'rgb(251, 251, 251)',
        primary: 'rgb(3, 37, 65)',
        accent:  'rgb(22, 183, 219)',
        copy:    'rgb(37, 37, 37)',
      }
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 20px, 20px, #00000024)'
      ]
    }
  },
  plugins: [],
}
