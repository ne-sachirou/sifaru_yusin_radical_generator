"use static";

module.exports = {
  devtool: "inline-source-map",
  entry: "./main.py",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.py$/,
        loader: "transcrypt-loader",
        options: {},
      },
    ],
  },
  node: { module: "empty", net: "empty", fs: "empty" },
  target: "web",
};
