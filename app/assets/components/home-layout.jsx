var React = require('react');
var MUI = require('material-ui');
var Classable = MUI.Mixins.Classable;

var Paper = MUI.Paper;
// var LeftNav = MUI.LeftNav;
// var MenuItem = MUI.MenuItem;

module.exports = React.createClass({

    mixins: [Classable],

    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        var {
            className,
            title,
            ...other
        } = this.props;

        // var items = [
        //     { route: 'get-started', text: 'Get Started' },
        //     { route: 'css-framework', text: 'CSS Framework' },
        //     { route: 'components', text: 'Components' },
        //     { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
        //     { type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' 
        // }];

        var classes = this.getClasses('hsby-home-layout');

        return (
            <div className={classes}>
                <Paper ref="leftSider" className="left-sider" zDepth={1}>
                    <Paper circle={true} className="photo">
                        <img src="http://facebook.github.io/react/img/logo.svg"/>
                    </Paper>
                    <ul>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                    </ul>
                </Paper>
                <Paper ref="main" className="main" zDepth={0}>
                </Paper>
            </div>
        );
    }

});
