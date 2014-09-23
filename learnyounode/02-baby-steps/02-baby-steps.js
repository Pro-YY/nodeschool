var sum = 0;
process.argv.slice(2).forEach(function (a) {
  sum += Number(a);
});
console.log(sum);
