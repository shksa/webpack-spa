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
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: dir.STATIC, // absolute location of index.html in the current project, tells the server where to look for index.html.
    compress: true // enable gzip compression
    // publicPath: '/' by default. 
    // The project will run from the server at http://localhost:8080/
    // webpack output is served from /. The output is the bundle.js file.
    // Content not from webpack is served from /Users/sreekarnimbalkar/Desktop/JS/playground/static
    // Content not from webpack is the index.html which is not touched by webpack, it is just a static file
    // served from the dev server.
  },
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