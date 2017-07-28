"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('../common/header');
var Footer = require('../common/footer');

var BlogList = require('./blogList');
var SidePane = require('./sidePane');

var BlogPageManager = React.createClass({
    render: function() {
		return (
			<div>
					<div className="about">
						<div className="container">
							<div className="about-main">
								<BlogList />
								<SidePane />
							</div>
						</div>
					</div>
			</div>
		);
	}
});

module.exports = BlogPageManager;
