const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          }
      ]
  },
  mode: 'development',
  target: 'node',
  stats: {
      colors: true
  }
};
