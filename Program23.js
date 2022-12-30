//Write a program to check whether a number is a positive number or negative number?

let check = (num) => {
  if (num == 0) {
    console.log("Its a zero");
  } else if (num > 0) {
    console.log("Positive Number");
  } else {
    console.log("Negative Number");
  }
};
check(-5)