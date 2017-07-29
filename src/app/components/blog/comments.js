'use strict';
var React = require('react');

var Comments = React.createClass({
    render: function() {
        var commentsarr = [];

        for(var i=0; i<this.props.comments.length; i++) {
            var comment = this.props.comments[i];
            commentsarr.push(
                <div className="media" key={comment._id}>
                    <div className="media-body">
                        <h4 className="media-heading">{comment.author}</h4>
                        <p>{comment.content}</p>
                    </div>
                    {(this.props.user && comment.username === this.props.user.email) ?
                        <div className="delete-comment" onClick={this.props.deleteComment.bind(null,  comment._id)}><i className="glyphicon glyphicon-trash"></i></div>
                         :
                        null
                    }
                </div>
            );
        }
        return (
            <div className="comments heading">
                <h3>Comments</h3>
                <div>
                    {commentsarr}
                </div>
            </div>
        );
    }
});

module.exports = Comments;