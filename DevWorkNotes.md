
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
`"scripts": {
    "webpack": "webpack --watch",
    "build": "webpack"
},`


Running webpack makes sense, but why add the flag `--watch`? Well, when we pass --watch into our command, webpack will automatically watch for saved changes to our files. When any change is recognized, it will re-bundle the code. When we talk about the build, we are talking about webpack's process of bundling our code and outputting a new bundled, production-ready file. If at any time we would like to terminate the webpack `--watch` process, we can simply press `Ctrl+C`.