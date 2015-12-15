var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'babel-loader!ts-loader',
      include: path.join(__dirname, 'src')
    }
    // {
    //   test: /\.jsx?$/,
    //   loaders: ['babel'],
    //   include: path.join(__dirname, 'src')
    // }
  ]
  }
};
