/*
    Patterns problem solving

    1.Frequency counter (unofficial name)

    It uses objects or sets to collect values/frequencies of values.
    This can often avoid the need for nested loops or O(n²) operations with arrays/strings.
    Usefull to comparations.

    Example:
    Write a function called same, that compare two arrays and indentify if the secondone
    contain the intens of the first one square.

    same([1,2,3], [4,1,9]) - true
    same([1,2,3],[1,9]) - false
    same([1,2,1], [4,4,1]) - false (must be the same frequency)

*/

// naive approach - O(n²)
function same(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1);
  }
  return true;
}

// Frequency counter
function same(array1, array2) {
  if (array1.length !== array2.length) return false;

  let frequencyConter1 = {};
  let frequencyConter2 = {};

  for (let val of array1) {
    frequencyConter1[val] = (frequencyConter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyConter2[val] = (frequencyConter2[val] || 0) + 1;
  }

  for (let key in frequencyConter1) {
    //if (!(key ** 2 in frequencyConter2)) {
    if (!frequencyConter2[key ** 2]) {
      return false;
    }
    if (frequencyConter2[key ** 2] !== frequencyConter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
