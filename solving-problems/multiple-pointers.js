/*
    Multiple pointers

    create pointers or values that correspond to an index or position and move
    towards the beginning, end or middle based on a certain condition.

    Very efficient for solving problems with minimal space camplexity as well.

    Example:

    Write a function called sumZero which accepts a sorted array of integers.
    The function should find the first pair where the sum is 0.
    Return  an array that includes both values that sum to zero or undefined if a 
    pair does not exist.

    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
    sumZero([-2,0,1,3]) // [-3,3]
    sumZero([1,2,3]) // [-3,3]
*/

// naive - O(n²)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let y = i; y < arr.length; y++) {
      if (arr[i] + arr[y] === 0) {
        return [arr[i], arr[y]];
      }
    }
  }
  return undefined;
}

// multiple pointers - O(n)

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// great ways to find minimal and optimos.

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
