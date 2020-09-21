/*
    Radix Sort

    The previous items referem to comparasion sorts.
    It's commum to be O(n²) and in the best case is O(n * log(n))

    Radix sort is a no comparassion algorithmis and it's restrict to numbers.

    n -> total of sorting items
    k -> order of the heigher number (1332 -> 4)
    Time Complexity - O(nk) it can reduced for O(n * log(n))
    Space complexity - O (n + k)

*/

function getDigit(num, index) {
  return Math.floor((Math.abs(num) / Math.pow(10, index)) % 10);
}

function getLength(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let heigher = 0;
  for (let number in arr) {
    heigher = Math.max(getLength(arr[number]), heigher);
  }
  return heigher;
}

function radixSort(arr) {
  let maxDigitsCount = mostDigits(arr);
  for (let i = 0; i < maxDigitsCount; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    // unmount
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    // mount
    // I'm passing 10 arguments to concat function, wich one is one array
    arr = [].concat(...bucket);
  }
  return arr;
}

console.log(radixSort([1, 33, 12, 511, 6, 22, 3333, 421]));
