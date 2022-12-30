// 42) Write a program to accept a matrix and determine whether it is a sparse matrix or not?. A sparse
// matrix is a matrix, which has more zero elements than nonzero elements.

function isSparseMat(ma) {
    let zCount=0,nz=0;
    for(let i=0; i<ma.length; i++){
        for(let j=0; j<ma[0].length; j++){
            if(ma[i][j] == 0) zCount++;
        }
    }
    let n = ma.length * ma[0].length;
    nz=n-zCount;
    if(zCount > nz) return true
    return false;
}
let res = isSparseMat([[0,0,0],[0,0,1],[1,2,3]]);
console.log(res);

