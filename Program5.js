// Write a program to find remainder of two numbers without using modulus (%) operator
let multi = (a, b) => {
  let mul = 0;
  for (let i = 1; i <= b; i++) {
    mul = mul + a;
  }
  console.log(mul);
};

multi(5, 2);
