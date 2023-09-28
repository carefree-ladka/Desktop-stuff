//LC 1137

function tribonacciNumberBottomUp(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
}

console.log(tribonacciNumberBottomUp(4)); //4
console.log(tribonacciNumberBottomUp(25)); //1389537

/* 
TC : O(N)
SC :O(N)
*/

function tribonacciNumberBottomUp2(n) {
  if (n < 3) return n > 0 ? 1 : 0;
  let prev = 0,
    next = 1,
    curr = 1;
  for (let i = 0; i < n - 2; i++) {
    [prev, next, curr] = [next, curr, prev + next + curr];
  }
  return curr;
}

console.log(tribonacciNumberBottomUp2(4)); //4
console.log(tribonacciNumberBottomUp2(25)); //1389537

/* 
TC : O(N)
SC :O(1)
*/
