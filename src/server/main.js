var express = require('express');
var path = require('path');
var open = require('open');

var app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(3001, function(err) {
    if(err) {
        console.log(err);
        console.log("hehldlo");
    } else {
        open('http://localhost:'+3001);
    }
});