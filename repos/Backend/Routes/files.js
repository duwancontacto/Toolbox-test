const express = require('express')
const routes = express.Router()
const FilesController = require('../Controllers/FilesController')

routes.get('/data', FilesController.getFilesData)
routes.get('/list', FilesController.getFilesList)

module.exports = routes
