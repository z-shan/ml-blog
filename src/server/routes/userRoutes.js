var express = require('express');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config');
var apiRoutes = express.Router();

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
    // find the user
    User.findOne({
        email: req.body.username
    }, function(err, user) {

        if (err) throw err;
        
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

        // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secret, {
                    expiresIn: 60*30 // expires in 1 hour
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Login Success.',
                    jwt: token,
                    user: {name: user.name, email: user.email}
                });
            }
        }
    });
});

apiRoutes.post('/isvalidjwt', function(req, res) {
    var token = req.body.jwt;
    jwt.verify(token, config.secret, function(err, decoded) {
        if(err) {
            res.send(false);
        } else {
            res.send(true);
        }
    });
});

apiRoutes.post('/register', function(req, res) {
    var user = new User(req.body);
    user.save(function(err, result) {

        if(err) {
            var msg = '';
            
            if(/duplicate key error/.test(err.errmsg)) {
                msg = 'Email already used';
            }
            res.status(500).send({success: false, err: msg});
        } else {
            res.status(201);
            res.send({success: true});
        }
    });
});

module.exports = apiRoutes;