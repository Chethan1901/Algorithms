// Write a program given an array of ‘N’ numbers, find LCM of it.
let gcd=(a,b)=>{
    if (a == 0) 
         return b; 
return gcd(b % a, a);
}
function lcm(a,b){
    return ((a*b) / gcd(a, b))
}

let lcm_arr=(arr,n)=>{
    let result =arr[0];
    for(let i=1;i<n;i++){
        let end;
        console.log("Lcm(", result, ",", arr[i], ")", end="")
        result = lcm( arr[i],result)
        
        console.log("=", result)
      
    }
    return result;
}
var arr = [20, 40, 60, 800]
var n = arr.length;
console.log("LCM of the array is :", lcm_arr(arr, n))