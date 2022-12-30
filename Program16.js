// Write a program to find Mean of given Array Elements?

let a = [1, 2, 3, 4, 5];



let findMean = (a, n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += a[i];

  return sum / a.length;;
};

console.log("Mean of the array is : ", findMean(a, n));
