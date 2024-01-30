const { test } = require("../../tester");

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

const inputA = 2;
const resultA = "Even";
const inputB = -42;
const resultB = "Even";
const inputC = 7;
const resultC = "Odd";

test(inputA, resultA, evenOrOdd);
test(inputB, resultB, evenOrOdd);
test(inputC, resultC, evenOrOdd);
