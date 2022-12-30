/*

    101)Write a program to Multiply given input with number 10 without using
    addition and multiplication operator (Hint : Left Shift)

*/

function mul(n) {
     return (n<<1) + (n<<3);
}

let res= mul(9);
console.log(res);