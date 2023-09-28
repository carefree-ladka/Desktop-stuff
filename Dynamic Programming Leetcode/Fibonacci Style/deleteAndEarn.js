//LC : 740

function deleteAndEarn(nums) {
  const max = Math.max(...nums);
  const freq = Array(max + 1).fill(0);
  const dp = Array(max + 1).fill(0);
  nums.forEach((item) => freq[item]++);
  dp[1] = freq[1];
  for (let i = 2; i <= max; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + freq[i] * i);
  }
  return dp[max];
}

console.log(deleteAndEarn([3, 4, 2])); //6
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); //9

/* 
TC: O(max(nums))
SC: O(max(nums))
*/

//House Robber Approach

function deleteAndEarn(nums = []) {
  if (!nums.length) return 0;
  const max = Math.max(...nums);
  const dp = Array(max + 1).fill(0);
  nums.forEach((item) => (dp[item] += item));
  dp[2] = Math.max(dp[1], dp[2]);
  for (let i = 3; i <= max; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
  }
  return dp[max];
}

console.log(deleteAndEarn([3, 4, 2])); //6
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); //9
