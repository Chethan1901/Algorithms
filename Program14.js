// Write a program to find Median of the given Array?
let array = [1, 2, 3, 4, 6,8];

let findMedian = (arr) => {
  let sorted = arr.sort();
  console.log(sorted);
  let even = sorted.length % 2 == 0;
  if (even) {
    var median = sorted.length / 2;
    var add = sorted[median - 1] + sorted[median];
    console.log("Median of the array,which has even no.of items is : ", add / 2);
  } else {
    median = Math.floor(sorted.length / 2);
    console.log(
      "Median of the given array,which has odd no.of items is : ",
      sorted[median]
    );
  }
};

findMedian(array);
