// Write a program to find the largest number among three numbers

let findLargest = (a, b, c) => {
  if (a > b && a > c) {
    console.log(`${a} greatest`);
  } else if (b > c && b > a) {
    console.log(`${b} greatest`);
  } else {
    console.log(`${c} greatest`);
  }
};
findLargest(1,5,3)