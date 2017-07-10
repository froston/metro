const path = require('path')
const webpack = require('webpack')
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
const express = require('express')
const routes = require('./routes/users')
const config = require('../../webpack.config.js')

const app = express()
const compiler = webpack(config)
const port = 3000

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.error(error)
  }
  console.log('Listening at http://localhost:' + port)
})