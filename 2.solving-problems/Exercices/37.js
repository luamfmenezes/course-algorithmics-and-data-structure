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

  Exercice 2.

  Write a function called minSubArrayLen which accepts two parameters - an array of
  positives integers and a positive integer.
  This function should return the minimal length of contiguous subarray of which the
  sum is greater than or equal to the ingeger passed to the function. If there isn't 
  one return 0 insted.

  minSubArrayLen([2,3,1,2,4,3], 7) // 2 
  minSubArrayLen([2,1,6,5,4], 9) // 2 
  minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 
  minSubArrayLen([2,1,6,5,4], 9) // 2 

  Exercice 3.

  Write a function called findLogestSubstring, wich accepts a string and returns the length 
  of the longest substring with all distincct characters.

  findLongestSubstring('') // 0
  findLongestSubstring('rithmschool') // 7
  findLongestSubstring('thisisawsome') // 6

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

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("rithmschool"));
