var through2 = require('through2');
var split2 = require('split2');

var b = false;
process.stdin
  .pipe(split2())
  .pipe(through2(function(chunk, enc, cbk) {
    if (!chunk) {
      this.push('');
      return cbk();
    }
    var tr = '';
    if (b) tr = chunk.toString().toUpperCase() + '\n';
    else tr = chunk.toString().toLowerCase() + '\n';
    b = !b;
    this.push(tr);
    cbk();
  }))
  .pipe(process.stdout);
