const { test } = require('../../tester');

function getDivisorsCnt(n) {
  let divisors = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          if (n / i === i) divisors++;
          else divisors += 2;
      }
  }
  return divisors;
}

const inputA = 30;
const resultA = 8;

test(inputA, resultA, getDivisorsCnt);