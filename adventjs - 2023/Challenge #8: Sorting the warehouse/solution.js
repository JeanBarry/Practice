const { test } = require('../../tester.js');

const solution = (gifts) => {
  let giftString = gifts;
  let organizedGifts = '';

  const getNextGift = (giftString) => {
    let quantity = '';
    for(let i = 0; i < giftString.length; i++) {
      const character = giftString[i];
      if (isNaN(Number(character))) {
        const gift = character;
        const remainingString = giftString.slice(i+1); 
        return {
          gift,
          quantity: Number(quantity),
          remainingString,
        }
      }
      quantity += character;
    }
  };

  const pack = (package, amount, gift) => {
    const options = {
      pallet: {
        start: '[',
        end: ']',
      },
      box: {
        start: '{',
        end: '}',
      },
      bag: {
        start: '(',
        end: ')',
      },
    };


    const packaging = options[package];

    let pack = '';
    if (amount === 0) {
      return pack;
    }

    if (package === 'bag') {
      pack = (packaging.start + gift.repeat(amount) + packaging.end);
    } else {
      pack = (packaging.start + gift + packaging.end).repeat(amount);
    }
    return pack;
  }

  const packGifts = (gift, amount) => {
    let reminder = amount;
    const pallets = Math.floor(reminder/50);
    reminder = reminder%50;
    const boxes = Math.floor(reminder/10);
    reminder = reminder%10;
    const bags = reminder;

    const gifts = pack('pallet', pallets, gift) + pack('box', boxes, gift) + pack('bag', bags, gift);
    return gifts;
  };


  do {
    const {remainingString, gift, quantity}= getNextGift(giftString);
    giftString = remainingString;
    const packages = packGifts(gift, quantity);
    organizedGifts += packages;
  } while(giftString.length > 0);

  return organizedGifts;
};

const inputA = '76a11b';
const resultA = '[a]{a}{a}(aaaaaa){b}(b)';

const inputB = '20a';
const resultB = '{a}{a}';

test(inputA, resultA, solution);
test(inputB, resultB, solution);
