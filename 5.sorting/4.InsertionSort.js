/*
    Insertion sort

    Builds up the sort by gradually creating a large left half which is always
    sorted

    [5,3,4,1,2] 

*/

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    for (var j = i - 1; j >= 0; j--) {
      if (currentValue < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = currentValue;
        break;
      }
    }
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 3, 5, 3, 4]));
