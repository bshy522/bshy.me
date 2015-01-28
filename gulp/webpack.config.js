/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('gulp-webpack').webpack;

module.exports = {
    progress: true,
    verbose: true,
    output: {
        filename: 'app.js',
        publicPath: '/public/dist'
    },

    cache: true,
    debug: true,
    devtool: true,
    entry: [
        './app/assets/app.jsx'
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
            test: /\.jsx$/,
            loader: 'react-hot!jsx-loader?harmony'
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

};
