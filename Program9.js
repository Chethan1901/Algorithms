// Write a program find GCD of the array elements given an array of numbers
let gcd = (a, b) => {
  if (a == 0) return b;
  return gcd(b % a, a);
};

let gcd_arr = (arr, n) => {
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    let end;
    console.log("gcd(", result, ",", arr[i], ")", (end = ""));
    result = gcd(arr[i], result);
    console.log("=", result);
  }
  return result;
};
var arr = [90, 100, 40, 60, 80];
var n = arr.length;
console.log("GCD of the array is :", gcd_arr(arr, n));
