var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, 'src');
var BUILD_DIR = path.join(__dirname, 'public');

module.exports = {
	entry: APP_DIR + '/index.jsx',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  }
}