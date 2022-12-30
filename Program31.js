// 31) Write a program to add and subtract of given (NXN) Matrices

function addSub(mat1, mat2) {
    const res = new Array(mat1.length);

    for(let j=0; j<mat1.length; j++ ){
        res[j] = new Array(mat1[0].length);
    }
	for (let i = 0; i < mat1.length; i++) {
		for (let j = 0; j < mat1[0].length; j++) {
			res[i][j] = mat1[i][j] + mat2[i][j];
		}
	}
    return res
}

let res = addSub([[1,1],[1,1],[1,1]],[[1,1],[1,1],[2,2]]);
console.log(res);

// 1 1
// 1 1
// 1 1