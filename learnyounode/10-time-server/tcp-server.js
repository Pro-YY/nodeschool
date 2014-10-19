var net = require('net');

var server = net.createServer();

server.on('connection', function (socket) {
  console.log('a client connected');
  socket.on('data', function (data) {
    console.log('server received: ' + data.toString());
    socket.write(data);
  });
  socket.on('close', function () {
    console.log('client closed');
  });
});

server.on('listening', function () {
  console.log('server listening');
});

server.on('error', function (err) {
  console.log('ERROR: ' + err);
});

server.listen('./tmp.sock');
