"use static";

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
  node: { module: "empty", net: "empty", fs: "empty" },
  target: "web",
};
