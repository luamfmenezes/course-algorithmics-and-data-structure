/*
    Exercice 1
    Write a function called power which accepts a base and an exponent. The function should return the power
    of the base to the exponent.
    Mimic of Math.pow()
    Do not worry about negative bases and expoents.
    
    power(2,0) - 1
    power(2,2) - 4
    power(2,4) - 16
    
    Exercice 2
    Write a function from factory numbers.

    factorial(1) - 1
    factorial(2) - 2
    factorial(4) - 24
    factorial(7) - 5040   

    Exercice 3.
    Write a function called productOfArray which takes in an array of numbers and returns 
    the product of them all.

    // productOfArray([1,2,3]) // 6
    // productOfArray([1,2,3,10]) // 60

    Exercice 4.
    Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 
    to the number.

    recursiveRange(6) - 21
    recursiveRange(10) - 55 

    Exercice 5. 

    Writhe a function called fib that returns the fibonacci sequence.

*/

function power(num, expo) {
  if (expo === 0) return 1;
  return num * power(num, expo - 1);
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));
