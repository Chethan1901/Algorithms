// Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two
// numbers is the largest number that divides both of them using recursion.

let findGcd = (num1,num2) => {
  let gcd;
  for (let i = 0; i <= num2 && i <= num1; ++i) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  console.log(`GCD of ${num1} and ${num2} is : `, gcd);
};
findGcd(12,10)