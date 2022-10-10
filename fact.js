// function fact(n){
//     if(n <1){
//         return 1;
//     }
//     return n*fact(n-1)
// }
// console.log(fact(5))

// function add(n){
//     let sum = 0;
//     while(n){
//         sum += n%10;
//         n = Math.floor(n/10)
//     }
//     return sum;
// }
// console.log(add(123))

// function sum(a){
//         if (a==0) {
//             return 0
//         }
//      return  (a%10)+ sum(Math.floor(a/10))
//     }
//     console.log(sum(172))

function prime(n) {
	//single number check
	if (n == 0 || n == 1) return false;
	for (let i = 2; i < n; i++) {
		if (n % i == 0) return false;
	}
	return true;
}
function range(n) {
	//range 1-100
	for (let i = 1; i <= n; i++) {
		if (prime(i)) console.log(i);
	}
}
range(100);
