function doubleAll(numbers) {
  return numbers.map(function(v, i, a) {
    return v*2;
  });
}

module.exports = doubleAll;
