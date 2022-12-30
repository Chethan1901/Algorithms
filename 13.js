// Write a program to find the maximum number in an array using function
let smallest=(arr)=> { 
    // Initialize maximum element
    let min = arr[0];
    for ( let i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
  return min;
  }
  let arr = [10, 324, 45, 90, 9808,1,8];
  console.log("Smallest value in a array is : " , smallest(arr))