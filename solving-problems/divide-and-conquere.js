/*
    Divide and Conquer

    This pattern involves dividing a dataset into smaller chuncks and then repeating
    a process with a subset of data.

    This pattern can tremendously decrease time complexity.

    givin a sorted array of integers, write a function called search, that accepts
    a value and returns the index where the value passed to the function is located.
    if the value is no found, return -1

    search([1,2,3,4,5,6],4) // 3
    search([1,2,3,4,5,6],6) // 5
    search([1,2,3,4,5,6],11) // -1
    
*/

// naive
// Linear search - complexity O(n)
function search(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return -1;
}

// Divide and conquer
// Bynary search - complexity Log(n)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// the two results depends of the arr be sorted.
