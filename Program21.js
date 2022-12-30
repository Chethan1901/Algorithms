// Write a program to find the roots of a quadratic equation

let a = 12,
  b = 13,
  c = 15;
let D = b * b - 4 * a * c;
//real and equal
if (D == 0) {
  let r1 = (r2 = -b / (2 * a));
  //  let r2=r1
  console.log(`root are : ${r1} and ${r2}`);
}
//real and diff
else if (D > 0) {
  r1 = (-b + Math.sqrt(D)) / (2 * a);
  let r2 = (-b - Math.sqrt(D)) / (2 * a);
  console.log("root1:" + r1);
  console.log("root2:" + r2);
}
//imaginary roots
else if (D < 0) {
  let r = -b / (2 * a);
  let j = Math.sqrt(-D) / (2 * a);
  // console.log(2*a)
  // console.log(D)
  // console.log(j)

  // r2=(-b-Math.sqrt(D))/(2*a)
  console.log(`root1: ${r} + i ${j}`);
  console.log(`root1: ${r} - i ${j}`);
}
