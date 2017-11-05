const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  name: 'ssr',
  context: path.join(__dirname, '..', 'src'),
  entry: './ssr.js',  
  output: {
    path: assetsPath,
    publicPath: publicPath,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: nodeExternals(),  
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
      }      
    ]),
  },
};