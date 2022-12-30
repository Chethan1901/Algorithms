/*

    99) Write a program to produce the series as of below
        1 3 8 15 27 50 92 169 311

*/

function series(no) {
	let series = new Array();
	let a = 1,
		b = 3,
		c = 4,
		n = 10,
		sum,
		i;
	series.push(a);
	series.push(b);
	for (i = 4; i <= n; i++) {
		sum = a + b + c;
		series.push(sum);
		a = b;
		b = c;
		c = sum;
	}

	return series;
}
let res = series(15);
console.log(res);
