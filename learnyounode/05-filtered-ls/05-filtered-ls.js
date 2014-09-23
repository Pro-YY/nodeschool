var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, files) {
  files.forEach(function(v, i, a) {
    if (path.extname(v) === '.' + process.argv[3]) {
      console.log(v);
    }
  });
});
