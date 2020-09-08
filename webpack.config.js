const path = require('path');

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(mp3|wav|wma|ogg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'assets/audio/',
            publicPath: 'assets/audio/'
          }
        }
      }
    ],
  },
  watch: true,
  mode: "development",
};
