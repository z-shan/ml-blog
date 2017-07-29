"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('../common/header');
var Footer = require('../common/footer');

var BlogList = require('./blogList');
var SidePane = require('./sidePane');

var BlogStore = require('../../stores/blogStore');

var BlogPageManager = React.createClass({

	getInitialState: function() {
		return {
			posts: BlogStore.getAllPosts()
		};
	},
	
	componentWillMount: function() {
        BlogStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        BlogStore.removeChangeListener(this._onChange);
    },
    
    _onChange: function() {
        this.setState({posts: BlogStore.getAllPosts()});
	},
	
    render: function() {
		return (
			<div>
					<div className="about">
						<div className="container">
							<div className="about-main">
								{this.state.posts.length > 0 ?
									<BlogList blogs={this.state.posts} /> :
									<div>Loading...</div>
								}
								<SidePane />
							</div>
						</div>
					</div>
			</div>
		);
	}
});

module.exports = BlogPageManager;
