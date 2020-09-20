/*
    Exercice 1.
    Write a recursive function called reverse which accepts a string and returns a new string in reverse.  
    
    reverse('awesome') - 'emosewa'
    reverse('rithmschool') - 'loohcsmhtir'

    Exercice 2.

    Writhe a recursive function called isPalindrome which returns true if the string passed to it is a 
    palindrome(reads as same from back to front), otherwise return false.

    isPalindrome('awesome')  false
    isPalindrome('foobar')  false
    isPalindrome('tacocat')  true

    Exercice 3.

    Write a recursive function called someRecursive which accepts an array and a callback. the function return
    true if a single value in the array returns true when passed to the callback, otherwise returns false.

    const isOdd = val => val % 2 !== 0;

    someRecursive([1,2,3,4], isOdd)  true
    someRecursive([4,6,8,9], isOdd)  true
    someRecursive([4,6,8], isOdd)  false
    someRecursive([4,6,8], val => val > 10);  false

    Exercice 4.

    Write a recursive function called flatten which accepts an array of arrays and returns a new array
    with all values flattened.

    flatten([1, 2, 3, [4, 5] ])  [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]])  [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]])  [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])  [1,2,3

    Exercice 4.
    Write a function called capitalizeFirst that capitalize the first letter 

    // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

//  ------------------------------------------- Inputs

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

function isOdd(val) {
  return val % 2 !== 0;
}

//  ------------------------------------------- Functions

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  const firstLetter = arr[0][0];
  const restOfWord = arr[0].slice(1);
  const firstLetterCapital = firstLetter.toUpperCase();
  const firstWordCapitalized = firstLetterCapital + restOfWord;
  return [firstWordCapitalized].concat(capitalizeFirst(arr.slice(1)));
}

function nestedEvenSum(obj, totalNumbers = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      totalNumbers += obj[key];
    } else if (typeof obj[key] === "object") {
      totalNumbers += nestedEvenSum(obj[key]);
    }
  }

  return totalNumbers;
}

// this function could call firstCaracterEqualLast.
function isPalindrome(str) {
  if (str.length === 0) return true;
  const firstEqualLast = str[0] === str[str.length - 1];
  if (!firstEqualLast) return false;
  return firstEqualLast && isPalindrome(str.slice(1, -1));
}

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  if (callback(arr[0]) === true) return true;

  return someRecursive(arr.slice(1), callback);
}

function flatten(arr, out = []) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArray.push(arr[i]);
    } else {
      newArray.push(...flatten(arr[i]));
    }
  }
  return newArray;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
