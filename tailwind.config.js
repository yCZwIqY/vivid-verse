import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kr: ['var(--font-noto-kr)'],
        ja: ['var(--font-noto-ja)'],
        zh: ['var(--font-noto-zh)'],
        en: ['var(--font-roboto-en)'],
      },
    },
    keyframes: {
      'appear-right': {
        '0%': {
          opacity: 0,
          transform: 'translateX(20px)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateX(0)',
        },
      },
      'appear-bottom': {
        '0%': {
          opacity: 0,
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'appear-right': 'appear-right 0.5s ease-out',
      'appear-bottom': 'appear-bottom 0.5s ease-out',
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          small: '2px',
          medium: '8px',
          large: '12px',
        },
        fontSize: {
          tiny: '9px',
          small: '11px',
          medium: '16px',
          large: '24px',
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#71C4EF',
              100: '#D4EAF7',
              200: '#3B3C3D',
              foreground: '#FFFEFB',
            },
            secondary: {
              DEFAULT: '#CCCBC8',
              100: '#D4EAF7',
              200: '#00668C',
              foreground: '#313D44',
            },
            background: {
              DEFAULT: '#FFFEFB',
              100: '#FFFEFB',
              200: '#F5F4F1',
              300: '#CCCBC8',
              foreground: '#3B3C3D',
            },
            default: {
              DEFAULT: '#FFFEFB',
              100: '#F5F4F1',
              200: '#F5F4F1',
              300: '#CCCBC8',
            },
            text: {
              100: '#1D1C1C',
              200: '#313D44',
              300: '#CCCBC8',
            },
            foreground: {
              500: '#1D1C1C',
              200: '#313D44',
              300: '#CCCBC8',
            },
          },
        },
        dark: {},
      },
    }),
  ],
};
