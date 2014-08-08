var http = require('http');

var url = process.argv[2];
var req = http.request(url, function (res) {
  //console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (str) {
    console.log(str);
  });
  res.on('err', function () {
    console.log('problem with response: ' + e.message);
  });
  res.on('end', function () {
  });
});

req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
});

req.end();