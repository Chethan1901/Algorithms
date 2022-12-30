// 2) Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd Numbers.

let gen = (n) => {
  var even = [];
  var odd = [];
  for (let i = 1; i < n; i++) {
    if (i % 2 == 0) {
      // console.log(`${i} is even`)
      even.push(i);
    } else {
      // console.log(`${i} is odd`);
      odd.push(i);
    }
  }
  console.log(`Even numbers less than ${n} : `, even);
  console.log(`Odd numbers less than ${n} : `, odd);
};

gen(10)