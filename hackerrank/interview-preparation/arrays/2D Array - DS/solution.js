const { test } = require('../../../tester');

const input = [[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]];

const solution = (matrix) => {

  const findSubMatrix = (yCord, xCord, matrix) => {
    let subMatrix = matrix.slice(yCord, yCord + 3);
    for (let i = 0; i <= 2; i++) {
      subMatrix[i] = subMatrix[i].slice(xCord, xCord + 3);
    }
    return subMatrix;
  };

  const getHourglass = (subMatrix) => {
    const hourglass = subMatrix.flat().filter((_, index) => index !== 3 && index !== 5);
    return hourglass;
  };

  const sumHourglass = (hourglass) => {
    return hourglass.reduce((sum, element) => {
      return sum + element;
    }, 0)
  };

  const hourglassSums = [];

  for (let i = 0; i <= matrix.length - 3; i++) {
    for (let j = 0; j <= matrix.length - 3; j++) {
      const subMatrix = findSubMatrix(i, j, matrix);
      const hourglass = getHourglass(subMatrix);
      const hourglassSum = sumHourglass(hourglass);
      hourglassSums.push(hourglassSum);
    }
  }
  
  return Math.max(...hourglassSums);
}

const result = 28;
test(input, result, solution);

/* 

Notes:

Avoiding next loops such as the getHourglass filter and the sum in the sumHourglass function
could reduce the time complexity although given the matrix size, 
the difference wouldn't be noticeable 

*/