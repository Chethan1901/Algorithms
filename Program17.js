// Write a program to find whether given number is an Armstrong number or not? ** (Narcissistic number or Pluperfect digital invariant (PPDI) or a Plus perfect number)

let armstrong = (n) => {
 
//   console.log(typeof ("" + n)); //string
  let len = ("" + n).length;
  let sum = 0;
  let temp = n;
  while (n > 0) {
    sum += (n % 10) ** len;
    n = Math.floor(n / 10);
  }

  if (sum == temp) {
    console.log(`${temp} is a armstrong number`);
  } else {
    console.log(`${temp} is not a armstrong number`);
  }
};
armstrong(371);//153,1634
