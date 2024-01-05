const numberRegex = /[0-9]/;
const screen = document.querySelector('#screen-text');
const numbers = document.querySelectorAll('.number');
const signs = document.querySelector('#signs');
const ac = document.querySelector('#ac');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');

const getScreenContent = () => screen.textContent;
const clearScreen = () => {
  screen.textContent = '0';
};

const type = key => {
  if (getScreenContent() === '0') {
    screen.textContent = key;
  } else {
    screen.textContent += key;
  }
};

const addOperator = key => {
  const screenContent = getScreenContent();
  const previousCharacter = screenContent[screenContent.length - 1];
  if (previousCharacter.match(numberRegex)) {
    screen.textContent += key;
  }
};

const switchSigns = () => {
  const screenContent = getScreenContent();
  const firstCharacter = screenContent[0];

  if (firstCharacter !== '-' && firstCharacter !== '0') {
    screen.textContent = '-' + screen.textContent;
  } else if (firstCharacter !== '0') {
    screen.textContent = screenContent.slice(1);
  }
};

const calculate = () => {
  /* 
  Note:
  I know eval() is not really a safe function to use with user input
  but I'm also setting rules for input on the other button events
  */
  const screenContent = getScreenContent();
  const replacedOperationString = screenContent.replaceAll('×', '*')
  .replaceAll('÷', '/');
  const result = eval(replacedOperationString);
  screen.textContent = result;
} 

numbers.forEach(number => number.addEventListener('click', 
  e => type(e.target.textContent)
));

operators.forEach(operator => operator.addEventListener('click', 
  e => addOperator(e.target.textContent)
));

ac.addEventListener('click', clearScreen);
signs.addEventListener('click', switchSigns);
equal.addEventListener('click', calculate);