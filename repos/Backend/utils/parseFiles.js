const SUCCESFULL_REQUEST = 'fulfilled'
const MIN_DATA_REQUIRED = 4
const VALID_HEX_SIZE = 32
const isValidLine = (file) => {
  return (
    file.length === MIN_DATA_REQUIRED &&
    file[1] &&
    file[2] &&
    file[3] &&
    Number(file[2]) &&
    file[3].length === VALID_HEX_SIZE
  )
}

const getParseFile = (value) => {
  const tempFile = { file: '', lines: [] }

  const fileLines = value.split('\n')
  fileLines.shift()

  fileLines.forEach((fileLine, index) => {
    const file = fileLine.split(',')

    if (isValidLine(file)) {
      if (!tempFile.file) tempFile.file = file[0]

      tempFile.lines.push({
        text: file[1],
        number: Number(file[2]),
        hex: file[3]
      })
    }
  })

  return tempFile
}

const getParseFiles = (filesData) => {
  const parseFiles = []

  filesData.forEach(({ status, value }) => {
    if (status === SUCCESFULL_REQUEST) {
      const parseFile = getParseFile(value.data)
      if (parseFile.lines.length) parseFiles.push(parseFile)
    }
  })

  return parseFiles
}

module.exports = getParseFiles
