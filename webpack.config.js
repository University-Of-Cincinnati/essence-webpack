var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var defaultConfig = {
  output: {
    libraryTarget: 'var',
    library: '[name]',
    path: __dirname + '/build/',
    publicPath: 'http://localhost:8080/build/',
    filename: "[name].js"
  },
  externals: {
    "react": "React"
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader!cssnext-loader!less-loader")},
      {test: /\.(?:js|jsx)$/,
        loader: "babel-loader"},
      {test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
      ]
  },
  plugins: [
    new ExtractTextPlugin("essence-webpack.css"),
  ]
};

var devConfig = {
  entry: {
    essencewebpack: './index.jsx'
  },
  output: defaultConfig.output,
  externals: defaultConfig.externals,
  resolve: defaultConfig.resolve,
  module: defaultConfig.module,
  plugins: defaultConfig.plugins
};

module.exports = devConfig;
