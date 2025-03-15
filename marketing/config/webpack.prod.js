const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devtool: "source-map",
};

module.exports = prodConfig;
