var express = require('express');

var routes = function(BlogPost) {
    var blogpostRouter = express.Router();
    var blogpostController = require('../controllers/blogpostController')(BlogPost);

    blogpostRouter.route('/')
        .get(blogpostController.get)
        .post(blogpostController.post);

    // middleware
    blogpostRouter.use('/:blogpostId', function (req, res, next) {
        BlogPost.findById(req.params.blogpostId, function(err, post) {
            if(err) {
                res.status(500).send(err);
            } else if(post) {
                req.post = post;
                next();
            } else {
                res.status(404).send('post not found');
            }
        });
    });
    blogpostRouter.route('/:blogpostId')
        .get(blogpostController.getById)
        .put(blogpostController.updateById)
        .delete(blogpostController.deleteById);

    blogpostRouter.route('/:blogpostId/comment')
        .put(blogpostController.addComment);
    blogpostRouter.route('/:blogpostId/comment/:commentId')
        .delete(blogpostController.deleteComment);

    return blogpostRouter;
};

module.exports = routes;