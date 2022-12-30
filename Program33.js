// 33) Write a program to sort the matrix rows and columns

function sortMatrix(matrix) {
  // Sort the rows of the matrix
  matrix.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
    }
  });

  // Sort the columns of the matrix
  for (let i = 0; i < matrix[0].length; i++) {
    let column = [];
    for (let j = 0; j < matrix.length; j++) {
      column.push(matrix[j][i]);
    }
    column.sort((a, b) => a - b);
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][i] = column[j];
    }
  }

  return matrix;
}

let res = sortMatrix([[1,2],[3,3],[3,5]])
console.log(res);

