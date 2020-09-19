/*
    This patter involves create a window wich can either be an array or number
    from on position to another.

    Depending on a certain condition, the window either increases or closes(and 
    a new window is created)

    Very useful for keeping track of a subset of data in an arra/string etc.
    
    Example1:
    findMaxUniqueCaractersTogeter "hellothere" -> "lother"

    Example:
    maxSubarraySum([1,2,5,2,8,1,5],2); - 10
    maxSubarraySum([1,2,5,2,8,1,5],4); - 17
    maxSubarraySum([4,2,1,6],1); - 6
    maxSubarraySum([4,2,1,6,2],4); - 13
    maxSubarraySum([],4); - null

    clear the start and increment the end.

*/

//naive O(n²) depends of windowLenght
function maxSubarraySum(arr, windowLenght) {
  if (arr.length === 0) return null;
  let biggerSum = 0;
  for (let i = 0; i < arr.length - windowLenght; i++) {
    let sum = 0;
    for (let j = 0; j < windowLenght; j++) {
      sum += arr[i + j];
    }
    if (sum > biggerSum) {
      biggerSum = sum;
    }
  }
  return biggerSum;
}

//sliding window - O(n)
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum2([], 4));
