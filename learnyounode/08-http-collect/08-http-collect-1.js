var http = require('http');
var bl = require('bl');

var buffer = [];
http.get(process.argv[2], function(res) {
  res.on('data', function(data) {
    buffer += data;
  });
  res.on('end', function() {
    console.log(buffer.length);
    console.log(buffer.toString());
  });
}).on('error', console.error);
