// Write An Algorithm using Javascript to check if a given number is in the following series

// 4,16,64,256,1024,4096,16384.,......., 4^N

let series = (array, n) => {
  if (n == 1) {
    return true;
  }
  let r = parseInt(array[1] / array[0]);
  for (let i = 1; i < n; i++) {
    if (parseInt(array[i] / array[i - 1]) != r) {
      return false;
    }
  }
  return true;
};

let arr = [4, 16, 64, 256];
let n = arr.length;
console.log(n);
console.log(series(arr, n));
