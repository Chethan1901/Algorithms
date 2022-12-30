// Write a program to find area and circumference of circle

let findCircum = (r) => {
  let pi = Math.PI;
  let r_sqr = Math.pow(r, 2);
  console.log("square of the circle : ", (pi * r_sqr).toFixed(2));
  let c = (2 * pi * r).toFixed(2);
  console.log("circumference of the circle : ", c);
};
findCircum(2);
