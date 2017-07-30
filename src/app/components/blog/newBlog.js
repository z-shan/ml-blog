"use strict";

var React = require('react');
var BlogForm = require('./blogForm');

var NewBlog = React.createClass({

    getInitialState: function() {
        return {
            blog: {
                title: '',
                image: '',
                content: ''
            }
        };
    },

    setBlog: function(event) {
        this.state.blog[event.target.name] = event.currentTarget.value;
        return this.setState({blog: this.state.blog});
    },

    postBlog: function() {

    },

	render: function() {
		return (
            <BlogForm
                title={this.state.blog.title}
                image={this.state.blog.image}
                content={this.state.blog.content}
                setBlog={this.setBlog}
                postBlog={this.postBlog}/>
		);
	}
});

module.exports = NewBlog;
