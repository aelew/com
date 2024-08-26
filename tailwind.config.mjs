import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', ...defaultTheme.fontFamily.sans]
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '768px'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
