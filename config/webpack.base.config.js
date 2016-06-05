var postcssImport =     require("postcss-import");
var postcssNext =       require("postcss-cssnext");
var postcssNested =     require("postcss-nested");
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
        test:   /\.(png|jpg)$/,
        loader: "file-loader?name=/img/[name].[ext]"
      },
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
      }
    ]
  },
  babel: {
    "presets": ["es2015", "stage-0"],
    "plugins": ["transform-runtime"]
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
    postcssNext({
      browsers: ["last 2 versions"]
    })
  ],
  plugins: [
    new ExtractTextPlugin("./stylesheet/app.css")
  ]
};
