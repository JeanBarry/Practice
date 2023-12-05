const { test } = require('../../tester');

function solution({original, modified}) {
  if (original.length !== modified.length ) {
    const longest = original.length > modified.length ? original : modified;
    for (let i = 0; i < longest.length; i++) {
      if (original.charAt(i) !== modified.charAt(i)) {
        return longest.charAt(i);
      }
    }
  }
  return '';
}

const inputA = {original: 'abcd', modified: 'abcde'};
const resultA = 'e';

const inputB = {original: 'abcde', modified: 'abcde'};
const resultB = '';

const inputC = {original: '', modified: 'a'};
const resultC = 'a';

const inputD = {original: 'stepfor', modified: 'stepor'}
const resultD = 'f';

test(inputA, resultA, solution);
test(inputB, resultB, solution);
test(inputC, resultC, solution);
test(inputD, resultD, solution);