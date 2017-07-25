// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var userModel = new Schema({
    name : {type : String, required: true},
    email : {type : String, unique: true, required: true },
    password : {type : String, required: true}
});

module.exports = mongoose.model('user', userModel);