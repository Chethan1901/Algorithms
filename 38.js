// 38) Write a program to find the trace of given matrix

function traceMatrix(ma) {
    let trace=0;
    for(let i=0; i<ma.length; i++){
        for(let j=0; j<ma[0].length; j++){
            if(i == j){
                trace += ma[i][j]
            }
        }
    }
    return trace;
}
let res = traceMatrix([[1,2,3],[1,2,3],[1,2,3]]);
console.log(res);
