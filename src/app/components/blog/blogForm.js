"use strict";

var React = require('react');
var Input = require('../common/textInput');

var BlogForm = React.createClass({

	render: function() {
		return (
            <div className="blogform">
                <h3>{this.props.header}</h3>
                <form>
                    <Input for="title" label="Title" id="title" type="text" value={this.props.title} onChange={this.props.setBlog} />
                    <Input for="image" label="Header Image (external url)" id="image" type="text" value={this.props.image} onChange={this.props.setBlog} />
                    <Input for="tags" label="Tags (comma seperated)" id="tag" type="text" value={this.props.tags} onChange={this.props.setBlog} />
                    
                    <div className="group">
                        <label htmlFor="content" className="login-label">Content</label>
                        <textarea name="content" onChange={this.props.setBlog} value={this.props.content}></textarea>
                    </div>
                    
                    <div className="about-btn"><a onClick={this.props.postBlog}>Publish</a></div>
                </form>
            </div>
		);
	}
});

module.exports = BlogForm;