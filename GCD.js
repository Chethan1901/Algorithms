import readlinesync from "readline-sync";

// var array = 8
// function GCD(value) {

//     let a = value;
//     while(value>0){
//         if((value%a) == 0){
//             console.log(a)
//         }
//         a--;
//     }
// }
// GCD(array);

function gcd(a,b){
    if(!b) return a;
    else{
        return gcd(b,a%b)
    }
}
console.log(gcd(2,10))

