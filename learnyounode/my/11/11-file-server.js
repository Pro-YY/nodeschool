var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var reqFile = process.argv[3];
var server = http.createServer(function (req, res) {
  fs.createReadStream(reqFile).pipe(res);
});
server.listen(port);
