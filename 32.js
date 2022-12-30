// 32) Write a program to multiply given 2 (NXN) matrices

function mulMat(mat1, mat2) {
	const N = mat1.length - 1;
	const res = new Array(mat1.length);

	for (let j = 0; j < mat1.length; j++) {
		res[j] = new Array(mat1[0].length);
	}
    console.log(res);

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			res[i][j] = 0;
			for (let k = 0; k < N; k++) {
                res[i][j] += mat1[i][k] * mat2[k][j];
            }
		}
	}

	return res;
}

let res = mulMat(
	[
		[2, 2],
		[2, 2],
	],
	[
		[2, 2],
		[2, 2],
	]
);
console.log(res);
