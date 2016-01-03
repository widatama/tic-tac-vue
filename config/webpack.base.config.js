module.exports = {
  // This is the "main" file which should include all other modules
  entry: "./app/javascript/main.js",
  // Where should the compiled file go?
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue"
      },
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: "babel",
        // don"t transform node_modules folder (which don"t need to be compiled)
        exclude: /node_modules/
      }
    ]
  },
  vue: {
    loaders: {
      js: "babel"
    }
  }
};
