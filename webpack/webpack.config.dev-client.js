const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  name: 'main',
  context: path.join(__dirname, '..', 'src'),  
  entry: './main.js',
  output: {
    path: assetsPath,
    publicPath: publicPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ]),
  },
  devtool: 'eval',
};