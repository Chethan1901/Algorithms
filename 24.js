// Write a program to Program to calculate the Combinations and Permutations!
// Combination means way of selecting a things or particular item into group or sets.
// nCr=n!/r!(n-r)!.
// Permutations means possible way of rearranging in the group or set in the particular order.
// nPr=n!/(n-r)!
let n, r, x;

// taking out factorial 
function factorial(x) {
  return x === 1 ? x : x * factorial(x - 1);
}

// getting combinations
function getComb(n, r) {
  if (n == r || r == 0) {
    return 1;
  }

  return factorial(n) / (factorial(r) * factorial(n - r));
}
console.log(getComb(6, 2));

//getting permutations 
function getpermu(n, r) {
  return factorial(n) / factorial(n - r);
}

console.log(getpermu(6, 2));
