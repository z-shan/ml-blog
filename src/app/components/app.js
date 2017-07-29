/*eslint-disable strict */ // Disabling check because we cant run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header');
var Footer = require('./common/footer');
var RouteHandler = require('react-router').RouteHandler;
 
var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <RouteHandler />
                <div className="clearfix"></div>
                <Footer />
            </div>
        );
    }
});

module.exports = App;