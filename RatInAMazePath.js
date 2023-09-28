/* 
RIGHT & DOWN
*/

function ratInMaze(startRow, startCol, endRow, endCol, s) {
  if (startRow > endRow || startCol > endCol) return 0;
  if (startCol === endCol && startRow === endRow) {
    console.log(s);
    return;
  }

  ratInMaze(startRow, startCol + 1, endRow, endCol, s + "R");
  ratInMaze(startRow + 1, startCol, endRow, endCol, s + "D");
}

function findPaths(cols, rows, str) {
  ratInMaze(1, 1, rows, cols, str);
}

const cols = 2;
const rows = 2;

findPaths(cols, rows, "");
/* 
RD
DR
 */
