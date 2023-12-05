const { test } = require('../../tester');

function solution(gifts) {
  const giftsSet = new Set();
  for (const gift of gifts) {
    if (giftsSet.has(gift)) {
      return gift;
    } else {
      giftsSet.add(gift);
    }
  }
  return -1;
}

const inputA = [2, 1, 3, 5, 3, 2];
const resultA = 3;

const inputB = [1, 2, 3, 4];
const resultB = -1;

test(inputA, resultA, solution);
test(inputB, resultB, solution);
