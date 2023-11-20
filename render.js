const fs = require('node:fs/promises')
const path = require('path')

async function pageRouter (app, directory) {
  try {
    const files = await fs.readdir(directory)

    files.forEach((file) => {
      app.get(`/${file}`, (req, res) => {
        const filePath = path.resolve(path.join(directory, file))
        res.sendFile(filePath)
      })
    })

    console.log('Rutas creadas para los siguientes archivos:', files)
  } catch (error) {
    console.error('Error al leer el directorio:', error)
  }
}

module.exports = pageRouter