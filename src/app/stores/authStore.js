'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var jwtDecode = require('jwt-decode');
var CHANGE_EVENT = 'change';

var _authToken = null;
var _user = null;

// take empty obj, extend it with eventemitter
var AuthStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAuthToken: function() {
        return _authToken;
    },

    getUser : function() {
        return _user;
    },

    isLoggedIn : function() {
        return !!_user;
    }
});

Dispatcher.register(function(action) {
    //action has 2 properties - (type and data)
    switch(action.actionType) {
        case ActionTypes.USER_AUTHENTICATE:
                _authToken = action.authData.jwt;
                _user = action.authData.user;
                AuthStore.emitChange();
                break;
        case ActionTypes.USER_LOGOUT:
                _authToken = null;
                _user = null;
                AuthStore.emitChange();
                break;
        default:
            // no op
    }
});

module.exports = AuthStore;