//provides access to Node.js via npm modules.
const path = require("path");

//import webpack methods
const webpack = require("webpack");

// imports analyzer
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//https://webpack.js.org/configuration/mode/
module.exports = {
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
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        //look for any file with this criteria and ...
        test: /\.jpg$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath: function (url) {
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

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    }),
  ],
  //By default, webpack wants to run in production mode. In this mode, webpack will minify our code for us automatically, along with some other nice additions. We want our code to run in development mode
  mode: "development",
};
