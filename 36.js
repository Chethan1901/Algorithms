// 36) Write a Program to check if a given matrix is an identity matrix

function isIdentity(ma) {
    if(ma.length != ma[0].length) return false;
    for(let i=0; i<ma.length; i++){
        for(let j=0; j<ma[0].length; j++){
            if(i == j){
                if(ma[i][j] != 1 )
                return false;
            }
            else{
                if(ma[i][j] != 0)
                return false;
            }
        }
    }
    return true;
}

let res = isIdentity([[1,0,0],[0,1,0],[0,0,1]]);
console.log(res);