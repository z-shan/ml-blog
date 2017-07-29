'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _posts = [];

// take empty obj, extend it with eventemitter
var BlogStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllPosts: function() {
        return _posts;
    },

    getPostById: function(id) {
        return _.find(_posts, {_id: id});
    }
});

Dispatcher.register(function(action) {
    //action has 2 properties - (type and data)
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
                _posts = action.posts;
                BlogStore.emitChange();
                break;
        case ActionTypes.POST_COMMENT:
                var idx = _.findIndex(_posts, {_id: action.post._id});
                _posts.splice(idx, 1, action.post);
                BlogStore.emitChange();
                break;
        default:
            // no op
    }
});

module.exports = BlogStore;