module.exports = {
  mode: 'development',
  devtool: false,
  entry: './a.js',
  module: {
    rules: [
      {
        test: /\.svg/,
        issuer: /\.js/, // Remove this line and everything works
        loader: 'url-loader'
      }
    ]
  },
  optimization: {
    runtimeChunk: true
  }
};
