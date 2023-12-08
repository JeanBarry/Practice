const { test } = require('../../tester');

function solution(message){
  const invertString = (string) => Array.from(string).reverse().join('');
  
  const reverseWords = (string) => {
    let resultString =  string;
    let opening = null;

    for (let i = 0; i < resultString.length; i++) {
      const character = resultString.charAt(i);
      if (character === '(') {
        opening = i;
      } else if (character === ')') {
        const start = opening + 1;
        const subString = resultString.slice(start, i);
        resultString = resultString.slice(0, start - 1) + 
        invertString(subString) + 
        resultString.slice(i + 1);
        i = -1;
      }
    }
    return resultString;
  };

  const reversed = reverseWords(message);
  return reversed;
}

const inputA = 'hola (odnum)';
const resultA = 'hola mundo';

const inputB = '(olleh) (dlrow)!';
const resultB = 'hello world!';

const inputC = 'sa(u(cla)atn)s';
const resultC = 'santaclaus';

const inputD = 'My name is';
const resultD = 'My name is';

const inputE = '((ta)(san))';
const resultE = 'santa';

test(inputA, resultA, solution);
test(inputB, resultB, solution);
test(inputC, resultC, solution);
test(inputD, resultD, solution);
test(inputE, resultE, solution);