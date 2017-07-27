"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('../common/header');
var Footer = require('../common/footer');

var BlogPageManager = React.createClass({
    render: function() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
});

module.exports = BlogPageManager;
