"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var BlogStore = require('../../stores/blogStore');
var AuthStore = require('../../stores/authStore');
var utility = require('../../utility');
var CommentForm = require('./commentForm');
var Comments = require('./comments');
var helper = require('../../restHelper');
var BlogPostActions = require('../../actions/blogPostActions');
var toastr = require('toastr');

var BlogPost = React.createClass({

	getInitialState: function() {
		return {
			post : null
		};
	},

	componentWillMount: function() {
		var postId = this.props.params.id; // from the path '/author:id'
		if(postId) {
			this.setState({post: BlogStore.getPostById(postId)});
		}
		BlogStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		BlogStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({post: BlogStore.getPostById(this.state.post._id)});
	},

	deleteComment: function(e) {
		console.log(e);
		helper.call('/api/blogpost/'+this.state.post._id+'/comment/'+e, 'DELETE', null)
			.then(function(data) {
				//console.log(result);
				console.log(data);
				if(data) {
					BlogPostActions.deleteComment(data);
					toastr.success('Comment deleted.');
				} else {
					//control.setState({loginerror: true});
				}
			});
	},

	render: function() {
		return (
			<div className="single">
				<div className="container">
					<div className="single-top">
						<div className="bpostwrap">
							<img className="img-responsive" src="/images/single-1.jpg" alt=" " />
							<div className=" single-grid">
								<h4>{this.state.post.title}</h4>			
								<ul className="blog-ic">
									<li><span> <i  className="glyphicon glyphicon-user"></i>{this.state.post.author}</span></li>
									<li><span><i className="glyphicon glyphicon-time"></i>{utility.prettyDate(this.state.post.datetime)}</span></li>		  						 	
									<li><span><i className="glyphicon glyphicon-eye-open"></i>Hits:145</span></li>
								</ul> 						
								<p>{this.state.post.content}</p>
							</div>
						</div>
						{this.state.post.comments.length > 0 ?
							<Comments comments={this.state.post.comments} deleteComment={this.deleteComment} user={AuthStore.getUser()}/> :
							<div></div>
						}
						{AuthStore.isLoggedIn() ?
							<CommentForm postid={this.state.post._id} user={AuthStore.getUser()} /> :
							<div className="about-btn"><Link to="login">Login to Comment</Link></div>
						}
					</div>	
				</div>					
			</div>
		);
	}
});

module.exports = BlogPost;
