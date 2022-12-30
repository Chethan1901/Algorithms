// 34) Write a Program to add all Elements in Matrix


function addAll(ma) {
    let sum=0;
    for (let index = 0; index < ma.length; index++) {
        for (let index2 = 0; index2 < ma[0].length; index2++) {
           sum += ma[index][index2];
        }
    }
    
    return sum;
}

let res = addAll([[1,1,1],[1,1,1]])
console.log(res);
