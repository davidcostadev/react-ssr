const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  name: 'SSR',
  entry: './app/ssr.js',
  output: {
    path: path.join(__dirname, '.', 'dist', 'assets'),
    filename: 'ssr.js',
    libraryTarget: 'commonjs2',
    publicPath: '/public/',
  },
  target: 'node',
  externals: nodeExternals(),  
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '.', 'src'),
        exclude: path.join(__dirname, '.', 'node_modules'),
      },
    ],
  },
}