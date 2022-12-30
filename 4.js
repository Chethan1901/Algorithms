// Write a program to subtract two integers without using Minus (-) operator

let subtract = (num1, num2) => {
  let sub = num1 + ~num2 +1;
  console.log(`${num1} - ${num2} is  `, sub);
};


subtract(5,4)