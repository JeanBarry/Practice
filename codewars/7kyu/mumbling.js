const { test } = require('../../tester');

function accum(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    let subString = letter.toLowerCase().repeat(i + 1);
    const upperCaseLetter = subString.slice(0,1).toUpperCase();
    result += upperCaseLetter + subString.slice(1);
    if (i != s.length - 1) {
      result += "-";
    }
  }
  return result;
}

const inputA = 'ZpglnRxqenU';
const resultA = "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu";3
test(inputA, resultA, accum);