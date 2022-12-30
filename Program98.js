/*

98)Write a program to produce the series as of below
    2 15 41 80 132 197 275 366 470 587

*/

function series(no){
    let a=2,i,n=10;
    let series = new Array();
    for(i=1;i<=no;i++)
    {
        // console.log(a);
        series.push(a)
        a+=13*i;
    }
    return series;
}
let res = series(15);
console.log(res);
