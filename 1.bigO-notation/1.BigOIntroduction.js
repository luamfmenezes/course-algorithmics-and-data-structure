/*
    2. is significant shorter in duration
    How to mesure and the problem with time ?
        1. Different machis will mesure differnt times.
        2. Until the same machine can record differnt times.
        3. For fast algorithms, speed mesurements may bot be precise enough.

    Better than time, is better to count the number of operations.
*/

function addUpFaster(n) {
  return (n * (n + 1)) / 2;
}
// 1 multiplication, 1 addition and 1 division
// 3 -> 1 (constant)
// O(1)

function addUpSlower(n) {
  let total = 0; // 1 assign
  for (let i = 1; i <= n; i++) {
    // 1 + n assignment, n comparations, n addition
    total = total + i; // n assignments, n additions
  }
  return total;
}
// 5n + 2 -> n
// O(n)

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(n²)

console.log(addUpSlower(50));
console.log(addUpFaster(50));

/*
    simplify Big O Expressions

    1. Constants dont matter.
    2. Smaller terms don't matter
        O(32n + 10) -> O(n)
        O(2n² + 5n + 8) -> O(n²)

    Rules
        1. Arithmetic operations are constant (dont matter the size of n)
        2. Variable assignment is constant
        3. Accessing elements in an array(by index) or objet(by keys) is constant
        4. In a loop the complexity is the length of the loop x what happens inside.


*/

function logAtLest5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
// O(n)

function logAtLest5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
// O(1) - because this loop will run only 5 times.

/*

    Space complexity in JS, Rules
    1. Most primitives (booleans, numbers, undefined, null) are constant space.
    2. String require O(n) spaces (n -> string lenght).
    3. Reference types (arrays and objects) 
       are generally O(n) (n -> array/object length)
*/

function sum(arr) {
  let total = 0; // 1 primitive
  for (let i = 0; i < arr.length; i++) {
    // 1 primitive
    total += arr[i];
  }
  return total;
}
// space -> O(1)

function double(arr) {
  let doubles = []; // 1 Reference
  for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] * 2);
  }
  return total;
}
// space -> O(n)

/*
    Logarithms big Os

    Log2(8) -> 2 in wich expoent is 8 = 3
    Log2 -> Log for big O
    Appers communly in search and Recursion algorithms

*/