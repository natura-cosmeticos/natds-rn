const path = require('path')
const fsExtra = require('fs-extra')

const fontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-icons')), '..', 'fonts')
const destinationFolder = path.join(__dirname, '..', 'src', 'assets', 'fonts')

fsExtra.copy(fontFolder, destinationFolder)
