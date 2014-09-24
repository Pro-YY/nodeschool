var http = require('http');
var bl = require('bl');
var util = require('util');

var result = {};

function printResult() {
  for (var i = 0; i < 3; i++) {
    console.log(result[process.argv[2+i]]);
  }
}

/*
for (var i = 0; i < 3; i++) {
  http.get(process.argv[2+i], function(res) {
    console.log('i: ' + i);
    console.log('requested url: ' + res.headers.location);
    res.pipe(bl(function(err, data) {
      result[process.argv[2+i]] = data.toString();
      console.log('result length:' + Object.keys(result).length);
      if (Object.keys(result).length === 3) {
        console.log('---- GOT ALL ----\n');
        // printResult();
      }
    }));
  }).on('error', console.error);
}
*/

/*
for (var i = 0; i < 3; i++) {
  (function(i) {
  http.get(process.argv[2+i], function(res) {
    // console.log('i: ' + i);
    // console.log('result: ' + util.inspect(result));
    console.log('requested url: ' + res.headers.location);
    res.pipe(bl(function(err, data) {
      result[process.argv[2+i]] = data.toString();
      console.log('result length:' + Object.keys(result).length);
      if (Object.keys(result).length === 3) {
        console.log('---- GOT ALL ----\n');
        // printResult();
      }
    }));
  }).on('error', console.error);
  })(i);
}
*/

/*
[0, 1, 2].forEach(function (i) {
  http.get(process.argv[2+i], function(res) {
    console.log('requested url: ' + res.headers.location);
    res.pipe(bl(function(err, data) {
      result[process.argv[2+i]] = data.toString();
      console.log('result length:' + Object.keys(result).length);
      if (Object.keys(result).length === 3) {
        console.log('---- GOT ALL ----\n');
        // printResult();
      }
    }));
  }).on('error', console.error);
});
*/

function get(i) {
  http.get(process.argv[2+i], function(res) {
    // console.log('requested url: ' + res.headers.location);
    res.pipe(bl(function(err, data) {
      result[process.argv[2+i]] = data.toString();
      // console.log('result length:' + Object.keys(result).length);
      if (Object.keys(result).length === 3) {
        // console.log('---- GOT ALL ----\n');
        printResult();
      }
    }));
  }).on('error', console.error);
}

for (var i = 0; i < 3; i++) {
  get(i);
}

