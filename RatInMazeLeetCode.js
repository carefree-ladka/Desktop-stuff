/* 
RIGHT, DOWN, LEFT & UP
*/

function isMazeValid(startRow, startCol, endRow, endCol, maze) {
  return (
    startRow < 0 ||
    startCol < 0 ||
    startRow > endRow ||
    startCol > endCol ||
    maze[startRow][startCol] === 0 ||
    maze[startRow][startCol] === -1
  );
}

function ratInMaze(startRow, startCol, endRow, endCol, s, maze) {
  if (isMazeValid(startRow, startCol, endRow, endCol, maze)) return;
  if (startCol === endCol && startRow === endRow) {
    console.log(s);
    return;
  }

  maze[startRow][startCol] = -1;
  //go right
  ratInMaze(startRow, startCol + 1, endRow, endCol, s + "R");
  //go down
  ratInMaze(startRow + 1, startCol, endRow, endCol, s + "D");
  //go left
  ratInMaze(startRow, startCol - 1, endRow, endCol, s + "L");
  //go up
  ratInMaze(startRow - 1, startCol, endRow, endCol, s + "U");
  //Backtrack
  maze[startRow][startCol] = 1;
}

function findPaths(cols, rows, maze) {
  ratInMaze(0, 0, rows, cols, "", maze);
}

const maze = [
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
];

findPaths(maze, maze.length - 1, maze[0].length - 1);
