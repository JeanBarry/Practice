const { test } = require('../../../tester');

// const solution = ({arr, rotations}) => {
//   for (let i = 0; i < rotations; i++) {
//     const el = arr.shift();
//     arr.push(el);
//   }
//   return arr;
// };

// Manual Solution

const solution = ({arr, rotations}) => {
  let resultingArray = [...arr];
  for (let i = 0; i < rotations; i++) {
    const firstElement = resultingArray[0];
    for (let j = 0; j < resultingArray.length - 1; j++) {
      resultingArray[j] = resultingArray[j+1];
    }
    resultingArray[resultingArray.length - 1] = firstElement;
  }

  return resultingArray;
}

const inputA = [1,2,3,4,5];
const inputB = 3;

const result = [4,5,1,2,3];

test({arr: inputA, rotations: inputB}, result, solution);
