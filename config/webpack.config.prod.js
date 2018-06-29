const path = require('path')

const dir = {
  SRC: path.resolve(__dirname, '../src'),
  STATIC: path.resolve(__dirname, '../static'),
  DIST: path.resolve(__dirname, '../dist'),
  ROOT: path.resolve(__dirname, '..'),
};

module.exports = {
  entry: dir.ROOT, // location of index.js
  output: {
    path: dir.DIST,
    filename: 'bundle.js',
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //style-loader should be before css-loader
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}