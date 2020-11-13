const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    boot: './src/boot',
    logout: './src/logout'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: '[name]'
  },
  optimization: {
      minimize: false,
      mangleExports: false,
      // concatenateModules: false,
      // usedExports: false
  },
  mode: 'production'
};

module.exports = config;