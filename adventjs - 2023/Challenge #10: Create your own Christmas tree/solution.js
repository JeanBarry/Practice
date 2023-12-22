function solution({ ornaments, height }) {
  const getSpaces = (number) => {
    if (number <= 0) {
      return "";
    }
    const spaces = " ".repeat(number);
    return spaces;
  };

  const getTrunk = () => {
    const trunk = getSpaces(height - 1) + "|\n";
    return trunk;
  };

  const ornamentCharacters = Array.from(ornaments);

  const getCharPosition = (startingPosition, size) => {
    const endingPosition =
      (startingPosition + size) % ornamentCharacters.length;
    return endingPosition;
  };

  const getLine = (size, startingPosition) => {
    let line = "";
    let currentPosition = startingPosition;
    for (let i = 0, char = true; i < size * 2 - 1; i++) {
      if (char) {
        line += ornamentCharacters[currentPosition];
        currentPosition = getCharPosition(currentPosition, 1);
        char = false;
      } else {
        line += " ";
        char = true;
      }
    }
    line += "\n";
    return line;
  };

  let tree = "";
  for (let i = 1, charPos = 0; i <= height; i++) {
    const line = getSpaces(height - i) + getLine(i, charPos);
    charPos = getCharPosition(charPos, i);
    tree += line;
  }
  tree += getTrunk();
  return tree;
}
const inputA = { ornaments: "123", height: 4 };
solution(inputA);
