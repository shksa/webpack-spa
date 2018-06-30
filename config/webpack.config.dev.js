const path = require('path')
const webpack = require('webpack');

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
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: dir.STATIC, // absolute location of index.html in the current project, tells the server where to look for index.html.
    compress: true, // enable gzip compression
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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