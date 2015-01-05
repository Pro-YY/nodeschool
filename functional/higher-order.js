var foo = function(operation, num) {
  if (num === 1) operation();
  else {
    foo(operation, num-1);
    operation();
  }
}

module.exports = foo;
