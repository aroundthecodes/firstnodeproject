var http = require('http');
var port = process.env.PORT || 1337;

var server =http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay, welcome to nodejs, git, azure :P');
});

server.listen(port,'127.0.0.1',function () {
    console.log('Server is running at %s:%s '
    ,server.address().address
    ,server.address().port);
});