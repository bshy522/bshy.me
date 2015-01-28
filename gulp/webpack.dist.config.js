/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('gulp-webpack').webpack;
var lodash = require('lodash');

var config = {
    debug: false,
    devtool: false,

    stats: {
        colors: true,
        reasons: true
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],

    module: {
        preLoaders: [{
            test: '\\.js$',
            exclude: 'node_modules',
            loader: 'jshint'
        }],

        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader?harmony'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};


module.exports = lodash.merge({}, require('./webpack.config'), config, function mergeCallback(v1, v2) {
    return lodash.isArray(v1) ? v2 : undefined;
});
