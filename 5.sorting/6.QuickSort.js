/*
    Quick Sort

    Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.

    Working by selecting one element(called the pivot) amd finding the index where the pivot
    should end up in the sorted array.

    Once the pivot is positioned appropriately, quick sort can be applied on either side of
    the pivot.

    Complexity -> O(n * log(n))

*/

function pivot2(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];

  return swapIndex;
}

function quickSort2(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot2(arr, left, right);
    // left
    quickSort2(arr, left, pivotIndex - 1);
    // right
    quickSort2(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort2([4, 8, 2, 1, 5, 7, 6, 3]));
