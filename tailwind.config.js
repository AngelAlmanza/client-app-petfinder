/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'icon-color': '#A3A3A3',
        'text-primary-color': '#797979',
        'primary-gray': '#EFEFEF',
        'primary-color': '#5AC3E1',
        'hover-bg': 'rgba(217, 217, 217, 0.7)',
      },
    },
  },
  plugins: [],
}
