require('dotenv').config();
const webpack = require('webpack');

/**
 * Webpack configuration file. Will be imported when running "npm run build" / "npm run webpack"
 * and when running server in development mode with "npm run dev".
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: ((!process.env.NODE_ENV || process.env.NODE_ENV === 'production') ? 'production' : 'development'), /* Documentation: https://webpack.js.org/concepts/mode/ */
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
      // vue: 'vue/dist/vue.runtime.esm-bundler.js',
      // vue: 'vue/dist/vue.runtime.esm-browser.js',
    },
  },
  devtool: 'source-map',
  target: 'web', /* Documentation: https://webpack.js.org/configuration/target/ */
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        include: [/components/]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: [/components/]
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
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};