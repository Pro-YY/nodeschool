pets = ['cat', 'dog', 'rat'];
pets.forEach(function(p, i, a) {
  a[i] = p + 's';
});
console.log(pets);
