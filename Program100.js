/*

    100) Write a program for given array where every element occurs three times, except one element
    which occurs only once. Find the element that occurs once

*/

function findOnce(arr){
    let n=arr.length;
    for (let i = 0; i < n; i++) {
            // Initialize count to 0
            let count = 0;
            for (let j = 0; j < n; j++) {
                // Count the frequency
                // of the element
                if (arr[i] == arr[j]) {
                    count++;
                }
            }
            // if the frequency of the
            // element is one
            if (count == 1) {
                return arr[i];
            }
        }
    // if no element exist at most once
    return -1;
}

let res = findOnce([ 2, 3, 5, 4, 5, 3, 4]);
console.log(res);