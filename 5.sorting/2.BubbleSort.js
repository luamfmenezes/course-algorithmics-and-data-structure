/*
    
    Bubble Sort
    It's no soo commun and not soo efficient.

    Bio complexity - O(n²)
    For nearly sorted data ~ O(n)

*/

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// optimization of bubble sort, its good for almost sorted data
function optmizedBubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let hasSomeChange = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSomeChange = true;
      }
    }
    if (!hasSomeChange) {
      break;
    }
  }
  return arr;
}

// it will run arr.length times.
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 8, 7, 8, 9]));
// it will run only two times, because the second time dind do any changes.
console.log(optmizedBubbleSort([1, 2, 3, 4, 5, 6, 8, 7, 8, 9]));
