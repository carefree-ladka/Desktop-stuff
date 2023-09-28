//LC 509

//No Dynamic Programming Involved
function fibonacciNumber(n) {
  let prev = 0;
  let next = 1;
  for (let i = 1; i <= n; i++) {
    let curr = prev + next;
    prev = next;
    next = curr;
  }
  return next;
}

/* 
TC: O(N)
SC: O(1)
*/

//Top Down Memoization
function fibonacciNumberTopDown(n) {
  const memo = {};
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacciNumberTopDown(n - 1) + fibonacciNumberTopDown(n - 2);
  return memo[n];
}

console.log(fibonacciNumberTopDown(2)); //1
console.log(fibonacciNumberTopDown(3)); //2
console.log(fibonacciNumberTopDown(4)); //3

/* 
TC: O(N)
SC: O(N)
*/

//Bottom Up Tabulation
function fibonacciNumberBottomUp(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

/* 
TC: O(N)
SC: O(N)
*/

console.log(fibonacciNumberBottomUp(2)); //1
console.log(fibonacciNumberBottomUp(3)); //2
console.log(fibonacciNumberBottomUp(4)); //3
