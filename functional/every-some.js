function checkUsersValid(goodUsers) {
  return function(testUsers) {
    return testUsers.every(function(testUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === testUser.id;
      });
    });
  };
}
module.exports = checkUsersValid;
