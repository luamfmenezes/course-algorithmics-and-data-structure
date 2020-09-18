/*
  Exercice 1.

  Write a function called averagePair. Given a sorted array of integers and a target
  average, determine if there is a pair of values in the array where the average of
  the pair equals the target average. There may be more than one pair that matches
  the average target.

  Time O(N)
  Space: 0(1)

  averagePair([1,2,3], 2.5); // true
  averagePair([1,3,3,5,6,7,10,12,18],8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([],4)// false

  Exercice 2.

  write a function called isSubsequence wich takes in two strings and checks whether
  the characters in the first string form a subsequence of the characters in the 
  second string. In other words, the function should check whether the characters
  in the first string appear somewhere in the second string, without their order changing.

  isSubsequence("hello", "hellow world") / true
  isSubsequence("sing", "sting") / true
  isSubsequence("abc", "abracadabra") / true
  isSubsequence("abc", "acb") / true


*/

function averagePair(arr, average) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentAverage = (arr[left] + arr[right]) / 2;
    if (currentAverage === average) {
      return true;
    } else if (currentAverage < average) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

function isSubsequence(str1, str2) {
  let pointer = 0;
  str1 = str1.split("");
  str2 = str2.split("");

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[pointer]) {
      pointer++;
    }
    if (pointer === str1.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("helloo", "hello world"));
