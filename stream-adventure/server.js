var http = require('http');
var through2 = require('through2');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through2(function(chunk, enc, cbk) {
      var tr = chunk.toString().toUpperCase();
      this.push(tr);
      cbk();
    }))
    .pipe(res);
  }
  //res.end('beep boop\n');
});
server.listen(process.argv[2]);

