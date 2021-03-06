//Creating server using Events
var http = require('http');
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
});

//Another way of creating server

//calling http library
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
server.listen(8082);

//Method 3 using HTTP
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;

    console.log("Request for" + pathname + "received.");

    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.log(err);
            response.writeHead(404, {'Content-Type':'text/html'});
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(3000);

//app.all() example
app.all('./secret', function(req,res){
    console.log('Accessing the secret section...');
    next() //pass control to next handler.
})

//next() example
app.get('/example/b', function(req,res,next){
        console.log("the response will be sent bu the next function");
        next()
    }, function(res,req){
        res.send("hello from Jetal!");
    }
)

//app.route example
app.route('./book')
    .get(function(req,res){
        res.send('Get a random book');
    })
    .post(function(req,res){
        res.send('Add a book');
    })
    .put(function(req,res){
        res.send('Update the book');
    })

//**** */express.Router
var express = require('express');
var router = express.Router();

//middleware that is specified to this router
router.use(function(req, res, next){
    console.log('Time:', Date.now())
    next()
})
//define a home page route
router.get('./', function(req, res){
    res.send("Birds Home page")
});
//define a about page route
router.get('./about', function(req, res){
    res.send("About Birds")
});

module.exports = router

//Template Engines with Express
app.get('/', function(req,res){
    res.render('index', {title: 'Hey', message : 'Hello there!'})
})
//Declaring HTMLtemplate using JADE
html
    head
        title = title
    body 
        h1 = message
//To render template files, set property 
app.set('views', './views')
app.set('view engine', 'pug')

//******* */Creating server using express
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


//demo mail
/** Module Dependencies */
var express = require('express');
var routes =require('./routes');
var user = require("./routes/user");
var http = require("http");
var path = require('path');
var nodemailer = require('nodemailer');
var app = express();
var xoauth2 = require('xoauth2');

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger(dev));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.router);
app.use(express.static(path.join(_dirname, 'public')));




