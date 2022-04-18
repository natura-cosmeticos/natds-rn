const themes = require('@naturacosmeticos/natds-themes/react-native')

const path = require('path')
const fs = require('fs')

function getFontNameByBrand(file) {
  const brandFonts = Object.keys(file).map((name) => {
    if (typeof file[name] === 'object') {
      return getFontNameByBrand(file[name])
    }

    return file[name]
  })

  return brandFonts.flat()
}

module.exports = function copyFontsByBrand(brand, destination) {
  const fontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-themes')), '..', 'react-native', 'assets')
  const typographyFile = themes[brand].light.asset.font.file

  getFontNameByBrand(typographyFile).map((fontName) => {
    const source = fs.createReadStream(`${fontFolder}/${fontName}.ttf`)
    const dest = fs.createWriteStream(`${destination}/${fontName}.ttf`)

    source.pipe(dest)
    source.on('end', () => console.log(`Copied ${fontName} to ${destination}`))
    source.on('error', () => console.log(`${fontName} error`))
  })
}
