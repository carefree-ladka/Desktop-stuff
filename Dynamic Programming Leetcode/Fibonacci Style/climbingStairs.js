//L70

//Bottom Up
function climbStairsBottomUp(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairsBottomUp(2)); //2
console.log(climbStairsBottomUp(3)); //3
console.log(climbStairsBottomUp(4)); //5

/* 
TC: O(N)
SC: O(N)
*/

//No Dynamic programming
function climbStairs2(n) {
  let prev = 0;
  let next = 1;
  for (let i = 1; i <= n; i++) {
    let curr = prev + next;
    prev = next;
    next = curr;
  }
  return next;
}

console.log(climbStairs2(2)); //2
console.log(climbStairs2(3)); //3
console.log(climbStairs2(4)); //5

/* 
TC: O(N)
SC: O(1)
*/
