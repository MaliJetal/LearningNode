var http = require('http');

var server = http.createServer(function(req,res){
    res.end('Server Works!!');
});
server.listen(3000, 'localhost', function(){
    console.log('Server started on port : 3000');
})