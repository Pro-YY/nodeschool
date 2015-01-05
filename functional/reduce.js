function countWords(inputWords) {
  return inputWords.reduce(function(p, c, i, a) {
    p[c] = ++p[c] || 1;
    return p;
  }, {});
}

module.exports = countWords;
