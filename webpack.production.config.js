const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const proConfig = {

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

    new ExtractTextPlugin('css/[name]-[hash:8].min.css'),

  ],
}

module.exports = webpackMerge(commonConfig, proConfig)
