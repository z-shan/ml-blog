// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var blogpostModel = new Schema({
    title : {type: String, required: true},
    image : {type: String},
    content: {type: String},
    tags : {type: Array},
    username : {type: String},
    author : {type: String},
    datetime : {type: Date}, 
    comments: [{
        content: { type: String, required: true },
        username: { type: String },
        author: {type: String},
        datetime: { type: Date }
    }]
});

module.exports = mongoose.model('blogpost', blogpostModel);