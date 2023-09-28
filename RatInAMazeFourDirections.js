/* 
RIGHT, DOWN, LEFT & UP
*/

function isMazeValid(startRow, startCol, endRow, endCol, isVisited) {
  return (
    startRow < 0 ||
    startCol < 0 ||
    startRow > endRow ||
    startCol > endCol ||
    isVisited[startRow][startCol] === true
  );
}

function ratInMaze(startRow, startCol, endRow, endCol, s, isVisited) {
  if (isMazeValid(startRow, startCol, endRow, endCol, isVisited)) return;
  if (startCol === endCol && startRow === endRow) {
    console.log(s);
    return;
  }

  isVisited[startRow][startCol] = true;
  //go right
  ratInMaze(startRow, startCol + 1, endRow, endCol, s + "R", isVisited);
  //go down
  ratInMaze(startRow + 1, startCol, endRow, endCol, s + "D", isVisited);
  //go left
  ratInMaze(startRow, startCol - 1, endRow, endCol, s + "L", isVisited);
  //go up
  ratInMaze(startRow - 1, startCol, endRow, endCol, s + "U", isVisited);
  //Backtrack
  isVisited[startRow][startCol] = false;
}

function findPaths(cols, rows) {
  const isVisited = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false));

  ratInMaze(0, 0, rows - 1, cols - 1, "", isVisited);
}

const cols = 3;
const rows = 3;

findPaths(cols, rows);
