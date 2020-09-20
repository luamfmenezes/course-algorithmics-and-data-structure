/*
    Exercice 1.
    Write a function called capitalizeFirst that capitalize the first letter 
    capitalizeFirst(['car','taco','banana']) - ['Car','Taco','Banana']

    Exercice 2.
    Write a recursive function called nestedEvenSum. return the sum of all even numbers
    in an object which may contain nested objects.

    Exercice 3.
    Write a recursive function called capitalizeWords. Given an array of words, return a new array containg
    each word capitalized.

    capitalizedWords('i', 'am', 'learning', 'recursion'); // ['I', 'AM', 'LEARNING', 'RECURSION']

    Exercice 4. 
    Write a function called stringifyNumbers which take in an object and finds all of the values which are
    numbers and converts them to strings. Recursion would be a great way to solve this.

    Exercice 5.
    Write a function called collectStrings which accepts an object and returns an array of all the values
    in the object that have a typeof string;

*/

//  ------------------------------------------- Inputs

const obj3 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const obj4 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const obj5 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

//  ------------------------------------------- Functions

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  const firstLetter = arr[0][0];
  const restOfWord = arr[0].slice(1);
  const firstLetterCapital = firstLetter.toUpperCase();
  const firstWordCapitalized = firstLetterCapital + restOfWord;
  return [firstWordCapitalized].concat(capitalizeFirst(arr.slice(1)));
}

function nestedEvenSum(obj, totalNumbers = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      totalNumbers += obj[key];
    } else if (typeof obj[key] === "object") {
      totalNumbers += nestedEvenSum(obj[key]);
    }
  }

  return totalNumbers;
}

function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = `${obj[key]}`;
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function collectStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strings.push(...collectStrings(obj[key]));
    }
  }
  return strings;
}

console.log(collectStrings(obj5));
