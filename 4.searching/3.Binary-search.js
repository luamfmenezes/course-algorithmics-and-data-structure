/* 
    Binary search
    Can ne much faster than linear search.
    It's possibile eliminate half of the elements each time.
    Required sorted data.

    Big O - O(log n)
*/

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

function recursiveFindOne(arr, value) {
  if (arr.length === 0) {
    return false;
  }

  const middle = Math.floor((arr.length - 1) / 2);

  if (arr[middle] === value) {
    return true;
  } else if (arr[middle] > value) {
    return recursiveFindOne(arr.slice(0, middle - 1), value);
  } else {
    return recursiveFindOne(arr.slice(middle + 1), value);
  }
}

console.log(recursiveFindOne([1, 2, 4, 6, 7, 8, 10, 11, 12, 14, 16], 6));
