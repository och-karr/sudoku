module.exports = function solveSudoku(matrix) {
// function solveSudoku(matrix) {
  var nonPossibilities = {};
  var impossibleNumbers;
  var emptySpaces = 81;
  while (emptySpaces > 0) {
    emptySpaces = 0;
    for (var vert = 0; vert < matrix.length; vert++) {
      for (var horz = 0; horz < matrix.length; horz++) {
        if (matrix[vert][horz] === 0) {
          nonPossibilities = {};
          for (var i = 0; i < 9; i++) {
            if (matrix[vert][i] > 0) {
              nonPossibilities[matrix[vert][i]] = true;
            }
            if (matrix[i][horz] > 0) {
              nonPossibilities[matrix[i][horz]] = true;
            }
          }
          for (var vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++) {
            for (var horzBox = Math.floor(horz / 3) * 3; horzBox < Math.floor(horz / 3) * 3 + 3; horzBox++) {
              if (matrix[vertBox][horzBox]) {
                nonPossibilities[matrix[vertBox][horzBox]] = true;
              }
            }
          }
          impossibleNumbers = Object.keys(nonPossibilities);
          if (impossibleNumbers.length === 8) {
            for (var i = 1; i < 10; i++) {
              if (impossibleNumbers.indexOf(i.toString()) < 0) {
                // console.log(vert, horz);
                matrix[vert][horz] = i;
              }
            }
          } else {
            emptySpaces++;
          }
        }
      }
    }
    // console.log(matrix);
  }
  // console.log(matrix);
  return matrix;
}

// const matrix = [
//   [5, 3, 0, 0, 7, 0, 0, 0, 0],
//   [6, 0, 0, 1, 9, 5, 0, 0, 0],
//   [0, 9, 8, 0, 0, 0, 0, 6, 0],
//   [8, 0, 0, 0, 6, 0, 0, 0, 3],
//   [4, 0, 0, 8, 0, 3, 0, 0, 1],
//   [7, 0, 0, 0, 2, 0, 0, 0, 6],
//   [0, 6, 0, 0, 0, 0, 2, 8, 0],
//   [0, 0, 0, 4, 1, 9, 0, 0, 5],
//   [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ];


// const matrix = [
//   [5, 3, 4, 6, 7, 8, 9, 0, 0],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ];

// console.log(solveSudoku(matrix));
