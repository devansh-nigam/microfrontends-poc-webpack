const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    hot: true,
    port: 8081,
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
