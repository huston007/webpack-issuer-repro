module.exports = {
  mode: 'development',
  devtool: false,
  entry: [
    './a.js',
    './b.js'
  ],
  module: {
    rules: [
      {
        test: /\.svg/,
        issuer: /a\.js/,
        loader: 'url-loader'
      },
      {
        test: /\.svg/,
        issuer: /b\.js/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    runtimeChunk: true
  }
};
