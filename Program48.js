/*

    Write An Algorithm in Javascript to find the Power Function with Left Shift(1<<N) and without Left
    Shift, M^N Power Function.

*/

//Left Shift
function power(m, n) {
  return 1 << n;
}

console.log(power(2, 3));

//N^N
function power(m, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= m;
  }
  return result;
}

//pow()
function power(m, n) {
  return Math.pow(m, n);
}


