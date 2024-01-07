const { test } = require('../../tester');

function count(string) {
  const counted = {};

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (counted[letter]) {
      counted[letter]++;
    } else {
      counted[letter] = 1;
    }
  }

  return counted;
}

const inputA = 'aba';
const resultA = {
  a: 2,
  b: 1,
};

test(inputA, resultA, count, true);