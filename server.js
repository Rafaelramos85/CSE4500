'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Errror: file not found');
        } else {
            res.write(data);
        }
        res.end();
    })

}).listen(port);
