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
        hero: 'linear-gradient(147.77deg, rgba(217, 217, 217, 0) 16.72%, rgba(255, 241, 190, 0.33) 35.68%, rgba(255, 247, 177, 0.49) 53.09%, rgba(241, 231, 255, 0) 66.68%)',
      },
      colors: {
        'gray-secondary': '#707070',
        'black-secondary': '#303030',
        'blue-primary': '#293CE1',
        'header-body': 'rgba(77, 77, 77, 0.65)',
        'hero-button': '#293CE2',
      },
    },
  },
  plugins: [],
};
