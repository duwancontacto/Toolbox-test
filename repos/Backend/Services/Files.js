const axios = require('axios')

const BASE_URL = 'https://echo-serv.tbxnet.com/v1/secret'

const config = {
  hostname: BASE_URL,
  headers: {
    Authorization: 'Bearer aSuperSecretKey',
    'Content-Type': 'application/json'
  }
}

exports.getFiles = () => {
  return axios.get(`${BASE_URL}/files`, config)
}
exports.getFileByName = (fileName) => {
  return axios.get(`${BASE_URL}/file/${fileName}`, config)
}
