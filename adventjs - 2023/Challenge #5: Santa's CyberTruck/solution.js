const { test } = require('../../tester');

function solution({road, time}) {
  let roadString = road;

  const movement = [];
  movement.push(roadString);

  const replaceCharacter = (string, character, index) => {
    return string.slice(0, index) + character + string.slice(index + 1);
  }

  const openBarriers = road => Array.from(road)
  .map((element => {
    return element === '|' ? '*' : element;
  }))
  .join('');

  let previous = null;

  for (let i = 1, pos = 1, barrier = false; i < time; i++) {
    if (i === 5) {
      roadString = openBarriers(roadString);
    }
    const currentCharacter = roadString[pos];
    
    if (currentCharacter !== '|') {
      if (!previous) {
        previous = '.';
      } else {
        previous = currentCharacter;
        if (barrier) {
          previous = '*';
          barrier = false;
        } else if (previous === '*') {
          previous = '.';
          barrier = true;
        }
      }

      roadString = replaceCharacter(roadString, previous, pos - 1);
      roadString = replaceCharacter(roadString, 'S', pos);
      pos++;
    }
    movement.push(roadString);
  }
  return movement;
}

const inputA = {road: 'S..|...|..' , time: 10 };
const result = [
  'S..|...|..',
  '.S.|...|..',
  '..S|...|..',
  '..S|...|..',
  '..S|...|..',
  '...S...*..',
  '...*S..*..',
  '...*.S.*..',
  '...*..S*..',
  '...*...S..',
];

test(inputA, result, solution);