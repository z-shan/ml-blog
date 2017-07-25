var express = require('express');
var path = require('path');
var open = require('open');

var app = express();

var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var config = require('./config'); // get our config file

// configuration 
var port = process.env.PORT || 3001; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use('/api/user', require('./routes/userRoutes'));

var BlogPost = require('./models/blogpost');
app.use('/api/blogpost', require('./routes/blogpostRoutes')(BlogPost));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    }/* else {
        open('http://localhost:'+port);
    }*/
});