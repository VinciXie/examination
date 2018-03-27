const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = {

    context: __dirname,

    entry: {
      layout: "./src/main.js",
    },

    module: {
      rules: [

        {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ]
        },

      ]
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', '.less', '.css'],

      modules: ["node_modules"],

    },


    plugins: [

      new webpack.HashedModuleIdsPlugin(),

      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
      }),

      new DashboardPlugin(),

    ]
}

module.exports = config;
