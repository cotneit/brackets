module.exports = function check(str, bracketsConfig) {
  const queque = [];
  const brackets = {};

  // create openingBracket: closingBracket pairs
  bracketsConfig.forEach((element) => {
    brackets[element[0]] = element[1];
  })

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (brackets[current] && brackets[current] !== queque[queque.length - 1]) {
      queque.push(current);
    } else if (brackets[queque.pop()] !== current) {
      return false;
    }
  }

  if (queque.length === 0) {
    return true;
  }

  return false;
}
