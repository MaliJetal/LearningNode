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