var http = require('http');
var server =http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay');
});

server.listen(1337,'127.0.0.1');