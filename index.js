function sudoku2(grid) {
  // check columns
  for (let c = 0; c < grid[0].length; c++) {
    let seen = {};
    for (let r = 0; r < grid.length; r++) {
      let elem = grid[r][c];
      if (elem !== '.') {
        // check if num is a duplicate
        if (elem in seen) {
          return false;
        } else {
          seen[elem] = 1;
        }
      }
    }
  }
  // check rows
  for (let r = 0; r < grid.length; r++) {
    let seen = {};
    for (let c = 0; c < grid[r].length; c++) {
      let elem = grid[r][c];
      if (elem !== '.') {
        if (elem in seen) {
          return false;
        } else {
          seen[elem] = 1;
        }
      }
    }
  }
  // check subGrid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      let elem = grid[r][c];
      if (elem !== '.') {
        let isValid = checkIfValidSubgrid(grid, r, c);
        if (isValid === false) {
          return false
        }
      }
    }
  }
  return true;
}
function checkIfValidSubgrid(grid, row, column) {
  let seen = {};
  let count = 0;
  let startRow = Math.floor(row / 3) * 3;
  let startColumn = Math.floor(column / 3) * 3;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      let elemToCheck = grid[r + startRow][c + startColumn];
      if (elemToCheck !== '.') {
        if (elemToCheck in seen) {
          return false;
        } else {
          seen[elemToCheck] = 1;
        }
      }
    }
  }
  return true;
}

// sudoku2(
//   [
//     [".", ".", ".", ".", "2", ".", ".", "9", "."],
//     [".", ".", ".", ".", "6", ".", ".", ".", "."],
//     ["7", "1", ".", ".", "7", "5", ".", ".", "."],
//     [".", "7", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", "8", "3", ".", ".", "."],
//     [".", ".", "8", ".", ".", "7", ".", "6", "."],
//     [".", ".", ".", ".", ".", "2", ".", ".", "."],
//     [".", "1", ".", "2", ".", ".", ".", ".", "."],
//     [".", "2", ".", ".", "3", ".", ".", ".", "."]
//   ])
// false
sudoku2(
  [
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", ".", ".", ".", ".", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    ["1", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."]
  ])