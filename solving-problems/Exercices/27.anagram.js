/*
    Anagrams

    Given two strings, write a function to determine if the second string is an anagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letters of another.

    validAnagram('','') - true
    validAnagram('aaz,'zza') - false
    validAnagram('anagram','nagaram') - true
    validAnagram('rat','car') - false

*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  str1.split("").forEach((el) => {
    frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
  });

  str2.split("").forEach((el) => {
    frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
  });

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyConter = {};

  str1.split("").forEach((el) => {
    frequencyConter[el] = (frequencyConter[el] || 0) + 1;
  });

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!frequencyConter[letter]) {
      return false;
    }
    frequencyConter[letter] -= 1;
  }

  return true;
}

console.log(validAnagram2("anagram", "nagaram"));
console.log(validAnagram2("aaz", "zza"));
