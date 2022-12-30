// 90) Write a program to produce the sum as below
//  (1) + (1+2) + (1+2+3) + (1+2+3+4) + ... + (1+2+3+4+...+n)

function series(n){
    let series = new Array();
    let sum=0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}
let res = series(5);
console.log(res);