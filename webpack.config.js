//import webpack methods
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

// imports analyzer
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//https://webpack.js.org/configuration/mode/
const config = {
  //The entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code.
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },

  //output that bundled code to a folder that we specify
  output: {
    filename: "[name].bundle.js",
    path: `${__dirname}/dist`,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath(url) {
                return url.replace("../", "/assets/");
              },
            },
          },
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },

  //from class
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
  ],
  //!From Ben. My code is not working.
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
    compress: true,
    port: 8080,
  },

  //By default, webpack wants to run in production mode. In this mode, webpack will minify our code for us automatically, along with some other nice additions. We want our code to run in development mode
  mode: "development",
};

module.exports = config;
