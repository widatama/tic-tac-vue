const karmaChromeLauncher = require('karma-chrome-launcher');
const karmaTap = require('karma-tap');
const karmaTapPrettyReporter = require('karma-tap-pretty-reporter');
const karmaWebpack = require('karma-webpack');

// we can just use the exact same webpack config by requiring it
// but make sure to delete the normal entry
const webpackConf = require('./webpack.config');

delete webpackConf.entry;

webpackConf.node = {
  fs: 'empty',
};

webpackConf.stats = 'none';

module.exports = (config) => {
  config.set({
    plugins: [
      karmaChromeLauncher,
      karmaTap,
      karmaTapPrettyReporter,
      karmaWebpack,
    ],
    browsers: ['ChromeCanary'],
    frameworks: ['tap'],
    reporters: ['tap-pretty'],
    tapReporter: {
      prettifier: 'tap-summary',
    },
    files: [ // entry file for all tests
      '../test/bundle.js',
    ],
    preprocessors: { // pass the entry file to webpack for bundling
      '../test/bundle.js': ['webpack'],
    },
    client: {
      captureConsole: false,
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true,
    },
    singleRun: true,
    colors: true,
  });
};
