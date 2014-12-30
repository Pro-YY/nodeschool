var ws = require('websocket-stream');
//var Stream = require('stream');
var wsStream = ws('ws://localhost:8000');

//var s = new Stream();
//process.stdin.pipe(stream);
//s.write('hello\n');
wsStream.end('hello\n');

