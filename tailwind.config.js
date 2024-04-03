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
      },
    },
  },
  plugins: [],
}
