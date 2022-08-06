
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = (env, argv) => {
  return {
    entry: [
      path.resolve(__dirname, 'src/assets/css/main.css'),
      path.resolve(__dirname, 'src/assets/js/main.js'),
    ],
    output: {
      path: path.resolve(__dirname, '_site/assets'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }
      ]
    },
    optimization: {
      minimizer: [
        `...`, new TerserPlugin(), new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new DefinePlugin({
        'process.env.NODE_ENV': `"${argv.mode}"`
      })
    ]
  };
};
