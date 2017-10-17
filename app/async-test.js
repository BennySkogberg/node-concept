/**
 * Execute by running
 * 'npm run async'
 * according to package.json
 */

const fs = require('fs')

console.log('start reading the file...')

fs.readFile('file/file.md', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }
  console.log(content)
})

console.log('end of the file')
