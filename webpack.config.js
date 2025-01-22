const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlBundlerPlugin({
      // specify the entry points for HTML pages (or a template)
      entry: {
        index: 'src/index.html', // save generated HTML into dist/index.html
      },
      js: {
        filename: 'js/[name].[contenthash:8].js', // JS output filename
      },
      css: {
        filename: 'css/[name].[contenthash:8].css', // CSS output filename
      },
    }),
  ],
  
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },

  module: {
      rules: [
        {
          test: /\.s?css$/,
          use: ['css-loader', 'sass-loader'],
        },
        {
          test: /\.(ico|png|jpe?g|svg)/,
          type: 'asset/resource',
        },
      ],
    },
};