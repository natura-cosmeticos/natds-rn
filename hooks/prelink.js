const path = require('path');
const fsExtra = require('fs-extra');

const iconFontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-icons')), '..', 'fonts');
const fontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-themes/react-native')), 'assets');

const destinationFolder = path.join(__dirname, '..', 'src', 'assets', 'fonts');

fsExtra.copy(iconFontFolder, destinationFolder);
fsExtra.copy(fontFolder, destinationFolder);
