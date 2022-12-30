//Write a program to find the minimum and maximum values that can be calculated by summing exactly
// four of the five integers. Then print the respective minimum and maximum values as a single line of
// two space-separated long integers.
// Example, Input: [1, 2, 3, 4, 5]
// Output; [10, 14]

let sumFour = (arr, n) => {
  if (n == 1) {
    return arr;
  }
  let arr_sum = 0;
  for (let i = 0; i < n; i++) {
    arr_sum += arr[i];
  }

  let new_arr = [];
  for (let i in arr) {
    //   console.log(`sum is ${arr_sum-i}`)
    new_arr.push(arr_sum - arr[i]);
  }
  new_arr.sort();
  return `output is [ ${new_arr[0]},${new_arr[n - 1]}]`;
};
let arr = [11, 2, 3, 4, 10];
let n = arr.length;
console.log(sumFour(arr, n));
