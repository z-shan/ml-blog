"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthStore = require('../../stores/authStore');

var Header = React.createClass({

	// making this page aware of store changes
	getInitialState: function() {
		return {
			loggedin: AuthStore.isLoggedIn()
		};
	},

    componentWillMount: function() {
        AuthStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AuthStore.removeChangeListener(this._onChange);
    },
    
    _onChange: function() {
        this.setState({loggedin: AuthStore.isLoggedIn()});
    },

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
								{!this.state.loggedin ?
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
