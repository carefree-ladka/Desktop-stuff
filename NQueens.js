function NQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill("X"));
  const result = [];
  function isSafe(row, col) {
    //Check row -->East and West
    for (let i = 0; i < n; i++) {
      if (board[row][i] === "Q") return false;
    }
    //Check col -->North and South
    for (let i = 0; i < n; i++) {
      if (board[i][col] === "Q") return false;
    }
    let i = row;
    let j = col;
    //Check North East
    while (i >= 0 && j < n) {
      if (board[i][j] === "Q") return false;
      i--;
      j++;
    }

    i = row;
    j = col;
    //Check South East
    while (i < n && j < n) {
      if (board[i][j] === "Q") return false;
      i++;
      j++;
    }

    i = row;
    j = col;
    //Check South West
    while (i < n && j >= 0) {
      if (board[i][j] === "Q") return false;
      i++;
      j--;
    }

    i = row;
    j = col;
    //Check South West
    while (i >= 0 && j >= 0) {
      if (board[i][j] === "Q") return false;
      i--;
      j--;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      const res = board.map((row) => row.join(""));
      result.push(res);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1); //move to next row
        board[row][col] = "X";
      }
    }
  }
  backtrack(0);
  return result;
}

console.log(NQueens(4));
