'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var helper = require('../restHelper');
var AuthAction = require('./authActions');

var InitializeActions = {
    initApp: function() {
        var jwt = localStorage.getItem('jwt');

        if(jwt) {
            helper.post('api/user/isvalidjwt', {jwt: jwt})
                .then(function(data) {
                    if(data === true) {
                        AuthAction.loginUser({jwt: jwt, user: JSON.parse(localStorage.getItem('user'))});
                    } else {
                        localStorage.removeItem('jwt');
                        localStorage.removeItem('user');
                    }
                });
        }

        helper.get('api/blogpost')
            .then(function(data) {
                if(data) {
                    Dispatcher.dispatch({
                        actionType: ActionTypes.INITIALIZE,
                        posts: data
                    });
                }
            });
    }
};

module.exports = InitializeActions;