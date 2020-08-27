
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'monitor-new': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'MonitorNew',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'development',
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `test/index.html`),
      filename: 'index.html',
      // chunks: ['monitor-new'],
      inject: true
    })
  ],
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist',
    disableHostCheck: true
  },
  devtool: 'inline-source-map'
}