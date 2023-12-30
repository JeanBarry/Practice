const { test } = require("../../tester");
function solution({ store, movements }) {
  const storeMatrix = store;
  const findStart = () => {
    for (let i = 0; i < storeMatrix.length; i++) {
      for (let j = 0; j < storeMatrix[i].length; j++) {
        if (storeMatrix[i][j] === "!") {
          return [i, j];
        }
      }
    }
  };

  const move = (currentPosition, movement) => {
    const [i, j] = currentPosition;
    const currentRow = storeMatrix[i];
    switch (movement) {
      case "R":
        if (j + 1 < currentRow.length && storeMatrix[i][j + 1] !== "*") {
          return [i, j + 1];
        }
        break;
      case "L":
        if (j - 1 >= 0 && storeMatrix[i][j - 1] !== "*") {
          return [i, j - 1];
        }
        break;
      case "U":
        if (i - 1 >= 0 && storeMatrix[i - 1][j] !== "*") {
          return [i - 1, j];
        }
        break;
      case "D":
        if (i + 1 < storeMatrix.length && storeMatrix[i + 1][j] !== "*") {
          return [i + 1, j];
        }
        break;
    }
    return currentPosition;
  };

  const exchangePositions = (startingPosition, endingPosition) => {
    const [iStart, jStart] = startingPosition;
    const [iEnd, jEnd] = endingPosition;
    if (iStart === iEnd && jStart === jEnd) {
      return;
    }

    const startingRow = storeMatrix[iStart];
    const endingRow = storeMatrix[iEnd];

    if (iStart === iEnd) {
      const newRow = startingRow.slice(0,jStart) + '.' + startingRow.slice(jStart + 1, jEnd) + '!' + startingRow.slice(jEnd + 1);
      storeMatrix[iStart] = newRow;
      return;
    }
    const newStartingRow =
      startingRow.slice(0, jStart) + "." + startingRow.slice(jStart + 1);
    const newEndingRow =
      endingRow.slice(0, jEnd) + "!" + endingRow.slice(jEnd + 1);

      storeMatrix[iEnd] = newEndingRow;
      storeMatrix[iStart] = newStartingRow;
  };

  const startingPosition = findStart();

  let currentPosition = startingPosition;

  for (let i = 0; i < movements.length; i++) {
    const nextMove = movements[i];
    currentPosition = move(currentPosition, nextMove);
  }

  exchangePositions(startingPosition, currentPosition);
  return storeMatrix;
}

const inputA = {
  store: ["..!....", "...*.*."],
  movements: ["R", "R", "D", "L"],
};
const resultA = [".......", "...*!*."];
test(inputA, resultA, solution);
