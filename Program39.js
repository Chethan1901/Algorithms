// 39) Write a Program to find the Inverse of the Matrix

function inverse(matrix) {
  // Check that the matrix is square
  if (matrix.length !== matrix[0].length) {
    throw new Error("The matrix is not square and therefore does not have an inverse.");
  }

  let n = matrix.length;
  let aug = [];
  for (let i = 0; i < n; i++) {
    let row = matrix[i].slice();
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    aug.push(row);
  }

  for (let i = 0; i < n; i++) {
    // Find the pivot element
    let pivot = aug[i][i];
    if (pivot === 0) {
      let tempRow = aug[i];
      aug[i] = aug[i+1];
      aug[i+1] = tempRow;
      pivot = aug[i][i];
    }

    // Scale the pivot row
    for (let j = i; j < 2 * n; j++) {
      aug[i][j] /= pivot;
    }

    // Eliminate the pivot column
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      let factor = aug[j][i];
      for (let k = i; k < 2 * n; k++) {
        aug[j][k] -= aug[i][k] * factor;
      }
    }
  }

  let inverse = [];
  for (let i = 0; i < n; i++) {
    inverse.push(aug[i].slice(n));
  }

  return inverse;
}

let matrix = [[1, 2], [3, 4]];
console.log(inverse(matrix));
