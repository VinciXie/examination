const path = require('path');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const proConfig = {

  output: {

    path: path.resolve(__dirname, 'dist'),

    filename: 'js/[name]-[hash:6].min.js',

  },

  module: {
    rules: [

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
          ]
        })
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { url: false, minimize: true }
            },
            {
              loader: 'sass-loader',
            },
          ]
        })
      },


      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { url: false, minimize: true }
            },
            {
              loader: 'less-loader',
            },
          ]
        })
      },

    ]
  },

  mode: "production",

  plugins: [

    new CleanWebpackPlugin(['dist']),

    new UglifyJSPlugin({
      parallel: true,
    }),

    new ExtractTextPlugin('css/[name]-[hash:8].min.css'),

  ],
}

module.exports = webpackMerge(commonConfig, proConfig)
