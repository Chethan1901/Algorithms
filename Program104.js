function multiplyWith3Point5(x) {
	return (x << 1) + x + (x >> 1);
}

var x = 4;
console.log(multiplyWith3Point5(x));
