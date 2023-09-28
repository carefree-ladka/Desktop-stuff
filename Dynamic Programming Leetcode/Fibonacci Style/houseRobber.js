//LC 198

// Recurrence relation rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )

//Bottom Up
function houseRobber(nums = []) {
  const N = nums.length;
  const dp = Array(N).fill(0);
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp.at(-1);
}

console.log(houseRobber([2, 7, 9, 3, 1]));
console.log(houseRobber([1, 2, 3, 1]));
/* 
TC: O(N)
SC: O(N)
*/

function houseRobberIterative(nums = []) {
  if (nums.length === 0) return 0;
  let prev = 0;
  let next = 0;
  nums.forEach((item) => {
    [prev, next] = [next, Math.max(prev + item, next)];
  });
  return next;
}

console.log(houseRobberIterative([2, 7, 9, 3, 1]));
console.log(houseRobberIterative([1, 2, 3, 1]));

/* 
TC: O(N)
SC: O(1)
*/

//Recursion

function houseRobberRecursive(nums = []) {
  function rob(nums, index) {
    if (index < 0) return 0;
    return Math.max(rob(index - 1), rob(index - 2) + nums[index]);
  }
  return rob(nums, nums.length - 1);
}

/* 
TC: O(N)
SC: O(N)
*/

//Recusion + Top Down Memoization

function houseRobberTopDown(nums = []) {
  const memo = Array(nums.length).fill(-1);
  function rob(nums, index) {
    if (index < 0) return 0;
    if (memo[index] >= 0) return memo[index];
    const result = Math.max(rob(index - 1), rob(index - 2) + nums[index]);
    memo[index] = result;
    return result;
  }
  return rob(nums, nums.length - 1);
}
