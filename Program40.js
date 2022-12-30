// 40) Write a program to find given a matrix, 
// check whether it’s magic square or not.

function isMagicMat(ma) {
    let sum=0,diagC=0,tempsum=0;
    for(let i=0; i<ma.length; i++){
        sum+=ma[0][i];
    }
    for(let i=0; i<ma.length; i++){
        tempsum=0;
        for(let j=0; j<ma[0].length; j++){
            if(i == j){
                diagC += ma[i][j]
            }
            tempsum += ma[i][j]
        }
        if(tempsum !=  sum ) return false;
    }
    if(diagC != sum) return false

    return true;
}
let res = isMagicMat([[2,7,6],[9,5,1],[4,3,8]]);
console.log(res);

