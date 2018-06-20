const path = require('path')

const dir = {
  SRC: path.resolve(__dirname, '../src'),
  DIST: path.resolve(__dirname, '../dist'),
  ROOT: path.resolve(__dirname, '..'),
};

module.exports = {
  entry: dir.SRC, // location of index.js
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
      }
    ]
  }
}