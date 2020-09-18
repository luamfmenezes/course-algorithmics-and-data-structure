/*
  Exercice 1.

  Given an array of integers and a number, wrote a function called maxSubarraySum, wich
  finds the maximum sum of a subarray.

  Note that a subarray must consist of consecutive elements from the original array. In
  the first example below, [100,200,300] is a subarray of the original array, but[100,300]
  is not.

  maxSubarraySum([100,200,300,400], 2) // 700
  maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39 
  maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5 
  maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5  
  maxSubarraySum([2,3], 3) // null

*/

function maxSubarraySum(arr, number) {
  if (number > arr.length) return null;
  let window = 0;
  let bigger = 0;

  for (let i = 0; i < number; i++) {
    window += arr[i];
  }

  bigger = window;

  for (let i = number; i < arr.length; i++) {
    window = window - arr[i - number] + arr[i];
    if (window > bigger) {
      bigger = window;
    }
  }

  return bigger;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([], 2));
