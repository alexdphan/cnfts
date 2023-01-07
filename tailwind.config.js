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
        cursor: '#0AE6C7',
        primary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
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
