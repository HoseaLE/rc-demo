const projectRoot = process.cwd();
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/components/demo/index.js'
  },
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: '[name]_[chunkhash:8].js',
    library: 'aa',
    libraryTarget: 'commonjs'

  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
}