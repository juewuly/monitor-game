const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'monitor-game': ['object-defineproperty-ie8', './src/index.js'],
    'monitor-game.min': ['object-defineproperty-ie8', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: 'MonitorGame',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        terserOptions: {
          ie8: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js'],
    mainFields: ['main']
  }
}