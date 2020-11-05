"use static";

const webpack = require("webpack");

module.exports = {
  entry: "./main.py",
  module: {
    rules: [
      {
        test: /\.py$/,
        loader: "transcrypt-loader",
        options: {},
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      contextRegExp: /./,
      resourceRegExp: /^fs$/,
    }),
  ],
  target: "web",
};
