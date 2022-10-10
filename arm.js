// function arm(n){
//     let temp,sum = 0, tempo = n;
//    let  power = (""+n).length;
//     while(n>0){
//         temp = n%10;
//         sum += temp**power
//         n = Math.floor(n/10)
//     }
//     if(sum == tempo) return true

// }
// console.log(arm(153))

// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000);
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves
//     let result = await promise;

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000);
// });

// async function print(){
//     let result = await promise;
//     console.log(result)
//     console.log("hello world")
// }

// print()

// let str = "abcdefghi"
// let str2 = str.split("")
// let len = str2.length-1
// console.log(str2)

function prime(n){
    if( n ==0 || n==1 ) return false
    for(let i=2; i<n; i++){
        if( n % i == 0)  return false
    }
    return true
}
function range(str){

    let result = ""
    for(let i=0;i<str.length; i++){
        if(prime(i)){
        result += str[i]
        };
    }
    console.log(result)
}

range("chethan")

// function count(str) {
// 	return str.split("").reduce(function (counts, letter) {
// 		if (counts[letter]) {
// 			counts[letter] += 1;
// 		} else {
// 			counts[letter] = 1;
// 		}
// 		return counts;
// 	}, {});
// }
// var result = count("aaabbcccc");

// console.log(result)

// let str = "aaabbc"
// /*
//  acc={
//     "a": 3,
//     "b":2,
//     "c":1
//  }
// */
// //reduce((accumulator, curr_value)=>{},initial value)
// let res = str.split("").reduce((acc,curr)=>{
//     if(!acc[curr]){
//         acc[curr] = 1;
//     }
//     else {
//         acc[curr] += 1;
//     }
//     return acc;
// },{})
// console.log(res)

// /*
//     acc ={
//         "a":0
//     }

// */

// function pow(x, y) {
// 	let b = 1;
// 	let temp = x;
// 	while (b < y) {
       
// 		x = x * temp;
		
// 		console.log(x);
//         b++;
// 	}
// }
// pow(2, 2);


