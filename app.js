var http =require('http');
var express = require('express');
var fs = require("fs");

var app = express();
var server = http.createServer(app);

app.get('/', function(req,res){
    res.send("<h1>Express Works!</h1>");
});
app.get('/tasks', function(req,res){
    fs.readFile('./db.json', function(err,data){
        var task = JSON.parse(data.toString()).task;
        res.json(task);
    })
    // res.send("<h1>Task Work!</h1>");
});

server.listen(3000, function(){
    console.log("Server is responding on 3000");
});


//Creating server using Events
/* var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req,res){
    eventEmitter.emit('someone requested', 'Test'); //Event Trigger
    res.end('Server Works!!');
});


eventEmitter.on('someone requested', function(data){
    console.log("A request has been done!", data);
}); //Event Listner

server.listen(3000, 'localhost', function(){
    console.log('Server started on port : 3000');
}); */

//Another way of creating server

/* //calling http library
var http = require('http');
var url = require('url');

//creating server
var server = http.createServer(function(req,res){
    //setting content header
    res.writeHead(200, ('Content-Type','text/html'));
    var q = url.parse(req.url, true).query;
    var txt = q.year + '' + q.month;
    //send string to response
    res.end(txt);
});

//assigning 8082 as server listening port
server.listen(8082); */