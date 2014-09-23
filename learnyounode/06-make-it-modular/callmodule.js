var func = require('./mymodule');

func(process.argv[2], process.argv[3], function(err, files) {
  if (err) return;
  if (files) files.forEach(function(v, i, a) {console.log(v);});
});
