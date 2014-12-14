var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(chunk) {
    console.log(chunk.toString().split('').reverse().join(''));
  }));
