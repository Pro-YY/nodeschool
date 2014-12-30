/*
var rs = process.stdin;
rs.on('data', function(chunk) {
  process.stdout.write(chunk.toString().toUpperCase());
});
rs.on('end', function(chunk) {
  process.exit(0);
});
*/

var through2 = require('through2');
process.stdin
  .pipe(through2(function(chunk, enc, cbk) {
    var tr = chunk.toString().toUpperCase();
    this.push(tr);
    cbk();
  }))
  .pipe(process.stdout);
