var express = require('express');

var routes = function(BlogPost) {
    var blogpostRouter = express.Router();
    var blogpostController = require('../controllers/blogpostController')(BlogPost);

    blogpostRouter.route('/')
        .get(blogpostController.get)
        .post(blogpostController.post);

    // middleware
    blogpostRouter.use('/:postId', function (req, res, next) {
        BlogPost.findById(req.params.postId, function(err, post) {
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
        .patch(blogpostController.patchById)
        .delete(blogpostController.deleteById);

    return blogpostRouter;
};

module.exports = routes;