/**
 * The need of webpack is especially realized in SPAs where the JS code is considerably more than the html/css.
 * Transferring a single large chunk of JS is better as we know the sequence of execution of steps, but modifying that file in development becomes tough
 * Hence the developers broke it in smaller chunks of independent logics called as JS Modules.
 *
 * The next challenge is to link them and form a logical connection somehow - in comes the Module systems = CommonJS & ES6 Module System
 * first one uses module.exports and require , other one export and import
 *
 * now we have much smaller logically connected JS files, here comes webpack to bundle them into one to solve 2 problems
 * 1. maintain the order of files - order of execution
 * 2. makes the total number of JS files transferred over network less
 *
 * Loaders in webpack - sometimes we need some amount of preprocessing on the files before we can bundle them into one - we use babel then
 * Plugins in webpack - if we want to impact which type of file should end up in bundle or not (like css / images) then we use plugins and plugins can impact at any stage of the build process by webpack.
 *
 * In short, loaders are file-specific preprocessors, while plugins are more powerful tools that can perform a wider range of tasks throughout the build process.
 *
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//since css was being put directly in the index.html (if we had created this file or using htmlWebpackPlugin)
//hence we want to spit out a single CSS file just like a single JS file.
//we have to stop using style-loader as that is the loader which injects into HTML

const commonConfig = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Marketing Team",
      filename: "index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};

module.exports = commonConfig;
