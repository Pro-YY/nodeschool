var http = require('http');
var bl = require('bl');
var count = 0;
var results = [];

var makeReq = function (idx) {
  http.get(process.argv[idx+2], function (res) {
      res.pipe(bl(function (err, data) {
        results[idx] = data.toString();
        count++;
        // reorder
        if (count === 3) {
          for (var i = 0; i < 3; i++) {
            console.log(results[i]);
          };
        }
      }));
  });
};

for (var i = 0; i < 3; i++) {
  makeReq(i);
};
