/*

102)Write a function that returns true if the signs of given integers are different, otherwise false
Given two signed integers,.
For example, the function should return true -1 and +100, and should return false for -100 and -200.
The function should not use any of the arithmetic operators.

*/


function isPos(i){
    let answer=["negative","zero","positive"];
    let val = 1 + (i >> 31) - (-i >> 31);

    return answer[val];
}

function determine(n1, n2){
    let ans1=isPos(n1);
    let ans2=isPos(n2);

    if(ans1 != ans2) return true
    return false
}

let res = determine(-100,-200);
console.log(res);

