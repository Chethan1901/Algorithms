// Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buzz".
let wordPrint = (start, end) => {
  for (var i = start; i <= end; i++) {
    // console.log(i)
    if (i % 15 == 0) {
      console.log("Fizz_Bizz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

wordPrint(1, 100);
