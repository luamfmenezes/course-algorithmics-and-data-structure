/*
    Helper method recursion

    Use external data strcuture and nested function.
    It's a nice whay to storage the recursion data into a variable.

    Type for pure Recursion
    
    For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you
    do not mutate them.

    Strings are immutable so you will need to use methods like slice, substr or substring to make copies
    of strings.

    To make copies of objects use Object.assign or the spreed operator.

*/

// Pure recursion
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  return newArr.concat(collectOddValues(arr.slice(1)));
}

// Helper method recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(result.push(helperInput[0]));
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
