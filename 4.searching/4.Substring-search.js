/*

*/

function findSubString(str, subStr) {
  let matches = 0;
  let indexSubStr = 0;

  // see what the end repeats and save in a variable matchesBegginToEnd

  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[indexSubStr]) {
      if (indexSubStr === subStr.length - 1) {
        matches++;
        indexSubStr = 0; //
        //indexSubStr = indexSubStr > arr.length - matchesBegginToEnd ? arr.length - indexSubStr : 0;
      } else {
        indexSubStr++;
      }
    }
  }
  return matches;
}

//naive -- O(n) -> i'm not sure but maybe it can be the KNP
function findSubString(str, subStr) {
  let matches = 0;
  let indexSubStr = 0;

  // see what the end repeats and save in a variable matchesBegginToEnd
  let matchesSubBegginToEnd = 0;
  let str1 = "";
  let str2 = "";

  for (let i = 0; i < Math.floor(subStr.length / 2); i++) {
    str1 += subStr[i];
    str2 = subStr[subStr.length - 1 - i] + str2;
    if (str1 === str2) {
      matchesSubBegginToEnd = i;
    }
  }

  // dectect patterms
  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[indexSubStr]) {
      if (indexSubStr === subStr.length - 1) {
        matches++;
        indexSubStr =
          indexSubStr > str.length - 1 - matchesSubBegginToEnd
            ? str.length - 1 - indexSubStr
            : 0;
      } else {
        indexSubStr++;
      }
    }
  }
  return matches;
}

console.log(findSubString("abcdabceabc", "abceabc"));
