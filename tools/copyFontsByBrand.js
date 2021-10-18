const themes = require('@naturacosmeticos/natds-themes/react-native');

const path = require('path');
const fsExtra = require('fs-extra');

function getFontNameByBrand(file) {
  const brandFonts = Object.keys(file).map((name) => {
    if (typeof file[name] === 'object') {
      return getFontNameByBrand(file[name]);
    }

    return file[name];
  });

  return brandFonts.flat();
}


module.exports = function copyFontsByBrand(brand, destination) {
  const fontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-themes')), '..', 'react-native', 'assets');
  const typographyFile = themes[brand].light.asset.font.file;

  getFontNameByBrand(typographyFile).map(fontName => fsExtra.copy(fontFolder, destination, {
    filter: (fontPath) => {
      if (fsExtra.lstatSync(fontPath).isDirectory()) {
        return true;
      }

      return fontPath.includes(fontName) && fontPath;
    },
  }));
};
