const { test } = require('../../tester');

function solution(movements) {
  let wildCard = 0, distance = 0;
  for (let i = 0; i < movements.length; i++) {
    const currentMovement = movements[i];
    switch(currentMovement) {
      case '>':
        distance += 1;
        break;
      case '<':
        distance -= 1;
        break;
      default:
        wildCard += 1;
    }
  }
    distance = Math.abs(distance);
    distance += wildCard;
    return distance;
}

const inputA = '>>*<';
const resultA = 2;

test(inputA, resultA, solution);