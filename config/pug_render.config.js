const fs = require('fs');
const pug = require('pug');
const { join } = require('path')

const devPath = './development';
const pathSize = devPath.length;

const getPath = function getAllFilePathOfDirectory(dir) {
  let sources = fs.readdirSync(dir)  
  let relativePaths = sources.map((source) => {
      if (source[0] != "_") {
        let path = `./${join(dir,source)}`
        let isDir = fs.lstatSync(path).isDirectory()
        if(isDir) {
          return getPath(path)
        }
        return path
      } else {
        // retorna un arreglo para cuando se utilice flat lo elimine ya que esa ruta no sera necesaria
        return [] 
      }
  })
  return relativePaths.flat()
}

const changeExtention = function changeExtentionFromPugToHtml(path) {
  let outPath = `.${path.slice(pathSize)}`
  outPath = outPath.slice(0, -3)
  outPath = `${outPath}html`
  
  return outPath
}

let files = getPath(devPath);
files.map((file) => {
  let fn = pug.compileFile(file);
  let html = fn();
  let outPath = changeExtention(file) 
  fs.writeFile(outPath, html, (err) => {
      if(err) throw err
      console.log(`File: ${outPath} updated`)
  })
})
