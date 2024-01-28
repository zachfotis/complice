/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(6, 15, 20, 1)',
        secondary: 'rgba(49, 49, 49, 1)',
        accent: 'rgba(199, 195, 186, 1)',
        whiteGrey: 'rgba(240, 238, 239, 1)',
        lightGrey: '#F8F8F8',
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700',
        platinum: '#ADD8E6',
        vip: '#B19CD9',
      },
      fontSize: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.56rem',
        h4: '1.25rem',
        lg: '1.25rem',
        base: '1rem',
        sm: '0.8rem',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        custom: ['Drephonic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
