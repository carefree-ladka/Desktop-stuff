//LC  :120

//Tip: Start from bottom up

function minimumTotal(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    const row = triangle[i + 1];
    for (let j = 0; j < row.length - 1; j++) {
      triangle[i][j] += Math.min(row[j], row[j + 1]);
    }
  }
  console.log(triangle);
  return triangle[0][0];
}

//[ [ 11 ], [ 9, 10 ], [ 7, 6, 10 ], [ 4, 1, 8, 3 ] ]
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); //11
console.log(minimumTotal([[-10]])); //-10
