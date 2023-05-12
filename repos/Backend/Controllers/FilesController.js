const fileService = require('../Services/Files')
const getParseFiles = require('../utils/parseFiles')

exports.getFilesData = async (req, res) => {
  const { fileName } = req.query
  try {
    const fileResult = await fileService.getFiles()
    const { files } = fileResult.data

    const filterFiles = fileName
      ? files.filter((file) =>
        file.toLowerCase().includes(fileName.toLowerCase())
      )
      : files

    const petitionFiles = []

    filterFiles.forEach((file) =>
      petitionFiles.push(fileService.getFileByName(file))
    )

    const filesData = await Promise.allSettled(petitionFiles)

    const parseFiles = getParseFiles(filesData)

    res.status(200).json(parseFiles)
  } catch (error) {
    console.log('error', error)
    res
      .status(500)
      .json({ error: false, data: 'Error al obtener la lista de archivos' })
  }
}
exports.getFilesList = async (req, res) => {
  try {
    const fileResult = await fileService.getFiles()

    res.status(200).json(fileResult.data)
  } catch (error) {
    res
      .status(500)
      .json({ error: false, data: 'Error al obtener la lista de archivos' })
  }
}
