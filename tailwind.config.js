module.exports = {
  content: ['./src/**/*.{html,js}'],
  // darkMode: 'class',
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#1B0526',
      dark: '#08010C',
      primary: '#AD4C8F',
      'body-color': '#B5B3BC',
      'body-color-2': '#637381',
      'gradient-1': '#E4F2FE',
      'gradient-2': '#FFEEFE',
      'light-bg': '#F5F8FF',
    },
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1140px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{ transform: "translateX(0)" },
          to: { transform: "translateX(-50%)"},
        }
      },
      boxShadow: {
        'primary-hover': '0px 11px 20px rgba(139, 92, 246, 0.2)',
        'black-hover': '0px 11px 30px rgba(7, 16, 45, 0.15)',
        award: '0px 3px 100px rgba(11, 5, 22, 0.07)',
        testimonial: '0px 5px 50px rgba(178, 152, 236, 0.05)',
        faq: '0px 4px 50px rgba(0, 0, 0, 0.03)',
        'shape-1': '0px 0px 100px rgba(0, 0, 0, 0.03)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        image: '25px 40px 100px rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
