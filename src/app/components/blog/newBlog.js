"use strict";

var React = require('react');
var BlogForm = require('./blogForm');
var helper = require('../../restHelper');
var toastr = require('toastr');
var BlogPostActions = require('../../actions/blogPostActions');
var AuthStore = require('../../stores/authStore');

var NewBlog = React.createClass({

    getInitialState: function() {
        return {
            blog: {
                title: '',
                image: '',
                content: '',
                tags: ''
            }
        };
    },

    setBlog: function(event) {
        this.state.blog[event.target.name] = event.currentTarget.value;
        return this.setState({blog: this.state.blog});
    },

    postBlog: function(event) {
        event.preventDefault();

        var user = AuthStore.getUser();
        var data = Object.assign({}, this.state.blog, {username: user.email, author: user.name});

        var control = this;
        helper.call('/api/blogpost', 'POST', data)
            .then(function(result) {
                if(result.success) {
                    BlogPostActions.publishBlog(result.data);
                    toastr.success('Thanks for publishing your blog.');
                    control.setState({blog: {title: '',image: '',content: '',tags: ''}});
                } else {
                    toastr.error('Sorry could not publish your blog. Please try again.');
                }
            });
    },

	render: function() {
		return (
            <BlogForm
                title={this.state.blog.title}
                image={this.state.blog.image}
                content={this.state.blog.content}
                tags={this.state.blog.tags}
                setBlog={this.setBlog}
                postBlog={this.postBlog}/>
		);
	}
});

module.exports = NewBlog;
