/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eucalyptus': {
          '50': '#f0f9f3',
          '100': '#dbf0e1',
          '200': '#b9e1c7',
          '300': '#8bcaa5',
          '400': '#5aad7f',
          '500': '#389162',
          '600': '#2d8458',
          '700': '#205c3f',
          '800': '#1b4a34',
          '900': '#173d2c',
          '950': '#0c2219',
        },
      }
    },
  },
  plugins: [],
}

