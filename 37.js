// 37) Write a Program to check the frequency(count) of odd numbers and even numbers in matrix

function oddEvenCount(ma) {
    let oddCount=0;
    let evenCount=0;
    for(let i=0; i<ma.length; i++){
        for(let j=0; j<ma[0].length; j++){
            if(ma[i][j] % 2 == 0 )
                evenCount++;
            else
                oddCount++;
        }
    }
    return [evenCount,oddCount];
}
let res = oddEvenCount([[1,2,3],[1,2,3]]);
console.log(res);
