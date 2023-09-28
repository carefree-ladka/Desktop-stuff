//LC :931

function minFallingPathSum(matrix) {
  const n = matrix.length;
  for (let i = 1; i < n; i++) {
    const row = matrix[i - 1];
    for (let j = 0; j < n; j++) {
      const topLeft = j - 1 >= 0 ? row[j - 1] : Infinity;
      const top = row[j];
      const topRight = j + 1 < n ? row[j + 1] : Infinity;
      matrix[i][j] += Math.min(topLeft, top, topRight);
    }
  }
  return Math.min(...matrix[n - 1]);
}
