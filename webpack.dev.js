const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    open: true,
    hot: true,
    port: 'auto',
    static: {
      directory: './src',
      watch: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Inject styles into DOM in <style> tag
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
