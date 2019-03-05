const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    filename: 'bundle.js',
    historyApiFallback: true,
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
          use: [
        {
          loader: "html-loader"
        }
      ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|ttf|png|woff|woff2|eot|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
          ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      filename: "public/index.html" }),
  ],
};