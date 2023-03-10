/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      public: ['Public Sans', 'sans-serif'],
    },
    borderRadius: {
      custom: '10px',
      'custom-2x': '20px',
    },
    extend: {
      backgroundImage: {
        logo: 'linear-gradient(124.32deg, #1A23DC 19.22%, #62228A 46.62%)',
      },
      colors: {
        'gray-secondary': '#707070',
        'black-secondary': '#303030',
        'blue-primary': '#293CE1',
      },
    },
  },
  plugins: [],
};
