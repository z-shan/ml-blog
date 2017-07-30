"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var utility = require('../../utility');
var BlogStore = require('../../stores/blogStore');

var BlogList = React.createClass({

	render: function() {
		console.log('rendering list',this.props.blogs);
		var blogposts = [];

		for(var i=1; i<this.props.blogs.length; i++) {
			var post = this.props.blogs[i];
			blogposts.push(
				<div key={post._id} className="col-md-6 abt-left">
					<Link to="blogpost" params={{id: post._id}}>
						<img src="images/c-3.jpg" alt="" />
						<h3>{post.title}</h3>
						<p>{post.content.substring(0, 65)+' ...'}</p>
						<label>Posted by {post.author.split(' ')[0]} on {utility.prettyDate(post.datetime)}</label>
					</Link>
				</div>
			);
		}

		return (
			<div className="col-md-8 about-left">
				<div className="about-one">
					<h3>Blog of the month</h3>
				</div>
				{this.props.blogs.length > 0 ?
					<div className="about-two" key={this.props.blogs[0]._id}>
						<img src="images/c-1.jpg" alt="" />
						<p>Posted by {this.props.blogs[0].author.split(' ')[0]} on Jul 27 2017 2:18 AM</p>
						<p>{this.props.blogs[0].title}</p>
						<div className="about-btn">
							<Link to="blogpost" params={{id: this.props.blogs[0]._id}}>Read More</Link>
						</div>
					</div> : 
					<div></div>
				}
				<div className="about-tre">
					<div className="a-1">
						{blogposts}
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = BlogList;
