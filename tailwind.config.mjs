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
      },
      colors: {
        neutral: {
          ...defaultTheme.colors.neutral,
          850: 'rgb(31 31 31 / var(--tw-bg-opacity, 1))'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
