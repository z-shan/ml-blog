"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthStore = require('../../stores/authStore');
var AuthActions = require('../../actions/authActions');
var toastr = require('toastr');

var Header = React.createClass({

	mixins: [
        Router.Navigation
    ],

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
	
	logout: function(ev) {
		ev.preventDefault();
		AuthActions.logoutUser();
		toastr.success('You are now logged out.');
		this.transitionTo('/');
	},

    render: function() {
		return (
			<div className="header">
				<div className="container">
					<div className="head">
						<div className="navigation">
							<span className="menu"></span> 
							<ul className="navig">
								<li><Link to="/" className="active">Home</Link></li>
							</ul>
						</div>
						<div className="header-right">
							<div className="search-bar">
								{!this.state.loggedin ?
									<div className="about-btn"><Link to="login">Login / Signup</Link></div>
									: <div className="about-btn"><a onClick={this.logout}>Logout</a></div>
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
