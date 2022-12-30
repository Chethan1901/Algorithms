
function findSqrt(x){
    if(x < 2){
        return x;
    }
    let y = x;
    let z = (y + (x/y))/2;
     
    while(Math.abs(y-z)>=0.00001){
        y = z;
        z = (y + (x/y))/2;
    }
    return z;
}
 
let n = 3;
let ans = findSqrt(n);
console.log(ans.toPrecision(6) + " is the square root of 3");