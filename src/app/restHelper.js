var $ = require('jquery');

module.exports = {
    get: function(url) {
        return new Promise(function(success, error) {
            $.ajax({
                url: url,
                dataType: 'json',
                success: success,
                error: error
            });
        });
    },

    post: function(url, data) {
        return new Promise(function(success, error) {
            $.ajax({
                type: "POST",
                url: url,
                dataType: 'json',
                data: data,
                success: success,
                error: error
            });
        });
    },

    put: function(url, data) {
        return new Promise(function(success, error) {
            $.ajax({
                type: "PUT",
                url: url,
                dataType: 'json',
                data: data,
                success: success,
                error: error
            });
        });
    },

    call: function(url, method, data) {
        return new Promise(function(success, error) {
            $.ajax({
                type: method,
                url: url,
                dataType: 'json',
                data: data,
                success: success,
                error: error
            });
        });
    }
};