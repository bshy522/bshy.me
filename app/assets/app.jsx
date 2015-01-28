var React = require('react');
var BshyComponents = require('./components/components.jsx');
var HomeLayout = BshyComponents.HomeLayout;

window.React = React; // debug
React.render( <HomeLayout/> , document.body);
