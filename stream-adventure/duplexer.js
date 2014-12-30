var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

/*
var child = spawn('ls', ['-lh', '.']);

var dup = duplexer(child.stdin, child.stdout);
child.on('close', function(code) {
  console.log('child process exited with code ' + code);
});
*/
module.exports = function(cmd, args) {
  var child = spawn(cmd, args);
  return duplexer(child.stdin, child.stdout);
};

