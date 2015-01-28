/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';

var webpack = require('gulp-webpack').webpack;
var config = require('./config');

module.exports = {
    progress: true,
    verbose: true,
    output: {
        filename: 'app.js',
        publicPath: config.dest,
        path: path.join(process.cwd(), config.dest)
    },

    cache: true,
    // debug: true,
    devtool: true,
    entry: [
        config.jsx.entry
    ],

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        extensions: ['', '.js']
    },
    module: {
        preLoaders: [{
            test: '\\.js$',
            exclude: 'node_modules',
            loader: 'jshint'
        }],
        loaders: [{
            test: /\.jsx$/i,
            loader: 'react-hot!jsx-loader?harmony'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

};
