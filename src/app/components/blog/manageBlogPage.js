"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('../common/header');
var Footer = require('../common/footer');

var BlogList = require('./blogList');
var SidePane = require('./sidePane');

var BlogStore = require('../../stores/blogStore');
var AuthStore = require('../../stores/authStore');

var BlogPageManager = React.createClass({

	getInitialState: function() {
		return {
			posts: BlogStore.getAllPosts(),
			isLoggedIn: AuthStore.isLoggedIn()
		};
	},
	
	componentWillMount: function() {
		BlogStore.addChangeListener(this._onBlogChange);
		AuthStore.addChangeListener(this._onAuthChange);
    },

    componentWillUnmount: function() {
		BlogStore.removeChangeListener(this._onBlogChange);
		AuthStore.removeChangeListener(this._onAuthChange);
    },
    
    _onBlogChange: function() {
         this.setState({posts: BlogStore.getAllPosts()});
	},

	_onAuthChange: function() {
		this.setState({isLoggedIn: AuthStore.isLoggedIn()});
	},
	
    render: function() {
		console.log('isloggedin', AuthStore.isLoggedIn());
		return (
			<div>
					<div className="about">
						<div className="container">
							<div className="about-main">
								{this.state.posts.length > 0 ?
									<BlogList
										blogs={this.state.posts} /> :
									<div>Loading...</div>
								}
								<SidePane isLoggedIn={this.state.isLoggedIn}/>
							</div>
						</div>
					</div>
			</div>
		);
	}
});

module.exports = BlogPageManager;
