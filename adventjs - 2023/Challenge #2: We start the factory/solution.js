const { test } = require('../../tester');

function solution({gifts, materials}) {
  const hasMaterials = (gift, materials) => {
    const giftLetters = Array.from(gift);
    for (const letter of giftLetters) {
      if (materials.indexOf(letter) === -1) {
        return false;
      }
    }
    return true;
  };
  let possibleGifts = [];
  for (const gift of gifts) {
    if (hasMaterials(gift, materials)) {
      possibleGifts.push(gift);
    }
  }
  return possibleGifts;
}

const inputA = {gifts: ['tren', 'oso', 'pelota'], materials: 'tronesa'};
const resultA = ['tren', 'oso'];

const inputB = {gifts: ['libro', 'ps5'], materials: 'psli'};
const resultB = [];

test(inputA, resultA, solution);
test(inputB, resultB, solution);