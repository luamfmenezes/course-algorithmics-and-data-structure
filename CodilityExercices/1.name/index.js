function solution(A) {
  let left = 0;
  let right = 0;
  let lowest = 0;

  for (let i = 0; i < A.length; i++) {
    right += A[i];
  }
  lowest = Math.abs(right);
  for (let i = 0; i < A.length; i++) {
    left += A[i];
    right -= A[i];
    const total = Math.abs(left - right);
    if (total < lowest) {
      lowest = total;
    }
  }
  return lowest;
}

console.log(solution([3, 1, 2, 4, 3]));

// expect 1
