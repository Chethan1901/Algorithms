// 92) Write a program to produce the sum of series as below
//  (1^1) + (2^2) + (3^3) + (4^4) + (5^5) + ... + (n^n)

function series(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        series.push(i ** i);
        sum+=(i**i)
    }
    return sum;
}
let res = series(5);
console.log(res);