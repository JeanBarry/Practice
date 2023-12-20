const { test } = require("../../tester");

function solution(lights) {
  const getFlippedLight = (light) => {
    return light === "🟢" ? "🔴" : "🟢";
  };

  let changes = 0;
  let invertedChanges = 1;
  let previousLight = lights[0];
  let previousInvertedLight = getFlippedLight(lights[0]);

  for (let i = 1; i < lights.length; i++) {
    currentLight = lights[i];
    if (currentLight === previousLight) {
      changes += 1;
      previousLight = getFlippedLight(currentLight);
    } else {
      previousLight = currentLight;
    }

    if (currentLight === previousInvertedLight) {
      invertedChanges += 1;
      previousInvertedLight = getFlippedLight(currentLight);
    } else {
      previousInvertedLight = currentLight;
    }
  }

  const minimumChanges = Math.min(changes, invertedChanges);
  return minimumChanges;
}

const inputA = ["🟢", "🔴", "🟢", "🟢", "🟢"];
const resultA = 1;

const inputB = ["🔴", "🔴", "🟢", "🟢", "🔴"];
const resultB = 2;

const inputC = ["🟢", "🔴", "🔴", "🟢", "🔴", "🟢", "🔴", "🟢", "🔴"];
const resultC = 2;

test(inputA, resultA, solution);
test(inputB, resultB, solution);
test(inputC, resultC, solution);
