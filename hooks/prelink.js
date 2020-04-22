const path = require('path');
const fsExtra = require('fs-extra'); // eslint-disable-line import/no-extraneous-dependencies

const fontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-icons')), 'fonts');

const destinationFolder = path.join(__dirname, '..', 'lib', 'assets', 'fonts');

fsExtra.copy(fontFolder, destinationFolder);
