function isPowerOfFour(n) {
	if (n == 0) return false;
	while (n != 1) {
		if (n % 4 != 0) return false;
		n = n / 4;
	}
	return true;
}

let test_no = 64;
if (isPowerOfFour(test_no)) console.log(test_no + " is a power of 4");
else console.log(test_no + " is not a power of 4");
