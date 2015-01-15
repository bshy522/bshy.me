/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

'use strict';

// var _ = require('lodash');
// var keystone = require('keystone');


/**
    Initialises the standard view locals
    
    The included layout depends on the navLinks array to generate
    the navigation in the header, you may wish to change this array
    or replace it with your own templates / logic.
*/
module.exports = function(req, res, next) {

    var locals = res.locals;

    locals.navLinks = [
        //{ label: 'Home',      key: 'home',        href: '/' },
        {
            label: 'Blog',
            key: 'blog',
            href: '/blog'
        },
        //{ label: 'Gallery',       key: 'gallery',     href: '/gallery' },
        {
            label: 'About',
            key: 'about',
            href: '/about'
        }
    ];

    locals.user = req.user;

    next();

};
