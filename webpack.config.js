const path = require("path")
const webpack = require("webpack")

module.exports = {
    target: "node",
    entry: "./src/index.js",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve("./dist")
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ]
  }