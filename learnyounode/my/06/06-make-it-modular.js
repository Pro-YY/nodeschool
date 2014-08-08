var util = require('util');
var filterFile = require('./06-module');
var dir = process.argv[2];
var ext = process.argv[3];

filterFile(dir, ext, function (err, list) {
  if (err) {
    util.error('An Error Occured: ' + err);
  }
  else {
    list.forEach(function (file) {
      util.puts(file);
    });
  }
});
