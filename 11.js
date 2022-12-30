// Write a program to find the Sum of Array Elements.

let arr = [1, 2, 3, 4, 50];
let sumOfarr = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    // console.log(sum)
  }

  console.log("sum of array is : ", sum);
};

sumOfarr(arr);
