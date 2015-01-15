
'use strict';

// var _ = require('lodash');
var keystone = require('keystone');
// var auth = require('../lib/middleware/auth');
var locals = require('../lib/middleware/locals');
var flush = require('../lib/middleware/flush');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', locals);
keystone.pre('render', flush);

// Import Route Controllers
var controllers = importRoutes('../app/controllers');

// Setup Route Bindings
exports = module.exports = function(app) {

    // Views
    app.get('/', controllers.blog);
    app.get('/blog/:category?', controllers.blog);
    app.get('/blog/post/:post', controllers.post);
    app.get('/gallery', controllers.gallery);
    app.all('/about', controllers.about);

    // NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
    // app.get('/protected', middleware.requireUser, routes.views.protected);

};
