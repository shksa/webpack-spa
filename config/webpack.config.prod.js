const path = require('path')

const dir = {
  PUBLIC: path.resolve(__dirname, '../public'),
  DIST: path.resolve(__dirname, '../dist'),
  ROOT: path.resolve(__dirname, '..'),
};

module.exports = {
  entry: `${dir.ROOT}/src/app.js`,
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