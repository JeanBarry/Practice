const test = (input, result, func, debug = false) => {
  const assert = () => {
    try {
      const functionResult = func(input);
      if (debug) {
        console.log("Result", functionResult);
      }

      if (Array.isArray(result)) {
        if (JSON.stringify(functionResult) === JSON.stringify(result)){
          return 'Success'
        } else {
          return 'Fail';
        }
      }

      if (func(input) == result) {
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