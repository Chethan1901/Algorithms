// Write a program to find the highest and the lowest number in array?

let array = [3, 5, 1, 6, 8, 9];
let findHL = (arr) => {
  let result = arr.sort();
  console.log(result);
  let last = result.length;
  console.log("Lowest number of an array is : ", result[0]);
  console.log("Highest number of an array is : ", result[last - 1]);
};

findHL(array);
