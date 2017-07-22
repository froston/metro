const path = require('path')
const webpack = require('webpack')
const express = require('express')
const cors = require('cors')
const routes = require('./routes/users')
const config = require('../../webpack.config.js')

const app = express()
const port = 8080

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

routes(app)

app.listen(port, (err) => {
  if (err) {
    return console.error(error)
  }
  console.log('Server is listening at http://localhost:' + port)
})