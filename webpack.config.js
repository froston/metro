const webpack = require('webpack')
const path = require('path')

const clientConfig = {
  devtool: 'cheap-module-source-map',
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      API_DEV: JSON.stringify('http://localhost:8080/api')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    port: 3000,
    open: true,
  },
  performance: {
    hints: false,
  },
}

/* const serverConfig = {
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
} */

module.exports = clientConfig
