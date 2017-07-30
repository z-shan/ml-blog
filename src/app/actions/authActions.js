'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    loginUser: function(data) {
        localStorage.setItem('jwt', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));
        Dispatcher.dispatch({
            actionType: ActionTypes.USER_AUTHENTICATE,
            authData: data
        });
    },

    logoutUser: function() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');

        Dispatcher.dispatch({
            actionType: ActionTypes.USER_LOGOUT,
            authData: null
        });
    }
};

module.exports = AuthorActions;