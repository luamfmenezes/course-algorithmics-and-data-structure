/*
    Selection sort.

    Similar to bubble sort, but insted of first, placing large values into sorted position,
    it places small values into sorted positions.

    It's not so good because the time complexity ~ n²

    Time complexity O(n * m ~ n²)

    comparasion with bubble sort.
    decresi the number of swap.

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = arr[j];
      }
    }
    [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([1, 2, 3, 4, 5, 6, 8, 7, 8, 9]));
