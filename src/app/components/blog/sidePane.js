"use strict";

var React = require('react');
var Link = require('react-router').Link;
var _ = require('lodash');
//var utility = require('../../utility');

var SidePane = React.createClass({

	render: function() {
        var archives = _.filter(this.props.blogs, function(blog) {
            var blogdate = new Date(blog.datetime);
            var today = new Date();
            return ((today - blogdate) / (1000 * 3600 * 24*365)) > 1;
        }).slice(0, 10);

        var archivedposts = [];
        for(var i=0; i<archives.length; i++) {
            archivedposts.push(
                <li><Link to="blogpost" params={{id: archives[i]._id}}>{archives[i].title.toLowerCase()}</Link></li>
            );
        }

        var interestingBlogs = [];
        if(this.props.user) {
            var userInterests = this.props.user.interests.toLowerCase().split(',').map(function(item) {
                return item.trim();
            });

            var interestedPosts = _.filter(this.props.blogs, function(blog) {
                for(var i=0; i<blog.tags.length; i++) {
                    return userInterests.indexOf(blog.tags[i].toLowerCase()) !== -1;
                }
            }).slice(0, 5);

            for(var j=0; j<interestedPosts.length; j++) {
                interestingBlogs.push(
                    <div className="might-grid">
                        <Link to="blogpost" params={{id: interestedPosts[j]._id}}>
                            <div className="grid-might">
                                <img src={interestedPosts[j].image || "images/c-12.jpg"} className="img-responsive" />
                            </div>
                            <div className="might-top">
                                <h4>{interestedPosts[j].title.toLowerCase()}</h4>
                            </div>
                            <div className="clearfix"></div>
                        </Link>
                    </div>
                );
            }
        }

		return (
			<div className="col-md-4 about-right heading">
                <div className="abt-1">
                    {this.props.isLoggedIn ?
                        <div className="about-btn"><Link to="post">Post Blog</Link></div> :
                        <div className="about-btn"><Link to="login">Login to post Blog</Link></div>
                    }
                </div>
                {interestingBlogs.length > 0 ?
                    <div className="abt-2">
                        <h3>YOU MIGHT ALSO LIKE</h3>
                        {interestingBlogs} 							
                    </div>:
                    null
                }
                
                <div className="abt-2">
                    <h3>ARCHIVES</h3>
                    <ul>
                        {archivedposts}
                    </ul>
                </div>
            </div>
		);
	}
});

module.exports = SidePane;
