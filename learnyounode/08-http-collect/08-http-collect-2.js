var hyperquest = require('hyperquest');
var bl = require('bl');
hyperquest(process.argv[2]).pipe(bl(function (err, data) {
  console.log(data.length);
  console.log(data.toString());
}));
