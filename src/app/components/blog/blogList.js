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

			if(this.props.blogs[i+1]) {
				var post1 = this.props.blogs[i+1];
				blogposts.push(
					<div className="row">
						<div key={post._id} className="col-md-6 abt-left">
							<Link to="blogpost" params={{id: post._id}}>
								<img src={post.image || "images/c-3.jpg"} alt="" />
								<h3>{post.title}</h3>
								<p>{post.content.substring(0, 65)+' ...'}</p>
								<label>Posted by {post.author.split(' ')[0]} on {utility.prettyDate(post.datetime)}</label>
							</Link>
						</div>
						<div key={post1._id} className="col-md-6 abt-left">
							<Link to="blogpost" params={{id: post1._id}}>
								<img src={post1.image || "images/c-3.jpg"} alt="" />
								<h3>{post1.title}</h3>
								<p>{post1.content.substring(0, 65)+' ...'}</p>
								<label>Posted by {post1.author.split(' ')[0]} on {utility.prettyDate(post1.datetime)}</label>
							</Link>
						</div>
					</div>
				);
			}
		}

		return (
			<div className="col-md-8 about-left">
				<div className="about-one">
					<h3>Blog of the month</h3>
				</div>
				{this.props.blogs.length > 0 ?
					<div className="about-two" key={this.props.blogs[0]._id}>
						<img src={this.props.blogs[0].image || "images/c-3.jpg"} alt="" />
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
