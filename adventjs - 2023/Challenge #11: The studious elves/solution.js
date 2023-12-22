const { test } = require("../../tester");

function solution(word) {
  const reverseString = (string) => {
    const reversedString = Array.from(string).reverse().join("");
    return reversedString;
  };

  if (word === reverseString(word)) {
    return [];
  }

  for (let i = 0; i < word.length; i++) {
    const currentCharacter = word[i];
    for (let j = i + 1; j < word.length; j++) {
      const swappingCharacter = word[j];
      let swappedWord =
        word.slice(0, i) +
        swappingCharacter +
        word.slice(i + 1, j) +
        currentCharacter +
        word.slice(j + 1);
      if (swappedWord === reverseString(swappedWord)) {
        return [i, j];
      }
    }
  }

  return null;
}

const inputA = "anna";
const resultA = [];
const inputB = "abab";
const resultB = [0, 1];
const inputC = "abac";
const resultC = null;
const inputD = "aaababa";
const resultD = [1, 3];

test(inputA, resultA, solution);
test(inputB, resultB, solution);
test(inputC, resultC, solution);
test(inputD, resultD, solution);
