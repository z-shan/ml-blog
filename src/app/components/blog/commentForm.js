"use strict";

var React = require('react');
var helper = require('../../restHelper');
var BlogPostActions = require('../../actions/blogPostActions');
var toastr = require('toastr');

var CommentForm = React.createClass({

    getInitialState: function() {
        return {
            comment: '',
            postid: null,
            user: null
        };
    },

    componentWillMount: function() {
        this.setState({postid: this.props.postid, user: this.props.user});
    },

    onChange: function(event) {
        this.setState({comment : event.currentTarget.value});
    },

    submitComment: function(event) {
        event.preventDefault();

        var data = {
            content: this.state.comment,
            username: this.state.user.email,
            author: this.state.user.name
        };

        var control = this;
        helper.put('/api/blogpost/'+this.state.postid+'/comment', data)
            .then(function(data) {
                console.log(data);
                if(data) {
                   BlogPostActions.postComment(data);
                    toastr.success('Thanks for posting your comment !!');
                    control.setState({comment: ''});
                } else {
                    //control.setState({loginerror: true});
                }
            });
    },

	render: function() {
        return (
            <div className="comment-bottom heading">
                <h3>Leave a Comment</h3>
                <form>
                    <textarea cols="77" rows="6" onChange={this.onChange} value={this.state.comment}></textarea>
                    <input type="submit" value="Send" onClick={this.submitComment} />
                </form>
            </div>
        );
	}
});

module.exports = CommentForm;