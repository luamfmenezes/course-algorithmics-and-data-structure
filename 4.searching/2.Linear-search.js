/*
    Linear Search
    looking each array position and compare until find.
    IndexOf, Includes, find, findIndex are kinds of linear search.

    Implementation.

*/

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch(["luam", "fernandes", "de", "menezes"], "aa"));
