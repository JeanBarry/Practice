const { test } = require("../../tester");

function solution(houses) {
  if (houses.length === 0) {
    return 0;
  }

  if (houses.length === 1) {
    return houses[0];
  }

  const sums = [];

  sums[0] = houses[0];
  sums[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < houses.length; i++) {
    sums[i] = Math.max(sums[i - 1], sums[i - 2] + houses[i]);
  }

  const maxGifts = Math.max(sums[sums.length - 1], sums[sums.length - 2]);
  return maxGifts;
}

const inputA = [2, 4, 2];
const resultA = 4;
const inputB = [5, 1, 1, 5];
const resultB = 10;

test(inputA, resultA, solution);
test(inputB, resultB, solution);
