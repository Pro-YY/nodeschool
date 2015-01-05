function getShortMessages(messages) {
  return messages
    .filter(function(v) {return v.message.length < 50})
    .map(function(v) {return v.message});
}

module.exports = getShortMessages;
