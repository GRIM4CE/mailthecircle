const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  // plugins: [
  //   new CopyWebpackPlugin([{
  //     from: 'src/static'
  //   }]),
  //   new PrerenderSpaPlugin(
  //     path.join(__dirname, 'dist'), ['/']
  //   )
  // ]
}

module.exports = config;
