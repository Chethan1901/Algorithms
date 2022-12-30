// 41) Write a Program to display transpose of a matrix

function transposeMatrix(ma) {
    let transpose = new Array(ma[0].length);
    for(let i=0; i<ma[0].length; i++){
        transpose[i] = new Array(ma.length)
    }
    for(let i=0; i<ma.length; i++){
        for(let j=0; j<ma[0].length; j++){
            transpose[j][i] = ma[i][j];
        }
    }
    return transpose;
}
let res = transposeMatrix([[2,3],[2,3],[1,3]]);
console.log(res);
