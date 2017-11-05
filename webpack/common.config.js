const path = require('path');

module.exports = {
  assetsPath: path.join(__dirname, '..', 'dist'),
  publicPath: '/dist/',
  commonLoaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, '..', 'src'),
      exclude: path.join(__dirname, '..', 'node_modules'),
    },
  ],
};