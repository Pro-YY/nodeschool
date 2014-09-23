console.log(process.cwd());
console.log(process.env);
console.log(process.title);
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    process.stdout.write('data: ' + chunk);
});

process.stdin.on('end', function() {
    process.stdout.write('end');
});
