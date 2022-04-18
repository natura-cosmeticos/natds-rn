const fs = require('fs')
const path = require('path')

const fontFolder = path.join(path.dirname(require.resolve('@naturacosmeticos/natds-icons')), '..', 'fonts')
const destinationFolder = path.join(__dirname, '..', 'src', 'assets', 'fonts')

function recursiveCopySync(source, target) {
  if (fs.lstatSync(source).isDirectory()) {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target)
    }
    const files = fs.readdirSync(source)
    files.forEach((file) => {
      recursiveCopySync(path.join(source, file), path.join(target, file))
    })
  } else if (fs.existsSync(source)) {
    fs.writeFileSync(target, fs.readFileSync(source))
  }
  console.log(`Copied ${source} to ${target}`)
}

recursiveCopySync(fontFolder, destinationFolder)
