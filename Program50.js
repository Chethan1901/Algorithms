// Write An Algorithm using Javascript to Reverse Array Elements without using Built in Function, ​with
// using temp array?

let reverse=(arr)=>{
    let out=[]
    for(let i=arr.length-1;i>=0;i--){
        out.push(arr.pop())
    }
    return out
    }
    console.log(reverse([1,2,3,4,5]))