// Copies up to date fonts to lib/assets/fonts folder
require('./hooks/prelink')
const copy = require('./tools/copyFontsByBrand')

module.exports = {
  assets: [
    './src/assets/fonts'
  ],
  commands: [
    {
      func: () => copy('aesop', `${__dirname}/src/assets/fonts`),
      name: 'copy-fonts'
    }
  ]
}
