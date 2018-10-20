const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [

    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/static/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    // new ReactRootPlugin(),
    new HtmlWebpackPlugin({
      title: 'Bang Nguyen - Redux',
      meta: { charset: 'UTF-8' },
      favicon: './client/favicon.png',
      hash: true,
      template: path.join(__dirname, 'index.template.html'),
      filename: './index.html' //relative to output path
    })
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        // include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.styl$/,
        // include: path.join(__dirname, 'client'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
    ]
  }
};
