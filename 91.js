// 91) Write a program to produce the sum of series as below
//  1! + 2! + 3! + 4! + 5! + ... + n!

function fact(no){
    let fact = 1;
    for (i = 1; i <= no; i++) {
        fact *= i;
    }
    return fact;
}

function series(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum+=fact(i);
    }
    return sum;
}
let res = series(5);
console.log(res);