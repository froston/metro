const path = require('path')
const webpack = require('webpack')

const clientConfig = {
  devtool: 'cheap-module-source-map',
  target: 'web',
  entry: [
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      API_DEV: JSON.stringify('http://localhost:8080')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    hotOnly: true,
    port: 3000
  },
  performance: {
    hints: false,
  },
}

const serverConfig = {
  devtool: 'cheap-module-source-map',
  target: 'node',
  entry: [
    'react-hot-loader/patch',
    './src/server/server'
  ],
  output: {
    filename: 'bundle.server.js',
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
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }
    ],
  },
}

module.exports = clientConfig