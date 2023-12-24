const { test } = require('../../tester');

function solution({ original, copy }) {
    const degradingRegex = ['A-Z', 'a-z', '#', '+', ':', '.', '\s'];

    const degrade = (character, currentDegradingIndex) => {
        switch (currentDegradingIndex) {
            case 0:
                return character.toLowerCase();
            case 1:
                return '#';
            case 2:
                return '+';
            case 3:
                return ':';
            case 4:
                return '.';
            case 5:
                return ' ';
            default:
                return false;
        }
    };

    const findDegradationIndex = (character) => {
        for (let i = 0; i < degradingRegex.length; i++) {
            const regex = new RegExp(`[${degradingRegex[i]}]`);
            const match = regex.test(character);
            if (match) {
                return i;
            }
        }
        return -1;
    }

    const letterIsDegraded = (originalCharacter, copiedCharacter) => {
        const currentDegradingIndex = findDegradationIndex(originalCharacter);
        if (currentDegradingIndex < 0) {
            return false;
        }
        for (let i = currentDegradingIndex; i < 6; i++) {
            let degradedCharacter = degrade(originalCharacter, i);
            if (degradedCharacter === copiedCharacter) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < original.length; i++) {
        const originalCharacter = original[i];
        const copiedCharacter = copy[i];
        if (originalCharacter !== copiedCharacter) {
            const isDegraded = letterIsDegraded(originalCharacter, copiedCharacter);
            if (!isDegraded) {
                return false;
            }
        }
    }
    return true;
}

const inputA = { original: 'Santa Claus is coming', copy: 'sa#ta Cl#us i+ comin#' };
const resultA = true;
const inputB = { original: 's#nta Cla#s is coming', copy: 'p#nt: cla#s #s c+min#' };
const resultB = false;
const inputC = { original: 'Santa Claus', copy: 's#+:. c:. s' };
const resultC = true;
const inputD = { original: 'Santa Claus', copy: 's#+:.#c:. s' };
const resultD = false;

test(inputA, resultA, solution);
test(inputB, resultB, solution);
test(inputC, resultC, solution);
test(inputD, resultD, solution);
