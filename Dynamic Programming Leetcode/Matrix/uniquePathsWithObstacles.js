//LC :63

//Bottom Up
function uniquePathsWithObstacles(obstacleGrid) {
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;
  let dp = new Array(cols).fill(0);
  // initialize bottom right position with 1
  dp[cols - 1] = 1;

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      // if we're at an obstacle, curr pos has 0 paths
      if (obstacleGrid[row][col] === 1) dp[col] = 0;
      // if both bottom col and right col are in bounds, calculate total paths at position
      // To find total paths at curr position add bottom value (dp[col]) + right value (dp[col + 1])
      // only execute if right col is not out of bounds (col is not equal to last col)
      else if (col + 1 < cols) dp[col] = dp[col] + dp[col + 1];

      // if were at last col, we need to add bottom col (dp[col]) + 0
      // since dp[col] is already equal to bottom col, we dont actually have to execute this code, since it does nothing
      // else dp[col] = dp[col] + 0
    }
  }
  return dp[0];
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
