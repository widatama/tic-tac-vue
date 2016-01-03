var baseConfig = require("./webpack.base.config");

baseConfig.output = {
  path:       "./asset/javascript",
  publicPath: "asset/javascript",
  filename:   "app.js"
};

baseConfig.devtool = "eval-source-map";

baseConfig.devServer = {
  noInfo: true
};

module.exports = baseConfig;
