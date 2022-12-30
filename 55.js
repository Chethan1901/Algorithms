// Write a program to calculate factorial of any given number N. With recursion, without recursion.
// Which approach is more efficient?

let factorial = (n) => {
    if (n <= 1) return 1; // more efficient
    else {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  };
  console.log(factorial(3));
  