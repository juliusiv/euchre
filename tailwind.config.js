module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      width: {
        'content': 'fit-content'
      },
      minHeight: {
        '100vh': '100vh'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'first', 'last', 'even', 'odd', 'hover', 'focus']
  },
  plugins: [],
}
