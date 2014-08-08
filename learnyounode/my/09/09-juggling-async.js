var http = require('http');
var bl = require('bl');
var count = 0;
var resQ = [];

var cbk = function (msg) {
  // console.log('cbk done: ' + msg);
  if (count === 3) {
    // console.log('ALL cbk done!');
    for (var i = 0; i < 3; i++) {
      console.log(resQ[i].toString());
    }
  }
};

var makeReq = function (idx, url, cbk) {
  http.get(url, function (res) {
      res.pipe(bl(function (err, data) {
        // console.log(idx + ' ' + url + ': ' + data.length);
        resQ[idx] = data;
      }));
      res.on('end', function () {
        // console.log(url + ': res end');
        count++;
        // console.log('count: ' + count);
        cbk(url);
      });
  });
};

for (var i = 0; i < 3; i++) {
  makeReq(i, process.argv[i+2], cbk);
};
