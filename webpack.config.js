var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_DIR = path.join(__dirname, 'src');
var BUILD_DIR = path.join(__dirname, 'public');

module.exports = {
	entry: APP_DIR + '/index.js',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader'
      }, {
        test: /\.png$/,
        include: APP_DIR,
        loader: 'url-loader?name=[path][name].[ext]?[hash]&context=/src/assets'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.html',
      inject: 'body',
      hash: true
    })
  ]
}