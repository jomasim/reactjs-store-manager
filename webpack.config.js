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
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      filename: "public/index.html" }),
  ],
};