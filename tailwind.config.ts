import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5B4B9A',
          'deep-purple': '#43367A',
          pink: '#E58FB8',
          violet: '#7A6DB0',
          'lavender-mist': '#E3DCF7',
          'lilac-white': '#F7F5FC',
          ink: '#231F33',
          gray: '#5A5568',
        },
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.2', fontWeight: '600' }],
        'hero-mobile': ['38px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-mobile': ['30px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3-mobile': ['20px', { lineHeight: '1.2', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'body-mobile': ['17px', { lineHeight: '1.6' }],
        'small': ['15px', { fontWeight: '600' }],
        'small-mobile': ['14px', { fontWeight: '600' }],
        'button': ['17px', { fontWeight: '700' }],
      },
      spacing: {
        'section': '96px',
        'section-mobile': '64px',
      },
    },
  },
  plugins: [],
};

export default config;
