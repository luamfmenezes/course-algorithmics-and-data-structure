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

 */

//  ------------------------------------------- Inputs

function isOdd(val) {
  return val % 2 !== 0;
}

//  ------------------------------------------- Functions

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
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
