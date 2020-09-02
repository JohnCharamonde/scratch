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
    ],
  },
  watch: true,
  mode: "development",
};
