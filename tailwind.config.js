/** @type {import('tailwindcss').Config} */ 

const indielayer = require('@indielayer/ui/tailwind.preset')

module.exports = {
  // load indielayer ui presets
  presets: [indielayer()],
  // allow PurgeCSS to analyze components
  content: [
    './index.html',
    './**/*.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/@indielayer/ui/**/*',
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [],
}