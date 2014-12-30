var WebSocketServer = require('ws').Server;
var websocket = require('websocket-stream');

/*
var http = require('http');
var server = http.createServer(function (req, res) {
  res.end('beep boop\n');
});

var wss = new WebSocketServer({server: server});
*/
// no need to attach a http server
var wss = new WebSocketServer({port:8000});
wss.on('connection', function(ws) {
  console.log('a client connected');
  ws.on('message', function(data) {
    console.log(data);
  });
});

//server.listen(process.argv[2]);
