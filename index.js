// Import required modules
var express = require('express');
var app = express();
var path = require("path");
var serveStatic = require('serve-static');

// Setup server port
var port = process.env.PORT || 8087;

// app.use(serveStatic('/', { 'index': ['default.html', 'default.htm'] }));

// app.use(serveStatic(path.join(__dirname, 'assets')));
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/assets'));

// app.use(express.static('/'));
// app.use(express.static('assets'));
// Web routes
// app.use('/static', express.static(path.join(__dirname, '/assets')))
app.get('/', function (req, res) {

    res.sendFile('index.html');

});
app.get('/fixed-invoice', function (req, res) {
    res.sendFile(path.join(__dirname + '/fixed-invoice.html'));
});


app.get('/fluid-invoice', function (req, res) {
    res.sendFile(path.join(__dirname + '/fluid-invoice.html'));
});

app.listen(port, function () {
    console.log("Running on port " + port);
});