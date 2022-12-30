function countSetBits(n)
{
	var count = 0;
	while (n)
	{
	count += n & 1;
	n >>= 1;
	}
	return count;
}

var i = 9;
console.log(countSetBits(i));
