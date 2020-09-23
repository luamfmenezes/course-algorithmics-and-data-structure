/*
    Merge sort.
  
    it's much more faster that those before, but have a harder implementation.
    Perform very well with a lot of data > 100k

    Complexity -> O(n * log(n))
    n -> cames from the comparations in merge

    Space complexity -> O(n)

    Merge()
    this should be O(n + m) ~ O(n)

*/

function merge(arr1, arr2) {
  arr1 = typeof arr1 === "number" ? [arr1] : arr1;
  arr2 = typeof arr2 === "number" ? [arr2] : arr2;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  if (arr1[0] < arr2[0]) {
    return [arr1[0], ...merge(arr1.slice(1), arr2)];
  }

  return [arr2[0], ...merge(arr1, arr2.slice(1))];
}

function merge2(arr1, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let result = [];

  while (true) {
    if (pointer1 === arr1.length - 1) {
      result.push(...arr2.slice(pointer2));
      break;
    }
    if (pointer2 === arr2.length - 1) {
      result.push(...arr1.slice(pointer1));
      break;
    }
    if (arr1[pointer1] < arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }

  return result;
}

// my implementation
function mergeSort(arr) {
  let newArrays = [];

  if (arr.length <= 1) return arr[0];

  for (let i = 0; i < arr.length - 1; i = i + 2) {
    newArrays.push(merge(arr[i], arr[i + 1]));
  }

  if (arr.length % 2 !== 0) {
    newArrays.push(arr[arr.length - 1]);
  }

  return mergeSort(newArrays);
}

function mergeSort2(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(
  mergeSort2([1, 10, 13, 12, 50, 2, 5, 14, 99, 100, 24, 32, 12, 66, 34])
);
