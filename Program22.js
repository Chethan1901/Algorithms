//Write a program to Check Whether the given year is a leap year or not
let leapYear = (n) => {
  if (n % 400 == 0 && n % 100 == 0) {
    //century year (ending with 00)
    console.log(` ${n} is a leap year`);
  } else if (n % 100 != 0 && n % 4 == 0) {
    //not divided by 100 means not a century year
    console.log(` ${n} is a leap year`);
  } else {
    console.log(` ${n} is not a leap year`);
  }
};
leapYear(1998);
