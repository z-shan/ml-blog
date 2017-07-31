"use strict";

var React = require('react');
var BlogForm = require('./blogForm');
var helper = require('../../restHelper');
var toastr = require('toastr');
var BlogPostActions = require('../../actions/blogPostActions');
var AuthStore = require('../../stores/authStore');
var BlogStore = require('../../stores/blogStore');

var NewBlog = React.createClass({

    getInitialState: function() {
        return {
            blog: {
                _id: '',
                title: '',
                image: '',
                content: '',
                tags: ''
            }
        };
    },

    componentWillMount: function() {
        var postId = this.props.params.id; // from the path '/post:id'

        if(postId) {
            this.setState({blog: BlogStore.getPostById(postId)});
        }
    },

    setBlog: function(event) {
        this.state.blog[event.target.name] = event.currentTarget.value;
        return this.setState({blog: this.state.blog});
    },

    postBlog: function(event) {
        event.preventDefault();

        var user = AuthStore.getUser();
        var data = (!this.state.blog._id) ? Object.assign({}, this.state.blog, {username: user.email, author: user.name}) : this.state.blog;

        var control = this;

        var method = 'POST',
            url = '/api/blogpost',
            msg = 'Thanks for publishing your blog.',
            errmsg = 'Sorry could not publish your blog. Please try again.';

        if(this.state.blog._id) {
            method = 'PUT';
            url += '/'+this.state.blog._id;
            msg = 'Your blog is saved.';
            errmsg = 'Could not save your blog. Please try again.';
        } else {
            delete data._id;
        }

        helper.call(url, method, data)
            .then(function(result) {
                if(result.success) {
                    BlogPostActions.publishBlog(result.data);
                    toastr.success(msg);
                    control.setState({blog: {title: '',image: '',content: '',tags: ''}});
                } else {
                    toastr.error(errmsg);
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
                postBlog={this.postBlog}
                header={this.state.blog._id ? "Edit Blog" : "New Blog"} />
		);
	}
});

module.exports = NewBlog;
