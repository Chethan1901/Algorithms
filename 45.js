/*
    45) Write a program to Convert Negative Decimal Number to Binary (2’s Complement)
*/

function decimalToBinary(decimalNum) {
  // Convert the absolute value of the decimal number to binary
  var binaryNum = decimalNum.toString(2);

  // Invert the binary number
  var invertedNum = binaryNum.replace(/0/g, "1").replace(/1/g, "0");

  // Add 1 to the inverted binary number
  var result = (parseInt(invertedNum, 2) + 1).toString(2);

  // If the original decimal number was negative, prepend a "1" to the result
  if (decimalNum < 0) {
    result = "1" + result;
  }

  return result;
}

console.log(decimalToBinary(-42)); // Output: "010110"
