const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');

const common = require('./webpack.common.config.js');

function sourceMapLoader(loaderName) {
  return {
    loader: loaderName,
    options: {
      sourceMap: true
    }
  }
}

const config = {
  devtool: 'cheap-eval-source-map',

  output: {

    path: path.resolve(__dirname, 'dist'),

    filename: 'js/[name]-[hash:4].js',

  },

  module: {
    rules: [

      {
          test: /\.css$/,
          use: [
              'style-loader',
              sourceMapLoader('css-loader')
          ]
      },

      {
          test: /\.scss/,
          use: [
              'style-loader',
              sourceMapLoader('css-loader'),
              sourceMapLoader('sass-loader')
          ]
      },

    ]
  },

  mode: "development",

  plugins: [

    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8888,
    index: 'index.html'
  }
}



module.exports = merge(common, config);
