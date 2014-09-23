var fs = require('fs');
//var string = fs.readFileSync(process.argv[2], {encoding: 'utf-8'});
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString(); // default utf8
//console.log(str);

num = str.split('\n').length - 1;
console.log(num);
