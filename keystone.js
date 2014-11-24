// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

    'name': 'bshy.me',
    'brand': 'bshy.me',

    'less': 'public',
    'static': 'public',
    'favicon': 'public/favicon.ico',
    'views': 'templates/views',
    'view engine': 'jade',

    'emails': 'templates/emails',

    'auto update': true,
    'session': true,
    'session store': 'mongo',
    'auth': true,
    'user model': 'User',
    'signin url': '/signin',
    'signout url': '/signout',
    'cookie secret': '_$=0iBX8@.y")LKaD7zMZr2!xdTEy}WJ`WcVEiKqz=%45eIFK`dI-iNmi+=mXbBz',

    'cloudinary config': {
        cloud_name: 'de2mevtdi',
        api_key: '589671947932947',
        api_secret: '7sJP5uI4wDQhG-z5DANAxGtMRSY'
    },

    // optional, will prefix all built-in tags with 'keystone_'
    'cloudinary prefix': 'bshy.me_',

    // optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
    'cloudinary folders': true
});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
    _: require('lodash'),
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
    logo_src: '/images/logo-email.gif',
    logo_width: 194,
    logo_height: 76,
    theme: {
        email_bg: '#f9f9f9',
        link_color: '#2697de',
        buttons: {
            color: '#fff',
            background_color: '#2697de',
            border_color: '#1a7cb7'
        }
    }
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
    find: '/images/',
    replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
}, {
    find: '/keystone/',
    replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
}]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
    'posts': ['posts', 'post-categories'],
    'galleries': 'galleries',
    'enquiries': 'enquiries',
    'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
