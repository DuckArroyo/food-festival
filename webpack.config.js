//provides access to Node.js via npm modules.
const path = require("path");

//https://webpack.js.org/configuration/mode/
module.exports = {
  //The entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code.
  entry: "./assets/js/script.js",

  //output that bundled code to a folder that we specify
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },

  //By default, webpack wants to run in production mode. In this mode, webpack will minify our code for us automatically, along with some other nice additions. We want our code to run in development mode
  mode: "development",
  //from class
  //plugins: [new BundlwAnalyzerPlugin()],
};
