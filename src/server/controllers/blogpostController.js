var blogpostController = function(BlogPost) {
    var post = function(req, res) {
        var post = new BlogPost(req.body);

        post.save(function(err, result) {
            if(!err) {
                res.status(201);
                res.send(post);
            }
        });
    };

    var get = function(req, res) {
        BlogPost.find({}, function(err, posts) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(200, posts);
            }
        });
    };

    var getById = function(req, res) {
       
    };

    var patchById = function(req, res) {
       
    };

    var deleteById = function(req, res) {
       
    };

    return {
        get : get,
        post : post,
        getById : getById,
        patchById : patchById,
        deleteById : deleteById
    };
};

module.exports = blogpostController;