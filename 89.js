function squaresum(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) sum += i * i;
	return sum;
}

let n = 4;
console.log(squaresum(n) + "\n");
