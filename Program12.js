// Write a program for swapping of two arrays
let a = [1, 2, 3];
let b = [4, 5, 6];
let swap = (array1, array2) => {
  let temp = [];
  temp = array1;
  array1 = array2;
  array2 = temp;
  console.log("After swapping 'array1' is ", array1);
  console.log("After swapping 'array2' is ", array2);
};

swap(a, b);
