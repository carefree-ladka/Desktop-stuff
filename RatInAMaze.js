/* 
RIGHT & DOWN
*/

function ratInMaze(startRow, startCol, endRow, endCol) {
  if (startRow > endRow || startCol > endCol) return 0;
  if (startCol === endCol && startRow === endRow) return 1;
  const right = ratInMaze(startRow, startCol + 1, endRow, endCol);
  const down = ratInMaze(startRow + 1, startCol, endRow, endCol);
  return right + down;
}

function countWays(cols, rows) {
  return ratInMaze(1, 1, rows, cols);
}

const cols = 2;
const rows = 2;

console.log(countWays(cols, rows));
