const path = require('path');
const fsExtra = require('fs-extra');

const fontsByBrands = {
  aesop: ['Zapf', 'Suisse'],
  avon: ['Montserrat'],
  natura: ['Helvetica'],
  theBodyShop: ['Druk', 'Recoleta', 'Work'],
};

exports.copy = function (brand, destination) {
  const fontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-themes')), '..', 'react-native', 'assets');

  fontsByBrands[brand].map(fontName => fsExtra.copy(fontFolder, destination, {
    filter: (fontPath) => {
      if (fsExtra.lstatSync(fontPath).isDirectory()) {
        return true;
      }

      return fontPath.includes(fontName) && fontPath;
    },
  }));
};
