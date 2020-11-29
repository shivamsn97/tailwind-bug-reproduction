module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: [
      '**/*.html',
      '**/*.js'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
