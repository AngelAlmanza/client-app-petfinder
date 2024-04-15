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
        'danger-color': '#EC4949',
        'success-color': '#126F0A',
        'aux-color': '#6A48C8',
      },
    },
  },
  safelist: [
    {
      pattern: /^bg-(primary-color|danger-color|success-color|aux-color)/,
    }
  ],
  plugins: [],
}
