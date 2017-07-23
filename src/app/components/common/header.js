"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
		return (
            <h1>Hello World !!</h1>
		);
	}
});

module.exports = Header;
