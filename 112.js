
	function combinationUtil(arr,data,start,end,index,r)
	{
		if (index == r)
		{
			for (let j=0; j<r; j++)
			{
				console.log(data[j]+" ");
			}
			console.log("\n")
		}
		
	
		for (let i=start; i<=end && end-i+1 >= r-index; i++)
		{
			data[index] = arr[i];
			combinationUtil(arr, data, i+1, end, index+1, r);
		}
	}
	

	function printCombination(arr,n,r)
	{
		let data = new Array(r);
		
		combinationUtil(arr, data, 0, n-1, 0, r);
	}
	
	let arr=[1, 2, 3, 4, 5];
	let r = 3;
	let n = arr.length;
	printCombination(arr, n, r);
	
	
