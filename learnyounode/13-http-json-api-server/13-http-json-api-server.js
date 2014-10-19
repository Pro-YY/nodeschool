var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET') {
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    if (parsedUrl.pathname === '/api/parsetime') {
      var iso = parsedUrl.query.iso;
      var date = new Date(iso);
      var data = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds() 
      };
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    }
    if (parsedUrl.pathname === '/api/unixtime') {
      var iso = parsedUrl.query.iso;
      var date = new Date(iso);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({unixtime: date.getTime()}));
    }
    else {
      res.writeHead(404);
      res.end();
    }
  }
  else {
    res.writeHead(405).end();
    res.end();
  }
});

server.listen(Number(process.argv[2]));
