"use strict";

var React = require('react');
var Input = require('../common/textInput');

var BlogForm = React.createClass({

	render: function() {
		return (
            <div>
                <h3>New Blog</h3>
                <form>
                    <Input for="title" label="Title" id="title" type="text" value={this.props.title} onChange={this.props.setBlog} />
                    <Input for="image" label="Header Image (imgur url)" id="image" type="text" value={this.props.image} onChange={this.props.setBlog} />
                    
                    <div className="group">
                        <label htmlFor="content" className="login-label">Content</label>
                        <textarea forHtml="content" cols="77" rows="6" onChange={this.props.setBlog} value={this.props.content}></textarea>
                    </div>
                    
                    <input type="submit" value="Send" onClick={this.postBlog} />
                </form>
            </div>
		);
	}
});

module.exports = BlogForm;