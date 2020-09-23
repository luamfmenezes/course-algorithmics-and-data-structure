/*
    Recursion

    It's a process(function) that calls itself.
    It's everywhere ex: JSON.parse, JSON.stringify, document.getElementById...

    Call stack:
        1. It's a stack data structure
        2. Any function invoked it's placed on the top of the call stack.
        3. When the function end or return something, it is removed from the stack.

    *This stack can be seen in the chrome dev tools.

    Game plan.
        1. Stoping point - base case.
        2. Different input

  Where things go wrong ?
    1. No/wrong base case -> infinite loop (maximum call stack size exceeded -> Stack overflow) 
    // Mixumum stack can be called ~10k
    2. Return never will provide a basecase.
    
*/

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("Finish");
}

// simplest regression
function countDown2(num) {
  if (num <= 0) {
    console.log("Finish");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// Factorial 4! = 4 * 3 * 2 * 1
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));
