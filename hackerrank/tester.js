const test = (input, result, func) => {
  const assert = () => {
    try {
      if (func(input) === result) {
        return 'Success';
      }
      return 'Fail';
    } catch (e) {
      console.log(`Exception ocurred`);
      return 'Fail';
    }
  }

  const assertion = assert();
  console.log(assertion);
}

module.exports = {
  test,
};