/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#5c2719',
          200: '#5c1929',
          300: '#401225',
          400: '#5c195b',
          500: '#40123f',
        },
        neutral: {
          100: '#ffffff',
          200: '#eae6e1',
          300: '#9797a1',
          400: '#595962',
          500: '#131316',
        },
      },
      backgroundImage: {
        projects: "url('/src/assets/images/quote.jpg')",
        slide1: "url('/src/assets/images/hero/bg1.jpg')",
        slide2: "url('/src/assets/images/hero/bg2.jpg')",
        slide3: "url('/src/assets/images/hero/bg3.jpg')",
      },
    },
  },
  plugins: [],
};
