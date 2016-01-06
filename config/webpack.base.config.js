var postcssImport =     require("postcss-import");
var postcssNested =     require("postcss-nested");
var postcssCssVar =     require("postcss-css-variables");
var postcssAutoprefix = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app/javascript/main.js",
  module: {
    loaders: [
      {
        test:   /\.vue$/,
        loader: "vue"
      },
      {
        test:    /\.js$/,
        loader:  "babel",
        exclude: /node_modules/
      },
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
      }
    ]
  },
  vue: {
    loaders: {
      js: "babel"
    }
  },
  postcss: [
    postcssImport({
      path: ["node_modules", "./app"]
    }),
    postcssNested(),
    postcssCssVar(),
    postcssAutoprefix({
      browsers: ["last 2 versions"]
    })
  ],
  plugins: [
    new ExtractTextPlugin("./stylesheet/app.css")
  ]
};
