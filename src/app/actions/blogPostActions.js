'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var BlogPostActions = {
    postComment: function(data) {
        Dispatcher.dispatch({
            actionType: ActionTypes.POST_COMMENT,
            post: data
        });
    },

    deleteComment: function(data) {
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COMMENT,
            post: data
        });
    }

};

module.exports = BlogPostActions;