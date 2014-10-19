var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end();
  }
  else {
    req.on('data', function (chunk) {
      res.write(chunk.toString().toUpperCase());
    });
    req.on('end', function () {
      res.end();
    });
  }
});

server.listen(Number(process.argv[2]));
