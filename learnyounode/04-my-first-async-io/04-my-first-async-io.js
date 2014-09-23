var fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf-8'}, function(err, data) {
  num = data.split('\n').length - 1;
  console.log(num);
});

