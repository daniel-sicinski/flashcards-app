const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const manifestSeed = require("./manifestSeed")();

module.exports = {
  entry: path.join(__dirname, "src", "public", "js", "index.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "views", "index.html")
    }),
    new ManifestPlugin({
      seed: manifestSeed
    }),
    new CopyPlugin([
      {
        from: path.join(__dirname, "src", "assets", "icons"),
        to: path.join(__dirname, "dist", "assets", "icons")
      }
    ])
  ]
};
