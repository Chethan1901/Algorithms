function median(arr) {
    var arr2 = arr;
    arr2 = arr2.sort( function (a, b) { return a - b });

    var length = arr2.length;

    if (length % 2 == 1) {
        return arr2[(length / 2) - .5]
    }
    else {
        return (arr2[length / 2] 
            + arr2[(length / 2) - 1]) / 2;
    }
}

arr = [1, 4, 7, 9]

median(arr)