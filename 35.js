// 35) Write a Program to accept two matrices and check if they are equal

function isEqual(mat1, mat2) {
    if(mat1.length != mat2.length) return false
    if(mat1[0].length != mat2[0].length) return false
    for(let i=0; i<mat1.length; i++){
        for(let j=0; j<mat1[0].length; j++){
            if(mat1[i][j] != mat2[i][j]){
                return false
            }
        }
    }
    return true;
}

let res = isEqual([[1,2,1],[1,1,1]], [[1,1,1],[1,1,1]]);
console.log(res);