function solution(arr, k) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (k % arr.length === 0) return arr;

  let rotate = k > arr.length ? k % arr.length : k;

  console.log(rotate);

  let end = arr.slice(arr.length - rotate);

  let beggin = arr.slice(0, arr.length - rotate);

  return [...end, ...beggin];
}

console.log(solution([1, 2, 3, 4, 5], 26));
