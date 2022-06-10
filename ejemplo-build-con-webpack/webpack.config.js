require('dotenv').config();
const webpack = require('webpack');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // This will also enable the Vue devtool plugin for Chrome.
  mode: (process.argv[2] === '--watch') ? 'development' : 'production', /* Documentation: https://webpack.js.org/concepts/mode/ */

  entry: {
    'script': './src/src-script.js',

    'style': './src/style.scss',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  devtool: 'source-map',
  target: 'web', /* Documentation: https://webpack.js.org/configuration/target/ */
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        include: [/componentes/]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: [/componentes/]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true, // you can set this false if you're going to use only composition api
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};