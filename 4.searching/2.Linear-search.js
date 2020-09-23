/*
    Linear Search 
    Look each array position and compare until find.
    It's the best that we can do with unsorted data.
    IndexOf, Includes, find, findIndex are kinds of linear search.

*/

// Big O - O(n)
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
