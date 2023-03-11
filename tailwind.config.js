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
      'custom-lg': '18.1098px',
    },
    extend: {
      backgroundImage: {
        logo: 'linear-gradient(124.32deg, #1A23DC 19.22%, #62228A 46.62%)',
        hero: 'linear-gradient(147.77deg, rgba(217, 217, 217, 0) 16.72%, rgba(255, 241, 190, 0.33) 35.68%, rgba(255, 247, 177, 0.49) 53.09%, rgba(241, 231, 255, 0) 66.68%)',
        'black-feature-card':
          'linear-gradient(125.94deg, #000000 26.65%, #58504C 91.33%)',
        'benefit-1':
          'linear-gradient(142.32deg, #FFEFE7 11.08%, #FFE7E7 58.46%)',
        'benefit-2':
          'linear-gradient(149.21deg, #51B8BF 11.69%, #4AF4FF 81.33%)',
        'benefit-4': 'linear-gradient(137.55deg, #050F3A 8.3%, #29366D 76.11%)',
      },
      colors: {
        'gray-secondary': '#707070',
        'black-secondary': '#303030',
        'blue-primary': '#293CE1',
        'header-body': 'rgba(77, 77, 77, 0.65)',
        'hero-button': '#293CE2',
        'partners-color': '#565656',
        'blue-feature-card': '#050F3A',
        'card-p': 'rgba(255, 255, 255, 0.65)',
        'benefits-main-1': '#564841',
        'benefits-main-2': '#204042',
        'benefits-main-3': '#4D4D4D',
        'benefit-3': '#EBE7FF',
        'benefit-sub-lite': '#E1E1E1',
      },
    },
  },
  plugins: [],
};
