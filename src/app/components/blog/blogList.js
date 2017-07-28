"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var BlogList = React.createClass({
	/*propTypes: {
		blogs: React.propTypes.array.isRequired
	},*/

	getInitialState: function() {
		return {
		blogs: [{
				id: 1,
				title : "My First Blog",
				content: "First blogs content",
				username: "xyz@gmail.com",
				author: "Zeeshan A",
				datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)", 
				comments: [{
					content: "First Comment",
					username: "xyz@gmail.com",
					datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)"
				}]
			},
			{
				id: 2,
				title : "My First Blog",
				content: "First blogs content",
				username: "xyz@gmail.com",
				author: "Zeeshan A",
				datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)", 
				comments: [{
					content: "First Comment",
					username: "xyz@gmail.com",
					datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)"
				}]
			},
			{
				id: 3,
				title : "My First Blog",
				content: "First blogs content",
				username: "xyz@gmail.com",
				author: "Zeeshan A",
				datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)", 
				comments: [{
					content: "First Comment",
					username: "xyz@gmail.com",
					datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)"
				}]
			},
			{
				id: 4,
				title : "My First Blog",
				content: "First blogs content",
				username: "xyz@gmail.com",
				author: "Zeeshan A",
				datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)", 
				comments: [{
					content: "First Comment",
					username: "xyz@gmail.com",
					datetime: "Fri Jul 28 2017 00:57:54 GMT-0500 (CDT)"
				}]
			}
		]
		};
	},

	prettyDate: function(datestring) {
		var d = new Date(datestring);
		var hh = d.getHours();
		var m = d.getMinutes();
		//var s = d.getSeconds();
		var dd = "AM";
		var h = hh;
		if (h >= 12) {
			h = hh-12;
			dd = "PM";
		}
		if (h === 0) {
			h = 12;
		}
		m = m<10?"0"+m:m;

		//s = s<10?"0"+s:s;

		/* if you want 2 digit hours:
		h = h<10?"0"+h:h; */

		var pattern = new RegExp("0?"+hh+":"+m);

		var replacement = h+":"+m;
		/* if you want to add seconds
		replacement += ":"+s;  */
		replacement += " "+dd;
		
		var date = d.toDateString() +' '+replacement;

		return date;
	},

	render: function() {
		var blogposts = [];

		for(var i=0; i<this.state.blogs.length; i++) {
			var post = this.state.blogs[i];
			if(i > 0) {
				blogposts.push(
					<div key={post.id} className="col-md-6 abt-left">
						<img src="images/c-3.jpg" alt="" />
						<h3>{post.title}</h3>
						<p>{post.content}</p>
						<label>Posted by {post.author} on {this.prettyDate(post.datetime)}</label>
					</div>
				);
			}
		}

		return (
			<div className="col-md-8 about-left">
				<div className="about-one">
					<h3>Blog of the month</h3>
				</div>
				<div className="about-two" key={this.state.blogs[0].id}>
					<img src="images/c-1.jpg" alt="" />
					<p>Posted by {this.state.blogs[0].author} on Jul 27 2017 2:18 AM</p>
					<p>{this.state.blogs[0].content}</p>
					<div className="about-btn">
						<Link to="blogpost" params={{id: this.state.blogs[0].id}}>Read More</Link>
					</div>
				</div>
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
