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
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: dir.SRC, // absolute location of index.html in the current project, tells the server where to look for index.html.
    compress: true // enable gzip compression
    // public path of index.html is not the same as the path of index.html in the project directory.
    // public path is by default "/" a.k.a the project directory itself. We can change it by publicPath property.
    // The bundled files will be available in the browser under this path. ex:- publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //style-loader should be before css-loader
      }
    ]
  }
}