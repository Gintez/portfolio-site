var webpack = require('webpack');
var path = require("path");
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + '/dist',
        publicPath: "./dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
            { test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?name="[name]-[hash].[ext]"'}
        ]
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
      })
    ]
};
