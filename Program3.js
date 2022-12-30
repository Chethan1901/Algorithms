// 3) Write a program to decide given N is Prime or not.
let flag = true; //flg
let prime = (num) => {
  let flag = true; //flg
  if (num === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        //not to be multiple of any number
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(`${num} is a prime number `);
    } else {
      console.log(`${num} is not prime number`);
    }
  } else {
    console.log("enetered num is less than 1");
  }
};

prime(2);
