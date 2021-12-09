[GitHub Pages](https://duckarroyo.github.io/food-festival/)

[Github Repository](https://github.com/DuckArroyo/food-festival)

Audit the app

- Run a lighthouse audit to find heavy package loads.
- optimize files and assets
  - minify JS files
  - [JavaScript minifier](https://www.toptal.com/developers/javascript-minifier/)
  - minify images
  - [Optimizilla](https://imagecompressor.com/)
  - upload the file and download compressed images.
  - replace the images

Install webpack

- `npm init`
- `npm install -D webpack webpack-cli`
  or
- `npm install -D webpack@4.46.0 webpack-cli@4.6.0`
- `webpack -v`
- if: webpack: command not found
- `npm run webpack -v`

### Add script to package.json

`"scripts": { "webpack": "webpack --watch", "build": "webpack" },`

Running webpack makes sense, but why add the flag `--watch`? Well, when we pass --watch into our command, webpack will automatically watch for saved changes to our files. When any change is recognized, it will re-bundle the code. When we talk about the build, we are talking about webpack's process of bundling our code and outputting a new bundled, production-ready file. If at any time we would like to terminate the webpack `--watch` process, we can simply press `Ctrl+C`.

To run webpack

- `npm run build`

Install `webpack-bundle-analyzer`

- `npm install -D webpack-bundle-analyzer`

There are several ways to code split, which depend on which part of your project you would like to bundle:

- Entry point splitting separates code by entry points in your app. An entry point is defined by each page's requisite script files to load.

- Vendor splitting separates vendor code (e.g., jQuery, Bootstrap, lodash, etc.) away from your app's code. A vendor bundle can also be shared between other bundles, further reducing overall bundle size by creating a common chunk.

- Dynamic splitting separates code and allows dynamic importing of modules. This type of splitting is often best for single-page applications that use front-end routing.

