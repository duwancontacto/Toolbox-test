const files = require('./files')

const routes = (app) => {
  app.use('/files', files)
}

module.exports = routes
