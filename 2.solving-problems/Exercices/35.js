/*
    Exercice1.

    Write a function called sameFrequency that given two positives integers,
    find out if the two numbers have the same frequency of digits.

    complexity - O(n)

    Exercice2. 

    implements a function called areThereDuplacates wich accepts a variable number 
    of arguments, and checks wheter ther are any duplicates amoung the arguments
    passed in. You can solve this using Frequency pattern or multiple pointers

    areThereDuplacates(1,2,3) // false
    areThereDuplacates(1,2,2) // true
    areThereDuplacates('a','b','c','a') // true
*/

function sameFrequency(num1, num2) {
  let occurences1 = {};
  num1 = ("" + num1).split("");
  num2 = ("" + num2).split("");

  for (let i = 0; i < num1.length; i++) {
    occurences1[num1[i]] =
      occurences1[num1[i]] > 0 ? ++occurences1[num1[i]] : 1;
  }

  for (let i = 0; i < num2.length; i++) {
    if (occurences1[num2[i]]) {
      occurences1[num2[i]] = --occurences1[num2[i]];
    } else {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(222, 222));

// using frequencyCounter
function areThereDuplacates1() {
  let content = Array.from(arguments);
  let frequency = {};

  for (let i = 0; i < content.length; i++) {
    const caracter = content[i];
    frequency[caracter] = frequency[caracter] ? ++frequency[caracter] : 1;
    if (frequency[caracter] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplacates2(1, 2, 3));
