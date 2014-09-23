/*
 * http.request http.get
 * request
 * hyperquest
 * 
 * http://stackoverflow.com/questions/12060869/why-is-node-js-only-processing-six-requests-at-a-time
 * agent.maxSockets: By default set to 5. Determines how many concurrent sockets the agent can have open per origin.  
 */
var http = require('http');
// var request = require('request');
var hyperquest = require('hyperquest');
// core http.request : global connection pool, i.e agent, max socket = 5
// request: time 20/5 * 3 = 12
// hyperquest = 3

// as for http, set agent = false, disable pooling, equal effect

var server = http.createServer(function (req, res) {
  // console.log(req.url);
  res.write(req.url.slice(1) + '\n');
  setTimeout(res.end.bind(res), 3000);
});

server.listen(5000, function () {
  var pending = 20;
  for (var i = 0; i < pending; i++) {
    // var r = request('http://localhost:5000/' + i);
    // var r = hyperquest('http://localhost:5000/' + i);
    /*
    r.pipe(process.stdout, { end: false });
    r.on('end', function () {
      if (--pending === 0) server.close();
    });
    */
    var req = http.request({hostname: 'localhost', port: 5000, path: '/' + i, method: 'GET'}, function(res) {
    // var req = http.request({hostname: 'localhost', port: 5000, path: '/' + i, method: 'GET', agent: false}, function(res) {
      res.on('data', function(data) {
        console.log(data.toString());
      });
      res.on('error', console.error);
      res.on('end', function () {
        if (--pending === 0) server.close();
      });
    });
    req.on('error', console.error);
    req.end();
  }
});

process.stdout.setMaxListeners(0); // turn off annoying warnings
