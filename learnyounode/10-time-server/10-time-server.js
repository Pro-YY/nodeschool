var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  var str = strftime('%Y-%m-%d %H:%M') + '\n';
  socket.end(str);
});

var port = process.argv[2];
server.listen(port);
