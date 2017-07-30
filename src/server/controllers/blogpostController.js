var blogpostController = function(BlogPost) {
    var _ = require('lodash');
    var post = function(req, res) {
        var post = new BlogPost(req.body);
        post.datetime = new Date();
        post.tags = req.body.tags.split(',').map(function(item) {
                        return item.trim();
                    });

        post.save(function(err, result) {
            if(!err) {
                res.status(201);
                res.send({success: true, data: post});
            } else {
                res.status(500).send({success: false});
            }
        });
    };

    var getAllPosts = function(req, res) {
        BlogPost.find({}, function(err, posts) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(posts);
            }
        });
    };

    var getPostById = function(req, res) {
        return res.status(200).send(req.post);
    };

    var updatePostById = function(req, res) {
        // only update the required fields
        if(req.body._id) {
            delete req.body._id;
        }
        for(var i in req.body) {
            req.post[i] = req.body[i];
        }

        req.post.save(function(err) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(req.post);
            }
        });
    };

    var deletePostById = function(req, res) {
        req.post.remove(function(err) {
            if(err) {
                res.status(500).send({success: false, err: err});
            } else {
                res.status(200).send({success: true, postId: req.post._id});
            }
        });
        //res.status(200).send({success: true, postId: req.post._id});
    };

    var addComment = function(req, res) {

        req.post.comments.push({
            content: req.body.content,
            username: req.body.username,
            author: req.body.author,
            datetime: new Date()
        });

        req.post.save(function(err, result){
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(req.post);
            }
        });

    };

    var deleteComment = function(req, res) {

        /*req.post.comments.pull({_id: req.params.commentId})
            .save(function(err, result) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send('Comment Deleted');
                }
            });*/
        
            console.log(req.params.commentId);
        BlogPost.findByIdAndUpdate(req.params.blogPostId, {
            '$pull': {
                'comments':{ '_id':  req.params.commentId}
            }
        }, function(err, result){
            console.log(err);
            console.log(result);
            res.send('deleted');
        });

    };

    return {
        get : getAllPosts,
        post : post,
        getById : getPostById,
        updateById : updatePostById,
        deleteById : deletePostById,
        addComment : addComment,
        deleteComment : deleteComment
    };
};

module.exports = blogpostController;