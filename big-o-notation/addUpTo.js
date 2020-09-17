/*
    2. is significant shorter in duration
    How to mesure and the problem with time ?
        1. Different machis will mesure differnt times.
        2. Until the same machine can record differnt times.
        3. For fast algorithms, speed mesurements may bot be precise enough.
*/

function addUpSlower(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total = total + i + 1;
  }
  return total;
}

function addUpFaster(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpSlower(50));
console.log(addUpFaster(50));
