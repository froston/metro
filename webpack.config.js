const path = require('path')
const webpack = require('webpack')

const config = {
  //devtool: "eval",
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/client/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
    
  }
}

module.exports = config