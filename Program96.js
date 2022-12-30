// 96) Write a program to produce the sum of series as below
//  1/2 - 2/3 + 3/4 - 4/5 + 5/6 - ...... n


function series(n){
    let sum=0;
    let series = new Array();
    for(let i=1; i<=n; i++){
        if( i%2 == 0){
            sum -= (i/(i+1))
            // console.log(-i,"/",i+1);
        }
        else{
            sum += (i/(i+1))
            // console.log(i,"/",i+1);
        }
    }
    return sum;
}
let res = series(5);
console.log(res);
