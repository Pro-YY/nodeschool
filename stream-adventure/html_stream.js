var through = require('through');
var trumpet = require('trumpet')();
var loud = trumpet.select('.loud').createStream();

loud
.pipe(through(function(buffer) {
  return this.queue(buffer.toString().toUpperCase());
}))
.pipe(loud);
process.stdin.pipe(trumpet).pipe(process.stdout);
