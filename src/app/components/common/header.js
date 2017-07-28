"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({

    render: function() {
		return (
			<div className="header">
				<div className="container">
					<div className="head">
						<div className="navigation">
							<span className="menu"></span> 
							<ul className="navig">
								<li><Link to="home"  className="active">Home</Link></li>
								<li><Link to="about">About</Link></li>
								<li><Link to="gallery">Gallery</Link></li>
							</ul>
						</div>
						<div className="header-right">
							<div className="search-bar">
								{!this.props.loggedIn ?
									<div className="about-btn"><Link to="login">Login / Signup</Link></div>
									: "Welcome"
								}
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Header;
