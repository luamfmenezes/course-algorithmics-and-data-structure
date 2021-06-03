/*














*/
function multiply(num, times) {
  if (times == 0) return 0;
  return num + multiply(num, times - 1);
}

function fib(num) {
  if (num < 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

function bin(num) {
  const half = Math.trunc(num / 2);
  const rest = num % 2;
  const current = rest === 0 ? "0" : "1";
  if (num <= 1) return "1";
  return bin(half) + current;
}

function ser(num) {
  if (num === 1) return 1;
  return 1 / num + ser(num - 1);
}

function invertString(str) {
  const lastLetter = str.slice(-1);
  const rest = str.slice(0, str.length - 1);
  if (!str) return "";
  return lastLetter + invertString(rest);
}

function test(str) {
  const f = str.splice(0, 3);
  return f;
}

function repeatedLetters(str) {
  const letterFrequency = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    letterFrequency[char] = letterFrequency[char]
      ? letterFrequency[char] + 1
      : 1;
  }

  let letters = [];

  for (key in letterFrequency) {
    if (letterFrequency[key] < 2) {
      delete letterFrequency[key];
    } else {
      letters.push(key);
    }
  }

  console.log(letters);
  console.log(letterFrequency);
}

function validateAnagram(str1, str2) {
  const letterFrequency1 = {};
  const letterFrequency2 = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    letterFrequency1[char1] = letterFrequency1[char1]
      ? letterFrequency1[char1] + 1
      : 1;
    letterFrequency2[char2] = letterFrequency2[char2]
      ? letterFrequency2[char2] + 1
      : 1;
  }

  for (let key in letterFrequency1) {
    if (letterFrequency1[key] !== letterFrequency2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validateAnagram("testa", "attes"));
