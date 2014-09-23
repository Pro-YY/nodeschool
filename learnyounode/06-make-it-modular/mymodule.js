var fs = require('fs');
var path = require('path');

function filter(dir, ext, cb) {
  fs.readdir(dir, function(err, files) {
    if (err) return cb(err);
    var list = [];
    files.forEach(function(v, i, a) {
      if (path.extname(v) === '.' + ext) {
        list.push(v);
      }
    });
    return cb(null, list);
  });
}

module.exports = filter;
