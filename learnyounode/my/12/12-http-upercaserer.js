var http = require('http');
var through2Map = require('through2-map');

var server = http.createServer(function (req, res) {
  if (req.method != 'POST') {
    return res.end('post method only\n');
  }
  req.pipe(through2Map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);
