const { test } = require('../../tester');

function findSmallestInt(args){
    return Math.min(...args);
}

const inputA = [78,56,232,12,18];
const resultA = 12;

test(inputA, resultA, findSmallestInt);