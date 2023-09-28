//LC :64

function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 || j > 0) {
        if (i === 0) grid[i][j] += grid[i][j - 1];
        else if (j === 0) grid[i][j] += grid[i - 1][j];
        else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }

  return grid[m - 1][n - 1];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

/* 
TC : O(M*N)
SC : O(1)
*/

function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];
  for (let j = 1; j < n; j++) grid[0][j] += grid[0][j - 1];

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
}
