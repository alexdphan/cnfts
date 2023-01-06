/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  presets: [
    require('tailwindcss/defaultConfig'),
    require('xtendui/tailwind.preset'),
  ],
  content: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    './node_modules/xtendui/src/*.mjs',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          damp: '#6674D9',
        },
        gray: {
          bg: '#1A202C',
          lightbg: '#2D3748',
        },
        clight: '#F8F3FF',
        primary: {
          50: '#e5e7f9',
          100: '#bec4ef',
          200: '#929ce4',
          300: '#6674d9',
          400: '#4657d1',
          500: '#2539c9',
          600: '#2133c3',
          700: '#1b2cbc',
          800: '#1624b5',
          900: '#0d17a9',
        },
      },
      component: {
        '.xt-mousefollow': {
          pointerEvents: 'none',
          top: '0',
          left: '0',
          right: 'auto',
          bottom: 'auto',
          overflow: 'visible',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
