const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')

const folderPath = path.join(__dirname, '..', 'node_modules/@naturacosmeticos/natds-rn/android/app/src/main/java/com/naturareactnativecomponents/')
const destinationPath = path.join(__dirname, '..', 'node_modules/@naturacosmeticos/natds-rn/android/src/main/java/com/naturareactnativecomponents/')

fsExtra.copySync(folderPath, destinationPath)

const manifestPath = path.join(__dirname, '..', 'node_modules/@naturacosmeticos/natds-rn/android/src/main/java/com/naturareactnativecomponents/AndroidManifest.xml')
const destinationManifest = path.join(__dirname, '..', 'node_modules/@naturacosmeticos/natds-rn/android/src/main/AndroidManifest.xml')

fs.renameSync(manifestPath, destinationManifest, (err) => {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})

const buildPath = path.join(__dirname, '..', 'node_modules/@naturacosmeticos/natds-rn/android/src/main/java/com/naturareactnativecomponents/build.gradle')
const destinationBuild = path.join(__dirname, '..', 'node_modules/@naturacosmeticos/natds-rn/android/build.gradle')

fs.renameSync(buildPath, destinationBuild, (err) => {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})

const appFolder = path.join(__dirname, '..', 'node_modules/@naturacosmeticos/natds-rn/android/app/')

fs.rm(appFolder, { recursive: true, force: true }, (err) => {
  if (err) throw err
  console.log('Successfully deleted - AKA moved!')
})
