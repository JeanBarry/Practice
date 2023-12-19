const { test } = require('../../tester');

function solution({size, symbol}) {
  const fullBoxSize = size * 2 - 1;
  
  const repeatCharacters = (character, number) => {
    return character.repeat(number);
  };

  const generateSpaces = (number) => {
    return repeatCharacters(' ', number);
  };

  const generateMainBoxLine = (edge, number) => {
    if (edge) {
      return repeatCharacters('#', size);
    }

    return '#' + repeatCharacters(symbol, size - 2) + '#';
  };

  const generateReminder = (number) => {
    if (number === 0) {
      return '\n';
    }

    const reminder = repeatCharacters(symbol, number - 1) + '#\n';
    return reminder;
  }

  let box = '';

  for (let i = 0, reminder = -1; i < fullBoxSize; i++) {
    if (i < size) {
      box += generateSpaces(size - i - 1);
      reminder += 1;
    } else {
      reminder -= 1;
    }

    const isEdge = i === 0 || i === size - 1 || i === fullBoxSize - 1;

    box += generateMainBoxLine(isEdge);
    box += generateReminder(reminder);

  }
  return box;
} 

const inputA = { size: 4, symbol: '+' };
const resultA = `   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n`;

test(inputA, resultA, solution);
