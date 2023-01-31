/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./settings.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      fontFamily: {
        'var-ui': ['var-ui', 'sans-serif'],
      }
    },
    fontFamily: {
      sans: [
        "var-ui, sans-serif",
        { fontFeatureSettings: '"cv02","cv03","cv04","cv11"' },
      ],
    },
  },
  variants: {
    translate: ['hover', 'focus', 'group-hover', 'group-focus', 'peer-focus', 'peer-hover'],
    rotate: ['hover', 'focus', 'group-hover', 'group-focus'],
  },
  plugins: [],
}
