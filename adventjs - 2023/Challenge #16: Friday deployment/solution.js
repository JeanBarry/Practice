const { test } = require("../../tester");

function solution(tree) {}

const inputA = [3, 1, 0, 8, 12, null, 1];
const resultA = {
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 12,
      left: null,
      right: null,
    },
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};
