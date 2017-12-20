const path = require('path');

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
}

module.exports = config;
