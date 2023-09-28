//LC 746

function minCostClimbingStairs(cost = []) {
  const N = cost.length;
  const dp = Array(N + 1).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < N; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[N - 1], dp[N - 2]);
}

const cost1 = [10, 15, 20];
const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(cost1)); //15
console.log(minCostClimbingStairs(cost2)); //6

/* 
TC: O(N)
SC: O(N)
*/