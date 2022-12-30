// Write a program to find whether given number is an Perfect number or not.

// Perfect number is a positive integer that is equal to the sum of its proper divisors.



let findPerfect = (n) => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      sum += i;
      console.log(sum)
    }
  }
  if (n == sum) {
    console.log(n,"is a perfect number");
  } else {
    console.log(n,"is not a perfect number");
  }
};

findPerfect(6)